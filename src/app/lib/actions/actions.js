"use server";
import { db } from "../prisma_db";
import { backendClient } from "../edgestore-server";
import bcrypt from "bcrypt";

import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

import crypto from "crypto";
import { compileEmailTemplate, sendMail } from "../mailer/mail";

function getDateNow() {
  const dateString = new Date();
  const dateObject = new Date(dateString);

  return dateObject;
}

async function getUserSession() {
  const session = getServerSession(AuthOptions);
  return session;
}

export async function createAccount(formData) {
  const sessionUser = await getUserSession();
  console.log(sessionUser);
  const dateString = new Date();
  const dateObject = new Date(dateString);

  const nameForm = formData.get("nameInput");
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
  console.log(existingUser);
  if (existingUser.length > 0) {
    return "Existing User";
  } else {
    try {
      const createUser = await db.user.create({
        data: {
          name: nameForm,
          employee_no: empNo,
          email: emailForm,
          password: hashedPassword,
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
      });
      if (createUser) {
        console.log(createUser);
        const recordActivity = await db.activity.create({
          data: {
            name: sessionUser.user.name,
            position: sessionUser.user.position,
            type: "CREATED NEW USER",
            createdAt: dateObject,
            user: {
              connect: {
                id: sessionUser.user.id,
              },
            },
          },
        });
        return createUser;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export async function updateUser(formData) {
  const sessionUser = await getUserSession();
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
  const extProjUpd = formData.get("extUpd");
  const ppc = formData.get("ppc");
  const ppp = formData.get("ppp");
  const pppresent = formData.get("pppresent");

  console.log(roleUpd, designationUpd);

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

  const userDataToUpdate = {
    name: nameUpd,
    position: roleUpd,
    designation: designationUpd,
    specialization: specUpd,
    license: licenseUpd,
    certifications: certUpd,
    profile_photo_path: profilePhotoPath,
    education: {},
  };

  if (schoolUpd) userDataToUpdate.education.school = schoolUpd;
  if (bacDegUpd) userDataToUpdate.education.bacDegree = bacDegUpd;
  if (bacSchlUpd) userDataToUpdate.education.bacSchool = bacSchlUpd;
  if (masDegUpd) userDataToUpdate.education.masDegree = masDegUpd;
  if (masSchlUpd) userDataToUpdate.education.masSchool = masSchlUpd;
  if (docDegUpd) userDataToUpdate.education.docDegree = docDegUpd;
  if (docSchlUpd) userDataToUpdate.education.docSchool = docSchlUpd;
  if (seminarsUpd) userDataToUpdate.education.seminars_trainings = seminarsUpd;
  if (expUpd) userDataToUpdate.education.experience = expUpd;
  if (pastDesigUpd) userDataToUpdate.education.past_designation = pastDesigUpd;
  if (subjectsUpd) userDataToUpdate.education.subjects_handled = subjectsUpd;
  if (ppc) userDataToUpdate.education.presented_papers_completed = ppc;
  if (ppp) userDataToUpdate.education.presented_papers_published = ppp;
  if (pppresent)
    userDataToUpdate.education.presented_papers_presented = pppresent;
  if (extProjUpd) userDataToUpdate.education.extension_projs = extProjUpd;

  const [updUser, updUser_Educ] = await db.$transaction([
    db.user.update({
      where: { id: sessionUser.user.id },
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
            presented_papers_completed: ppc,
            presented_papers_published: ppp,
            presented_papers_presented: pppresent,
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
        name: sessionUser.user.name,
        position: sessionUser.user.position,
        type: "EDITED PROFILE",
        createdAt: dateObject,
        user: {
          connect: {
            id: sessionUser.user.id,
          },
        },
      },
    }),
  ]);

  if (updUser) {
    console.log(updUser, updUser_Educ);
    return updUser;
  }
  console.log(userDataToUpdate);
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
  revalidatePath("/dashboard/archiving");
  revalidatePath("/secretary/dashboard/archiving");
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

export async function getPrograms() {
  const getData = await db.Courses.findMany({});
  return getData;
}

export async function getTasks() {
  const tasks = await db.tasks.findMany({
    where: {
      isActive: true,
    },
  });
  if (tasks) return tasks;
}

export async function getArchivedTasks() {
  const tasks = await db.tasks.findMany({
    where: {
      isActive: false,
    },
  });
  if (tasks) return tasks;
}

export async function getTasksActive() {
  const tasks = await db.tasks.findMany({
    where: {
      isActive: true,
    },
  });
  if (tasks) return tasks;
}

export async function getCompletedTasks() {
  const session = await getUserSession();
  console.log(session);
  const completedTasks = await db.completedTask.findMany({
    where: {
      userId: session.user.id,
    },
    include: { task: true },
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
  let uploadResult = [];
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
      console.log(res1);
      uploadResult.push(res1);
    }
    console.log(uploadResult);
    const fileIds = uploadResult.map((file) => file.id);
    console.log("File Ids: ", fileIds);

    const setCompleted = await addToCompletedTask(taskId, sessionUser, fileIds);
    console.log(setCompleted);

    return "Success";
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}

export async function uploadFiletype(fileInfo) {}

export async function getFileTypes() {
  const fileTypes = await db.file.findMany({
    distinct: ["fileType"],
    select: { fileType: true },
  });
  console.log(fileTypes);
  return fileTypes;
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
  revalidatePath("/dashboard/archiving");
  revalidatePath("/secretary/dashboard/archiving");
  return updateFileInfo;
}

export async function addToCompletedTask(taskId, sessionUser, fileIds) {
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

    try {
      const res = addCompletedTaskIdToFile(setComplete, fileIds);
    } catch (error) {
      console.log(error);
    }

    return setComplete;
  } catch (error) {
    console.log(error);
  }
}

export async function addCompletedTaskIdToFile(setComplete, fileIds) {
  try {
    const res = await db.file.updateMany({
      where: {
        id: {
          in: fileIds,
        },
      },
      data: {
        completedTaskId: setComplete.id,
      },
    });
    console.log("added completedTaskId", res);
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
    include: { education: true },
  });
  return user;
}

export async function getUserInfobyId(userId) {
  const user = await db.user.findUnique({
    where: { id: parseInt(userId) },
    include: { education: true },
  });
  console.log(user);
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
          const url = `http://localhost:3000/forgot-password?email=${email}&resetPasswordToken=${resetPasswordToken}`;
          await sendMail({
            to: email,
            name: "ccs",
            subject: "Requested to change forgotten password",
            body: compileEmailTemplate(email, url),
          });
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

export async function getActivities() {
  const activities = await db.activity.findMany({});
  if (activities) return activities;
}

export async function getTaskById(taskId) {
  const session = await getUserSession();
  try {
    const getTask = await db.tasks.findUnique({
      where: { id: parseInt(taskId) },
      include: {
        CompletedTask: {
          where: {
            AND: [{ taskId: parseInt(taskId) }, { userId: session.user.id }],
          },
          include: {
            Files: true,
          },
        },
      },
    });
    if (getTask) {
      return getTask;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(userId) {
  const deleteEducation = await db.User_Education.deleteMany({
    where: {
      id: userId,
    },
  });

  const archiveUser = await db.user.delete({
    where: {
      id: userId,
    },
  });
  revalidatePath("/dashboard/manageuser");
  revalidatePath("/dashboard/viewfaculty");
  return archiveUser;
}

export async function adminUpdateUser(formData, userId) {
  const positionUpd = formData.get("position");
  const emailUpd = formData.get("email");
  const passwordUpd = formData.get("password");
  const passConfirm = formData.get("passwordconfirm");

  const passUpdHashed = await bcrypt.hash(passwordUpd, 12);

  if (passwordUpd === passConfirm) {
    const updUser = await db.user.update({
      where: { id: userId },
      data: {
        // Update the fields you want to modify
        position: positionUpd,
        email: emailUpd,
        password: passUpdHashed,
        // Add other fields as needed
      },
    });
    return updUser;
  } else {
    return "Password does not match";
  }
  revalidatePath("/dashboard/manageuser");
}

export async function userUpdateUser(formData) {
  const sessionUser = await getUserSession();

  console.log(sessionUser);
  const email = formData.get("emailUpd");
  const currentPassword = formData.get("currentPass");
  const newPassword = formData.get("newPass");
  const confirmPassword = formData.get("newPassConfirm");

  try {
    const user = await db.user.findUnique({
      where: { email: email },
      select: { email: true, password: true },
    });

    console.log(user);
    if (user) {
      const passCheck = await bcrypt.compare(currentPassword, user.password);
      if (passCheck) {
        console.log(
          email,
          currentPassword,
          newPassword,
          confirmPassword,
          user.password,
          passCheck
        );
        if (newPassword === confirmPassword) {
          const hashedPassword = await bcrypt.hash(newPassword, 12);
          console.log(hashedPassword);

          const updPrivacy = await db.user.update({
            where: { email: email },
            data: {
              password: hashedPassword,
            },
          });
          if (updPrivacy) {
            return "Successfully Updated Privacy";
          }
        } else {
          return "New Password and Confirm Password Mismatch";
        }
      } else {
        return "Password Mismatch";
      }
    } else {
      return "No Email Found";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function archiveTask(taskId) {
  try {
    const findTask = await db.tasks.update({
      where: {
        id: taskId,
      },
      data: {
        isActive: false,
      },
    });
    console.log(findTask);
    revalidatePath("/dashboard/archiving");
    revalidatePath("/secretary/dashboard/archiving");
  } catch (error) {
    console.log(error);
  }
}

export async function editProfile_Secretary(formData) {
  const sessionUser = await getUserSession();

  const pic = formData.get("pictureInput");
  const name = formData.get("nameInput");
  const age = formData.get("ageInput");
  const sex = formData.get("sexInput");
  const designation = formData.get("designationInput");
  /*  const empno = formData.get("employeeNoInput");
  const dept = formData.get("departmentInput");
  const email = formData.get("emailInput"); */

  //console.log(pic, name, age, sex, empno, dept, email);

  if (
    pic.type.includes("jpeg") ||
    pic.type.includes("jpg") ||
    pic.type.includes("png")
  ) {
    console.log("pasok");

    let profilePhotoPath = null;

    if (pic) {
      try {
        const fileExtension = pic.name.split(".").pop();
        const res = await backendClient.publicImages.upload({
          content: {
            blob: new Blob([pic], { type: pic.type }),
            extension: fileExtension,
          },
        });
        profilePhotoPath = res.url;

        try {
          const updateUser = await db.user.update({
            where: {
              id: sessionUser.user.id,
            },
            data: {
              profile_photo_path: profilePhotoPath,
              name: name,
              age: parseInt(age),
              sex: sex,
              designation: designation,
            },
          });

          console.log(updateUser);
          if (updateUser) {
            return { message: "Successful", user: updateUser };
          }
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    return "Images only supports (jpg,jpeg,png)";
  }
}
