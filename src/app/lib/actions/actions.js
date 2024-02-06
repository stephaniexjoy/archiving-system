'use server'
import { db } from "../prisma_db";
import { backendClient } from "../edgestore-server";

import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export async function updateUser(formData, sessionUser) {

    console.log(formData, sessionUser)

    const dateString = new Date()
    const dateObject = new Date(dateString)

    const profilePic = formData.get("profilepic")
    const nameUpd = formData.get("updName")
    const roleUpd = formData.get("updRole")
    const designationUpd = formData.get("updDesignation")
    const licenseUpd = formData.get("updLicense")
    const schoolUpd = formData.get("updSchool")
    const specUpd = formData.get("updSpec")
    const certUpd = formData.get("updCert")
    const bacDegUpd = formData.get("updBacDeg")
    const masDegUpd = formData.get("updMasDeg")
    const docDegUpd = formData.get("updDocDeg")
    const bacSchlUpd = formData.get("updBacDegSchl")
    const masSchlUpd = formData.get("updMasDegSchl")
    const docSchlUpd = formData.get("updDocDegSchl")
    const seminarsUpd = formData.get("seminarsUpd")
    const expUpd = formData.get("experUpd")
    const pastDesigUpd = formData.get("desigUpd")
    const subjectsUpd = formData.get("subjectUpd")
    const presPaperUpd = formData.get("papersUpd")
    const extProjUpd = formData.get("extUpd")

    console.log(profilePic)

    let profilePhotoPath = null

    if (profilePic) {
        const fileExtension = profilePic.name.split('.').pop();
        const res = await backendClient.publicImages.upload({
            content: {
                blob: new Blob([profilePic], { type: profilePic.type }),
                extension: fileExtension
            },
        })
        profilePhotoPath = res.url;

    }


    console.log(profilePhotoPath)

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
                education: true
            }
        }),
        db.activity.create({
            data: {
                name: sessionUser.name,
                position: sessionUser.position,
                type: "EDITED PROFILE",
                createdAt: dateObject,
                user: {
                    connect: {
                        id: sessionUser.id
                    }
                }
            }
        })
    ])

    if (updUser) {

        console.log(updUser, updUser_Educ)
        return updUser
    }

}

export async function uploadFile(formData, sessionUser) {
    const material = formData.get("matFile")
    const fileType = formData.get("typeFile")
    const program = formData.get("programFile")
    const privacy = formData.get("privacyFile")
    const fileInput = formData.get("inputFile")

    const dateString = new Date()
    const dateObject = new Date(dateString)


    console.log(material, fileType, program, privacy, fileInput)

    let fileInputPath = null

    const fileExtension = fileInput.name.split('.').pop();

    const res = await backendClient.publicFiles1.upload({
        content: {
            blob: new Blob([fileInput], { type: fileInput.type }),
            extension: fileExtension
        },
    })
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
                        id: sessionUser.id
                    }
                }
            }
        }),
        db.activity.create({
            data: {
                name: sessionUser.name,
                position: sessionUser.position,
                type: "UPLOADED A FILE",
                createdAt: dateObject,
                user: {
                    connect: {
                        id: sessionUser.id
                    }
                }
            }
        })
    ])
    if (uploadFile) {
        return uploadFile
    }
}

export async function addFilter(formData, category) {

    const session = await getServerSession(AuthOptions)

    const dateString = new Date()
    const dateObject = new Date(dateString)


    const addToFilter = formData.get("categoryInput")
    const categoryBody = category

    if (categoryBody === "Material") {

        const existingData = await db.materials.findUnique({
            where: { value: addToFilter }
        });

        if (existingData) {
            return "existingData"
        }

        const [addCategory, addActivity] = await db.$transaction([
            db.materials.create({
                data: {
                    value: addToFilter.toLowerCase(),
                    label: addToFilter
                }
            }),
            db.activity.create({
                data: {
                    name: session.user.name,
                    position: session.user.position,
                    type: "ADDED NEW MATERIAL(FILTER)",
                    createdAt: dateObject,
                    user: {
                        connect: {
                            id: session.user.id
                        }
                    }
                }
            })

        ])
        if (addCategory) {
            return addCategory
        }
    }

    if (categoryBody === "Course") {

        const existingData = await db.courses.findUnique({
            where: { value: addToFilter }
        });

        if (existingData) {
            return existingData
        }

        const [addCategory, addActivity] = await db.$transaction([
            db.courses.create({
                data: {
                    value: addToFilter.toLowerCase(),
                    label: addToFilter
                }
            }),
            db.activity.create({
                data: {
                    name: session.user.name,
                    position: session.user.position,
                    type: "ADDED NEW COURSE(FILTER)",
                    createdAt: dateObject,
                    user: {
                        connect: {
                            id: session.user.id
                        }
                    }
                }
            })

        ])
        if (addCategory) {
            return addCategory
        }
    }




}


export async function getMaterials() {

    const materials = await db.materials.findMany()
    if (materials) {
        console.log(materials)
    } return materials
}

export async function getCourses() {

    const courses = await db.courses.findMany()
    if (courses) {
        console.log(courses)
    } return courses
}

export async function getInstructors() {

    const instructors = await db.user.findMany({
        select: {
            name: true,
            email: true
        }
    })

    if (instructors) {
        console.log(instructors)
    } return instructors
}

export async function getFileTypes() {

    const fileTypes = await db.filetype.findMany()
    if (fileTypes) {
        console.log(fileTypes)
    } return fileTypes
}
