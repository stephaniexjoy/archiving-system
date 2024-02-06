import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"

import Form from "./Form"


async function EditProfileFaculty_Dialog({ sessionUser }) {

    /*  const updateUser = async (formData) => {
         "use server"
         const { toast } = useToast();
 
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
         }
 
     } */

    return (
        <Dialog>

            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>EDIT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1600px] h-[800px]">
                <ScrollArea className="h-[700px] w-[1500px] rounded-md border p-4">
                    <Form sessionUser={sessionUser}/>
                </ScrollArea>
            </DialogContent>
        </Dialog >

    )
}

export default EditProfileFaculty_Dialog