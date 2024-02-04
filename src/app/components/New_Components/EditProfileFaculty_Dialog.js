import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/app/lib/prisma_db"

async function EditProfileFaculty_Dialog({ sessionId }) {

    const updateUser = async (formData) => {
        "use server"

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

        /*    const [updUser, updUser_Educ] = await db.$transaction([
               db.user.update({
                   where: { id: sessionId },
                   data: {
                       name: nameUpd,
                       position: roleUpd,
                       designation: designationUpd,
                       specialization: specUpd,
                       license: licenseUpd,
                       certifications: certUpd,
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
           ])
   
           if (updUser) {
               console.log(updUser)
           } */
    }



    return (

        <Dialog>

            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>EDIT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1600px] h-[800px]">
                <ScrollArea className="h-[700px] w-[1500px] rounded-md border p-4">
                    <form action={updateUser}>

                        <div className="flex flex-col">
                            <div className="flex flex-row gap-4">
                                <label htmlFor="profilePictureInput">
                                    <img
                                        className="rounded-[50%] w-[240px] h-auto object-cover cursor-pointer"
                                        alt="Profile"
                                        src="/profile.jpg"
                                    />
                                </label>
                                <input
                                    type="file"
                                    id="profilePictureInput"
                                    name="profilepic"
                                    style={{ display: 'none' }}
                                />
                                <div className="flex flex-col ml-16 gap-4">
                                    <div className="flex flex-row items-center gap-4">
                                        <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                            Name:
                                        </Label>
                                        <Input name="updName" type="text" className="ml-[24%] bg-[#837979] w-[800px] font-semibold text-white text-[20px]" />
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <Label htmlFor="role" className="font-semibold text-[25px] text-left">
                                            Role:
                                        </Label>
                                        <select name="updRole" className="ml-[25.5%] bg-[#837979] w-[800px] font-semibold text-white text-[25px]">
                                            <option value="">Select Role</option>
                                            <option value="Faculty">Faculty</option>
                                            <option value="Secretary">Secretary</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <Label htmlFor="category" className="font-semibold text-[25px] text-left">
                                            Category:
                                        </Label>
                                        <select name="updDesignation" className="ml-[20%] bg-[#837979] w-[800px] font-semibold text-white text-[25px]">
                                            <option value="">Select category</option>
                                            <option value="Associate Dean">Associate Dean</option>
                                            <option value="Secretary">Secretary</option>
                                            <option value="Faculty">Faculty</option>
                                            <option value="Unit Head">Unit Head</option>
                                            <option value="Coordinator">Coordinator</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <Label htmlFor="license" className="font-semibold text-[25px] text-left">
                                            Eligibity/Professional License:
                                        </Label>
                                        <Input name="updLicense" type="text" className="ml-[0.5%] bg-[#837979] w-[800px] text-white text-[20px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-row items-center">
                                <Label htmlFor="school" className="font-semibold text-[25px] text-left">
                                    School:
                                </Label>
                                <Input name="updSchool" type="text" className="ml-[19%] bg-[#837979] w-[1100px] text-white text-[20px]" />
                            </div>
                            <div className="mt-4 flex flex-row items-center">
                                <Label htmlFor="specialization" className="font-semibold text-[25px] text-left">
                                    Specialization:
                                </Label>
                                <Input name="updSpec" type="text" className="ml-[13%] bg-[#837979] w-[1100px] text-white text-[20px]" />
                            </div>
                            <div className="mt-4 flex flex-row items-center">
                                <Label htmlFor="certifications" className="font-semibold text-[25px] text-left">
                                    Certifications:
                                </Label>
                                <Input name="updCert" type="text" className="ml-[13.3%] bg-[#837979] w-[1100px] text-white text-[20px]" />
                            </div>
                            <div className="mt-4 flex justify-center items-center">
                                <Label htmlFor="academicQualifications" className="font-semibold text-[30px] text-center">
                                    ACADEMIC QUALIFICATIONS:
                                </Label>
                            </div>
                            <div className="mt-4 flex flex-row items-center">
                                <Label htmlFor="baccalaureateDegree" className="font-semibold text-[25px] text-left">
                                    Baccalaureate  Degree:
                                </Label>
                                <Input name="updBacDeg" type="text" className="ml-[6.5%] bg-[#837979] w-[470px] text-white text-[20px]" />
                                <Label htmlFor="school" className="ml-[3%] font-semibold text-[25px] text-left">
                                    School:
                                </Label>
                                <Input name="updBacDegSchl" type="text" className="ml-[1%] bg-[#837979] w-[470px] text-white text-[20px]" />
                            </div>
                            <div className="mt-4 flex flex-row items-center">
                                <Label htmlFor="mastersDegree" className="font-semibold text-[25px] text-left">
                                    Master&apos;s Degree:
                                </Label>
                                <Input name="updMasDeg" type="text" className="ml-[11%] bg-[#837979] w-[470px] text-white text-[20px]" />
                                <Label htmlFor="school" className="ml-[3%] font-semibold text-[25px] text-left">
                                    School:
                                </Label>
                                <Input name="updMasDegSchl" type="text" className="ml-[1%] bg-[#837979] w-[470px] text-white text-[20px]" />
                            </div>
                            <div className="mt-4 flex flex-row items-center">
                                <Label htmlFor="doctorateDegree" className="font-semibold text-[25px] text-left">
                                    Doctorate  Degree:
                                </Label>
                                <Input name="updDocDeg" type="text" className="ml-[10%] bg-[#837979] w-[470px] text-white text-[20px]" />
                                <Label htmlFor="school" className="ml-[3%] font-semibold text-[25px] text-left">
                                    School:
                                </Label>
                                <Input name="updDocDegSchl" type="text" className="ml-[1%] bg-[#837979] w-[465px] text-white text-[20px]" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 gap-x-16 mt-5">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-col items-center ">
                                        <Label htmlFor="seminars" className="font-semibold text-[25px] text-left">
                                            SEMINARS AND TRAININGS ATTENDED:
                                        </Label>
                                        <Input name="seminarsUpd" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                    <div className="flex flex-col items-center ml-36">
                                        <Label htmlFor="subjects" className="font-semibold text-[25px] text-left">
                                            SUBJECTS HANDLED (DESCRIPTIVE TITLE):
                                        </Label>
                                        <Input name="subjectUpd" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-col items-center mt-8">
                                        <Label htmlFor="exp" className="font-semibold text-[25px] text-left">
                                            JOB EXPERIENCE:
                                        </Label>
                                        <Input name="experUpd" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                    <div className="flex flex-col mt-8 ml-36">
                                        <Label htmlFor="completed" className="font-italize text-[25px] text-left">
                                            COMPLETED:
                                        </Label>
                                        <Input name="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-col items-center mt-8">
                                        <Label htmlFor="designations" className="font-semibold text-[25px] text-left">
                                            PAST DESIGNATIONS:
                                        </Label>
                                        <Input name="desigUpd" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                    <div className="flex flex-col mt-8 ml-36">
                                        <Label htmlFor="pub" className="font-italize text-[25px] text-left">
                                            PUBLISHED:
                                        </Label>
                                        <Input name="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-col items-center mt-8">
                                        <Label htmlFor="ext" className="font-semibold text-[25px] text-left">
                                            EXTENSION PROJECTS:
                                        </Label>
                                        <Input name="extUpd" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                    <div className="flex flex-col mt-8 ml-36">
                                        <Label htmlFor="presented" className="font-italize text-[25px] text-left">
                                            PRESENTED:
                                        </Label>
                                        <Input name="papersUpd" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-4 gap-x-16 mt-10">
                                    <Button type="submit" className="bg-[#5B0505] text-[25px] font-semibold w-72">SAVE</Button>
                                </div>
                            </div>

                        </div>
                    </form>
                </ScrollArea>
            </DialogContent>
        </Dialog >

    )
}

export default EditProfileFaculty_Dialog