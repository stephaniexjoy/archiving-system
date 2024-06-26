"use client";
import { updateUser } from "@/app/lib/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { userAgent } from "next/server";

async function updateSession(isUpdated) {}

export default function Form({ user }) {
  const { toast } = useToast();
  const { data: session, status, update } = useSession();

  return (
    <>
      <form
        action={async (formData) => {
          const isUpdated = await updateUser(formData);
          console.log("Wieee: ", isUpdated);
          if (isUpdated) {
            console.log("Wieee: ", isUpdated);

            if (session) {
              await update({
                ...session,
                user: {
                  ...session.user,
                  picture: isUpdated.profile_photo_path,
                },
              });
            }

            toast({
              description: "You have successfully updated your profile.",
              type: "success",
              variant: "default",
            });

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        }}
      >
        <div className="flex flex-col bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First column for the image */}
            <div>
              <label htmlFor="profilePictureInput">
                {user.profile_photo_path ? (
                  <>
                    <Image
                      className="cursor-pointer rounded-full w-full md:w-44 lg:w-96 xl:w-96 2xl:w-60 2xl:ml-16"
                      alt="Profile"
                      src={user.profile_photo_path}
                      width={474}
                      height={474}
                    />
                    <input
                      type="file"
                      id="profilePictureInput"
                      name="profilepic"
                      style={{ display: "none" }}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      className="cursor-pointer rounded-full w-full md:w-44 lg:w-96 xl:w-96 2xl:w-60 2xl:ml-16"
                      alt="Profile"
                      src="/profile.jpg"
                      width={474}
                      height={474}
                    />
                    <input
                      type="file"
                      id="profilePictureInput"
                      name="profilepic"
                      style={{ display: "none" }}
                    />
                  </>
                )}
              </label>
            </div>
            {/* Second column for the form fields */}
            <div className="flex flex-col gap-4 md:col-span-2">
              <div className="flex items-center mt-6">
                <Label
                  htmlFor="name"
                  className="font-semibold w-[85%] text-[25px]"
                >
                  Name:
                </Label>
                <Input
                  name="updName"
                  type="text"
                  className="bg-slate-300 w-[90%] font-semibold text-[25px]"
                  defaultValue={user ? user.name : ""}
                />
              </div>
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="role"
                  className="font-semibold w-[85%] text-[25px]"
                  hidden={true}
                >
                  Role:
                </Label>
                <input
                  type="hidden"
                  name="updRole"
                  defaultValue={user ? user.position : ""}
                />
              </div>
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="category"
                  className="font-semibold w-[85%] text-[25px]"
                  hidden={true}
                >
                  Category:
                </Label>
                <input
                  type="hidden"
                  name="updDesignation"
                  defaultValue={user ? user.position : ""}
                />
              </div>
              <div className="flex items-center">
                <Label
                  htmlFor="license"
                  className="font-semibold w-[90%] text-[25px]"
                >
                  Eligibility/Professional License:
                </Label>
                <Input
                  name="updLicense"
                  type="text"
                  className="bg-slate-300 w-full text-[25px]"
                  defaultValue={user ? user.license : ""}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="mt-4 flex flex-row items-center">
              <Label
                htmlFor="school"
                className="
              font-semibold ml-0 text-[15px] lg:text-[21px] lg:ml-24
              xl:text-[23px] xl:ml-24 2xl:text-[25px] 2xl:ml-20
              text-left"
              >
                School:
              </Label>
              <Input
                name="updSchool"
                type="text"
                className="ml-[19%] bg-slate-300 w-[1100px] text-[25px]"
                defaultValue={user ? user.education.school : ""}
              />
            </div>
            <div className="mt-4 flex flex-row items-center">
              <Label
                htmlFor="specialization"
                className="
              font-semibold ml-0 text-[15px] lg:text-[21px] lg:ml-24
              xl:text-[23px] xl:ml-24 2xl:text-[25px] 2xl:ml-20
              text-left"
              >
                Specialization:
              </Label>
              <Input
                name="updSpec"
                type="text"
                className="ml-[13%] bg-slate-300 w-[1100px] text-[25px]"
                defaultValue={user ? user.specialization : ""}
              />
            </div>
            <div className="mt-4 flex flex-row items-center">
              <Label
                htmlFor="certifications"
                className="
              font-semibold ml-0 text-[15px] lg:text-[21px] lg:ml-24
              xl:text-[23px] xl:ml-24 2xl:text-[25px] 2xl:ml-20
              text-left"
              >
                Certifications:
              </Label>
              <Input
                name="updCert"
                type="text"
                className="ml-[13.3%] bg-slate-300 w-[1100px] text-[20px]"
                defaultValue={user ? user.certifications : ""}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <Label
              htmlFor="academicQualifications"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-0
              text-left"
            >
              ACADEMIC QUALIFICATIONS:
            </Label>
          </div>
          <div className="mt-4 flex flex-row items-center">
            <Label
              htmlFor="baccalaureateDegree"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-20
              text-left"
            >
              Baccalaureate Degree:
            </Label>
            <Input
              name="updBacDeg"
              type="text"
              className="ml-[10%] bg-slate-300 w-[470px] text-[25px]"
              defaultValue={user ? user.education.bacDegree : ""}
            />
            <Label
              htmlFor="school"
              className="
              ml-[3%] 
              font-semibold w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-20
              text-left"
            >
              School:
            </Label>
            <Input
              name="updBacDegSchl"
              type="text"
              className="ml-[1%] bg-slate-300 w-[470px] text-[25px]"
              defaultValue={user ? user.education.bacSchool : ""}
            />
          </div>
          <div className="mt-4 flex flex-row items-center">
            <Label
              htmlFor="mastersDegree"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-20
              text-left"
            >
              Master&apos;s Degree:
            </Label>
            <Input
              name="updMasDeg"
              type="text"
              className="ml-[11%] bg-slate-300 w-[470px] text-[25px]"
              defaultValue={user ? user.education.masDegree : ""}
            />
            <Label
              htmlFor="school"
              className="
              ml-[3%] 
              font-semibold w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-20
              text-left"
            >
              School:
            </Label>
            <Input
              name="updMasDegSchl"
              type="text"
              className="ml-[1%] bg-slate-300 w-[470px] text-[25px]"
              defaultValue={user ? user.education.masSchool : ""}
            />
          </div>
          <div className="mt-4 flex flex-row items-center">
            <Label
              htmlFor="doctorateDegree"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-20
              text-left"
            >
              Doctorate Degree:
            </Label>
            <Input
              name="updDocDeg"
              type="text"
              className="ml-[10%] bg-slate-300 w-[470px] text-[25px]"
              defaultValue={user ? user.education.docDegree : ""}
            />
            <Label
              htmlFor="school"
              className="ml-[3%] 
              font-semibold w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-20
              text-left"
            >
              School:
            </Label>
            <Input
              name="updDocDegSchl"
              type="text"
              className="ml-[1%] bg-slate-300 w-[465px] text-[25px]"
              defaultValue={user ? user.education.docSchool : ""}
            />
          </div>
        </div>
        <div className="flex justify-center gap-4 gap-x-16 mt-5">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center ">
                <Label
                  htmlFor="seminars"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-0
                  text-left"
                >
                  SEMINARS AND TRAININGS ATTENDED:
                </Label>
                <Input
                  name="seminarsUpd"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={user ? user.education.seminars_trainings : ""}
                />
              </div>
              <div className="flex flex-col items-center ml-36">
                <Label
                  htmlFor="subjects"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-0
                  text-left"
                >
                  SUBJECTS HANDLED (DESCRIPTIVE TITLE):
                </Label>
                <Input
                  name="subjectUpd"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={user ? user.education.subjects_handled : ""}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center mt-8">
                <Label
                  htmlFor="exp"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-0
                  text-left"
                >
                  JOB EXPERIENCE:
                </Label>
                <Input
                  name="experUpd"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={user ? user.education.experience : ""}
                />
              </div>
              <div className="flex flex-col mt-8 ml-36">
                <Label
                  htmlFor="completed"
                  className="
                  font-italize ml-0 w-full text-[15px] text-left
                  sm:text-[17px]
                  md:text-[19px]
                  lg:text-[21px] lg:ml-24
                  xl:text-[23px] xl:ml-24
                  2xl:text-[25px] 2xl:ml-0
                  "
                >
                  COMPLETED:
                </Label>
                <Input
                  name="ppc"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={
                    user ? user.education.presented_papers_completed : ""
                  }
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center mt-8">
                <Label
                  htmlFor="designations"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-0
                  text-left"
                >
                  PAST DESIGNATIONS:
                </Label>
                <Input
                  name="desigUpd"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={user ? user.education.past_designation : ""}
                />
              </div>
              <div className="flex flex-col mt-8 ml-36">
                <Label
                  htmlFor="pub"
                  className="font-italize text-[25px] text-left"
                >
                  PUBLISHED:
                </Label>
                <Input
                  name="ppp"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={
                    user ? user.education.presented_papers_published : ""
                  }
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center mt-8 text-center">
                <Label
                  htmlFor="ext"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-0
                  text-left"
                >
                  EXTENSION PROJECTS:
                </Label>
                <Input
                  name="extUpd"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={user ? user.education.extension_projs : ""}
                />
              </div>
              <div className="flex flex-col mt-8 ml-36">
                <Label
                  htmlFor="presented"
                  className="
                  ml-0 w-full text-[15px] font-italize text-left
                  sm:text-[17px]
                  md:text-[19px]
                  lg:text-[21px]
                  xl:text-[23px]
                  2xl:text-[25px]
                  "
                >
                  PRESENTED:
                </Label>
                <Input
                  name="pppresent"
                  type="text"
                  className="bg-slate-300 w-[650px] h-[90px] font-semibold text-[20px]"
                  defaultValue={
                    user ? user.education.presented_papers_presented : ""
                  }
                />
              </div>
            </div>
            <div className="flex justify-center gap-4 gap-x-16 mt-20 mb-10">
              <Button
                type="submit"
                className="bg-[#AD5606] text-[25px] font-semibold w-72"
              >
                SAVE
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
