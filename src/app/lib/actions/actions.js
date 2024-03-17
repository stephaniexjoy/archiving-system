"use server";
import { db } from "../prisma_db";
import { backendClient } from "../edgestore-server";
import bcrypt from "bcrypt";

import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

import crypto from "crypto";

function getDateNow() {
  const dateString = new Date();
  const dateObject = new Date(dateString);

  return dateObject;
}

async function getUserSession() {
  const session = getServerSession(AuthOptions);
  return session;
}

export async function createAccount(formData, sessionUser) {
  const dateString = new Date();
  const dateObject = new Date(dateString);

  const name = formData.get("nameInput");
  const role = formData.get("roleInput");
  const category = formData.get("catInput");
  const specialization = formData.get("specInput");
  const license = formData.get("licInput");
  const emailForm = formData.get("emailInput");
  const password = formData.get("passInput");
  const age = formData.get("ageInput");
  const sex = formData.get("sexInput");
  const empNo = formData.get("employeeNoInput");

  const hashedPassword = await bcrypt.hash(password, 12);
  console.log(hashedPassword);

  const existingUser = await db.user.findMany({
    where: {
      OR: [{ email: emailForm }, { employee_no: empNo }],
    },
  });

  if (existingUser) return "Existing User";

  const [createUser, addActivity] = await db.$transaction([
    db.user.create({
      data: {
        employee_no: empNo,
        email: emailForm,
        password: hashedPassword,
        name: name,
        age: parseInt(age),
        sex: sex,
        position: role,
        designation: category,
        specialization: specialization,
        license: license,
        education: {
          create: {},
        },
      },
    }),
    db.activity.create({
      data: {
        name: sessionUser.name,
        position: sessionUser.position,
        type: "CREATED NEW USER",
        createdAt: dateObject,
        user: {
          connect: {
            id: sessionUser.id,
          },
        },
      },
    }),
  ]);
  if (createUser) return createUser;
}

export async function updateUser(formData, sessionUser) {
  console.log(formData, sessionUser);

  const dateString = new Date();
  const dateObject = new Date(dateString);

  const profilePic = formData.get("profilepic");
  const nameUpd = formData.get("updName");
  const roleUpd = formData.get("updRole");
  const designationUpd = formData.get("updDesignation");
  const licenseUpd = formData.get("updLicense");
  const schoolUpd = formData.get("updSchool");
  const specUpd = formData.get("updSpec");
  const certUpd = formData.get("updCert");
  const bacDegUpd = formData.get("updBacDeg");
  const masDegUpd = formData.get("updMasDeg");
  const docDegUpd = formData.get("updDocDeg");
  const bacSchlUpd = formData.get("updBacDegSchl");
  const masSchlUpd = formData.get("updMasDegSchl");
  const docSchlUpd = formData.get("updDocDegSchl");
  const seminarsUpd = formData.get("seminarsUpd");
  const expUpd = formData.get("experUpd");
  const pastDesigUpd = formData.get("desigUpd");
  const subjectsUpd = formData.get("subjectUpd");
  const presPaperUpd = formData.get("papersUpd");
  const extProjUpd = formData.get("extUpd");

  console.log(profilePic);

  let profilePhotoPath = null;

  if (profilePic) {
    const fileExtension = profilePic.name.split(".").pop();
    const res = await backendClient.publicImages.upload({
      content: {
        blob: new Blob([profilePic], { type: profilePic.type }),
        extension: fileExtension,
      },
    });
    profilePhotoPath = res.url;
  }

  console.log(profilePhotoPath);

  const [updUser, updUser_Educ] = await db.$transaction([
    db.user.update({
      where: { id: sessionUser.id },
      data: {
        name: nameUpd,
        position: roleUpd,
        designation: designationUpd,
        specialization: specUpd,
        license: licenseUpd,
        certifications: certUpd,
        profile_photo_path: profilePhotoPath,
        education: {
          update: {
            school: schoolUpd,
            bacDegree: bacDegUpd,
            bacSchool: bacSchlUpd,
            masDegree: masDegUpd,
            masSchool: masSchlUpd,
            docDegree: docDegUpd,
            docSchool: docSchlUpd,
            seminars_trainings: seminarsUpd,
            experience: expUpd,
            past_designation: pastDesigUpd,
            subjects_handled: subjectsUpd,
            presented_papers: presPaperUpd,
            extension_projs: extProjUpd,
          },
        },
      },
      include: {
        education: true,
      },
    }),
    db.activity.create({
      data: {
        name: sessionUser.name,
        position: sessionUser.position,
        type: "EDITED PROFILE",
        createdAt: dateObject,
        user: {
          connect: {
            id: sessionUser.id,
          },
        },
      },
    }),
  ]);

  if (updUser) {
    console.log(updUser, updUser_Educ);
    return updUser;
  }
}

export async function uploadFile(formData, sessionUser) {
  const material = formData.get("matFile");
  const fileType = formData.get("typeFile");
  const program = formData.get("programFile");
  const privacy = formData.get("privacyFile");
  const fileInput = formData.get("inputFile");

  const dateString = new Date();
  const dateObject = new Date(dateString);

  console.log(material, fileType, program, privacy, fileInput);

  let fileInputPath = null;

  const fileExtension = fileInput.name.split(".").pop();

  const res = await backendClient.publicFiles1.upload({
    content: {
      blob: new Blob([fileInput], { type: fileInput.type }),
      extension: fileExtension,
    },
  });
  fileInputPath = res.url;

  const [uploadFile, saveUserActivity] = await db.$transaction([
    db.file.create({
      data: {
        filename: fileInput.name,
        fileType: fileInput.type,
        filePath: fileInputPath,

        uploaderName: sessionUser.name,
        fileRole: privacy,
        uploadDate: dateObject,
        User: {
          connect: {
            id: sessionUser.id,
          },
        },
      },
    }),
    db.activity.create({
      data: {
        name: sessionUser.name,
        position: sessionUser.position,
        type: "UPLOADED A FILE",
        createdAt: dateObject,
        user: {
          connect: {
            id: sessionUser.id,
          },
        },
      },
    }),
  ]);
  if (uploadFile) {
    return uploadFile;
  }
}

export async function addFilter(formData, category) {
  const session = await getServerSession(AuthOptions);

  const dateString = new Date();
  const dateObject = new Date(dateString);

  const addToFilter = formData.get("categoryInput");
  const categoryBody = category;

  if (categoryBody === "Material") {
    const existingData = await db.materials.findUnique({
      where: { value: addToFilter },
    });

    if (existingData) {
      return "existingData";
    }

    const [addCategory, addActivity] = await db.$transaction([
      db.materials.create({
        data: {
          value: addToFilter.toLowerCase(),
          label: addToFilter,
        },
      }),
      db.activity.create({
        data: {
          name: session.user.name,
          position: session.user.position,
          type: "ADDED NEW MATERIAL(FILTER)",
          createdAt: dateObject,
          user: {
            connect: {
              id: session.user.id,
            },
          },
        },
      }),
    ]);
    if (addCategory) {
      return addCategory;
    }
  }

  if (categoryBody === "Course") {
    const existingData = await db.courses.findUnique({
      where: { value: addToFilter },
    });

    if (existingData) {
      return existingData;
    }

    const [addCategory, addActivity] = await db.$transaction([
      db.courses.create({
        data: {
          value: addToFilter.toLowerCase(),
          label: addToFilter,
        },
      }),
      db.activity.create({
        data: {
          name: session.user.name,
          position: session.user.position,
          type: "ADDED NEW COURSE(FILTER)",
          createdAt: dateObject,
          user: {
            connect: {
              id: session.user.id,
            },
          },
        },
      }),
    ]);
    if (addCategory) {
      return addCategory;
    }
  }
}

export async function addTasks(formData, date) {
  const session = await getServerSession(AuthOptions);

  const dateString = new Date();
  const dateObject = new Date(dateString);
  //const dateObject1 = new Date(date)

  console.log(formData);

  const titleForm = formData.get("titleInput");
  const instruction = formData.get("instructionInput");
  const isNoDueDate = formData.get("isNoDueDateBox");
  let deadlineDate = null;

  if (!isNoDueDate) {
    const deadline = formData.get("time");
    const formattedDate = date.toLocaleDateString("en-US");

    const [month, day, year] = formattedDate.split("/");
    const [hours, minutes] = deadline.split(":");

    const dateTime = new Date(year, month - 1, day, hours, minutes); // Month is 0-indexed, so subtract 1
    deadlineDate = dateTime.toISOString();
  }

  const [addTask, addActivity] = await db.$transaction([
    db.tasks.create({
      data: {
        User: {
          connect: {
            id: session.user.id,
          },
        },
        uploaderName: session.user.name,
        isUserDone: false,
        title: titleForm,
        deadlineCreated: dateObject,
        setDeadline: deadlineDate,
        isActive: true,
        description: instruction,
      },
    }),
    db.activity.create({
      data: {
        name: session.user.name,
        position: session.user.position,
        type: "ADDED NEW TASKS",
        createdAt: dateObject,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    }),
  ]);
  revalidatePath("/secretary/dashboard/archiving");
  if (addTask) return addTask;
}

export async function getMaterials() {
  const materials = await db.materials.findMany();
  if (materials) {
    console.log(materials);
  }
  return materials;
}

export async function getCourses() {
  const courses = await db.courses.findMany();
  if (courses) {
    console.log(courses);
  }
  return courses;
}

export async function getInstructors() {
  const instructors = await db.user.findMany({
    select: {
      name: true,
      email: true,
    },
  });

  if (instructors) {
    console.log(instructors);
  }
  return instructors;
}

export async function getFileTypes() {
  const fileTypes = await db.filetype.findMany();
  if (fileTypes) {
    console.log(fileTypes);
  }
  return fileTypes;
}

export async function getTasks() {
  const tasks = await db.tasks.findMany();
  if (tasks) return tasks;
}

export async function getCompletedTasks() {
  const session = await getUserSession();
  console.log(session);
  const completedTasks = await db.completedTask.findMany({
    where: {
      userId: session.user.id,
    },
  });
  return completedTasks;
}

export async function confirmUpload(urls, fileInfo, taskId) {
  console.log(urls);
  console.log(fileInfo);
  console.log(taskId);

  const session = await getUserSession();
  const sessionUser = session.user;
  console.log(sessionUser);
  let index = 0;
  try {
    for (const url of urls) {
      const res = await backendClient.publicFiles1.confirmUpload({
        url,
      });

      console.log("Index: ", index, fileInfo[index]);
      const res1 = await newuploadFile(
        fileInfo[index],
        urls[index],
        sessionUser
      );
      index++;
    }

    const setCompleted = await addToCompletedTask(taskId, sessionUser);
    console.log(setCompleted);

    return "Success";
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}

export async function newuploadFile(fileInfo, url, sessionUser) {
  const dateString = new Date();
  const dateObject = new Date(dateString);

  const fileExtension = fileInfo.extension;

  console.log(fileInfo, url, sessionUser);

  try {
    const [uploadFile, saveUserActivity] = await db.$transaction([
      db.file.create({
        data: {
          filename: fileInfo.name,
          fileType: fileExtension,
          filePath: url,

          uploaderName: sessionUser.name,

          uploadDate: dateObject,
          User: {
            connect: {
              id: sessionUser.id,
            },
          },
        },
      }),
      db.activity.create({
        data: {
          name: sessionUser.name,
          position: sessionUser.position,
          type: "UPLOADED A FILE",
          createdAt: dateObject,
          user: {
            connect: {
              id: sessionUser.id,
            },
          },
        },
      }),
    ]);
    if (uploadFile) {
      return JSON.parse(JSON.stringify(uploadFile));
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateFile(filePath, material, program, permission) {
  console.log(filePath, material, program, permission);

  const updateFileInfo = await db.file.update({
    where: {
      filePath: filePath,
    },
    data: {
      fileMaterial: material,
      fileProgram: program,
      fileRole: permission,
    },
  });

  return updateFileInfo;
}

export async function addToCompletedTask(taskId, sessionUser) {
  const dateNow = getDateNow();
  try {
    const setComplete = await db.completedTask.create({
      data: {
        user: {
          connect: {
            id: sessionUser.id,
          },
        },
        task: {
          connect: {
            id: taskId,
          },
        },
        completed: dateNow,
      },
    });
    console.log(setComplete);
    return setComplete;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  const users = await db.user.findMany({
    select: {
      employee_no: true,
      position: true,
      designation: true,
      name: true,
      email: true,
      id: true,
    },
  });

  revalidatePath("/secretary/dashboard/viewfaculty/");
  return users;
}

export async function getCompletedTasksById(taskId) {
  const getCompletedTasks = await db.completedTask.findMany({
    where: {
      taskId: taskId,
    },
  });
  return getCompletedTasks;
}

export async function getUserInfo() {
  const sessionUser = await getUserSession();

  console.log(sessionUser);
  const user = await db.user.findUnique({
    where: { id: sessionUser.user.id },
  });
  return user;
}

export async function forgotPassword(email) {
  try {
    const findUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(findUser);

    if (findUser) {
      const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
      const today = new Date();
      const expiryTime = new Date(today.getTime() + 20 * 60000);

      const hashedToken = await bcrypt.hash(resetPasswordToken, 12);

      console.log(resetPasswordToken);
      console.log(hashedToken);
      console.log(expiryTime);

      /*  const pasokba = await bcrypt.compare(resetPasswordToken, hashedToken);
      console.log(pasokba); */
      try {
        const updateUser = await db.user.update({
          where: { email: email },
          data: {
            resetPasswordToken: hashedToken,
            tokenExpiry: expiryTime,
          },
        });
        if (updateUser) {
          return "User_Found";
        }
      } catch (error) {
        console.log(error);
      }

      return "Error";
    } else {
      return "Error";
    }
  } catch (error) {
    console.log(error);
    return "Error";
  }
}

export async function performForgotPassword(resetObject) {
  console.log(resetObject);
  const dateNow = new Date();

  try {
    const findUserbyEmail = await db.user.findUnique({
      where: { email: resetObject.email },
    });

    if (
      findUserbyEmail &&
      (await bcrypt.compare(
        resetObject.resetPasswordToken,
        findUserbyEmail.resetPasswordToken
      )) &&
      dateNow <= findUserbyEmail.tokenExpiry
    ) {
      console.log("Pasok");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return "Error";
  }
}

export async function getUpdatedPassword(newPassword, userInfo) {
  console.log(newPassword, userInfo);
  const hashedPassword = await bcrypt.hash(newPassword, 12);

  try {
    const updatePassword = await db.user.update({
      where: { email: userInfo.email },
      data: { password: hashedPassword },
    });
    return updatePassword;
  } catch (error) {
    console.log(error);
  }
}
