"use client";
import { updateUser } from "@/app/lib/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

export default function Form({ sessionUser }) {
  const { toast } = useToast();
  return (
    <>
      <form
        action={async (formData) => {
          const isUpdated = await updateUser(formData, sessionUser);
          console.log("Wieee: ", isUpdated);
          if (isUpdated) {
            toast({
              description: "You have successfully updated your profile.",
              type: "success",
              variant: "default",
            });
          }
        }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row gap-4">
            <label htmlFor="profilePictureInput">
              <Image
                className=" 
                cursor-pointer
                rounded-full w-36 h-auto object-cover mb-5
                sm:rounded-full sm:w-44 sm:h-auto sm:object-cover sm:mb-5
                md:rounded-full md:w-44 md:h-auto md:object-cover md:mb-5
                lg:rounded-full lg:w-96 lg:h-auto lg:object-cover lg:mb-5 lg:ml-5
                xl:rounded-full xl:w-96 xl:h-auto xl:object-cover xl:mb-5 xl:ml-5
                2xl:rounded-full 2xl:w-96 2xl:h-auto 2xl:object-cover 2xl:mb-5 2xl:ml-16"
                alt="Profile"
                src="/profile.jpg"
                width={474}
                height={474}
              />
            </label>
            <input
              type="file"
              id="profilePictureInput"
              name="profilepic"
              style={{ display: "none" }}
            />

            <div className="flex flex-col ml-16 gap-4">
              <div className="flex flex-row items-center <div
              
              mt-6
              sm:mt-6
              md:mt-6
              lg:mt-6
              xl:mt-6
              2xl:mt-6"
              >
                <Label
                  htmlFor="name"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  Name:
                </Label>

                <Input
                  name="updName"
                  type="text"
                  className="ml-[24%] bg-[#837979] w-[800px] sm:w-[800px] md:w-[800px] lg:w-[800px]font-semibold text-white text-[20px]"
                />
              </div>
              <div className="flex flex-row items-center gap-4">
                <Label
                  htmlFor="role"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  Role:
                </Label>
                <select
                  name="updRole"
                  className="ml-[25.5%] bg-[#837979] w-[800px] font-semibold text-white text-[25px]"
                >
                  <option value="">Select Role</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Label
                  htmlFor="category"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  Category:
                </Label>
                <select
                  name="updDesignation"
                  className="ml-[20%] bg-[#837979] w-[800px] font-semibold text-white text-[25px]"
                >
                  <option value="">Select category</option>
                  <option value="Associate Dean">Associate Dean</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Unit Head">Unit Head</option>
                  <option value="Coordinator">Coordinator</option>
                </select>
              </div>
              <div className="flex flex-row items-center">
                <Label
                  htmlFor="license"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  Eligibity/Professional License:
                </Label>
                <Input
                  name="updLicense"
                  type="text"
                  className="ml-[0.5%] bg-[#837979] w-[800px] text-white text-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-row items-center">
            <Label
              htmlFor="school"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              School:
            </Label>
            <Input
              name="updSchool"
              type="text"
              className="ml-[19%] bg-[#837979] w-[1100px] text-white text-[20px]"
            />
          </div>
          <div className="mt-4 flex flex-row items-center">
            <Label
              htmlFor="specialization"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              Specialization:
            </Label>
            <Input
              name="updSpec"
              type="text"
              className="ml-[13%] bg-[#837979] w-[1100px] text-white text-[20px]"
            />
          </div>
          <div className="mt-4 flex flex-row items-center">
            <Label
              htmlFor="certifications"
              className="
              font-semibold ml-0 w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              Certifications:
            </Label>
            <Input
              name="updCert"
              type="text"
              className="ml-[13.3%] bg-[#837979] w-[1100px] text-white text-[20px]"
            />
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              Baccalaureate Degree:
            </Label>
            <Input
              name="updBacDeg"
              type="text"
              className="ml-[6.5%] bg-[#837979] w-[470px] text-white text-[20px]"
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              School:
            </Label>
            <Input
              name="updBacDegSchl"
              type="text"
              className="ml-[1%] bg-[#837979] w-[470px] text-white text-[20px]"
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              Master&apos;s Degree:
            </Label>
            <Input
              name="updMasDeg"
              type="text"
              className="ml-[11%] bg-[#837979] w-[470px] text-white text-[20px]"
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              School:
            </Label>
            <Input
              name="updMasDegSchl"
              type="text"
              className="ml-[1%] bg-[#837979] w-[470px] text-white text-[20px]"
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              Doctorate Degree:
            </Label>
            <Input
              name="updDocDeg"
              type="text"
              className="ml-[10%] bg-[#837979] w-[470px] text-white text-[20px]"
            />
            <Label
              htmlFor="school"
              className="ml-[3%] 
              font-semibold w-full text-[15px]
              sm:font-semibold sm:text-[17px]
              md:font-semibold md:text-[19px]
              lg:font-semibold lg:text-[21px] lg:ml-24
              xl:font-semibold xl:text-[23px] xl:ml-24
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
            >
              School:
            </Label>
            <Input
              name="updDocDegSchl"
              type="text"
              className="ml-[1%] bg-[#837979] w-[465px] text-white text-[20px]"
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
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  SEMINARS AND TRAININGS ATTENDED:
                </Label>
                <Input
                  name="seminarsUpd"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
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
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  SUBJECTS HANDLED (DESCRIPTIVE TITLE):
                </Label>
                <Input
                  name="subjectUpd"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
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
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  JOB EXPERIENCE:
                </Label>
                <Input
                  name="experUpd"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
                />
              </div>
              <div className="flex flex-col mt-8 ml-36">
                <Label
                  htmlFor="completed"
                  className="
                  font-italize font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  COMPLETED:
                </Label>
                <Input
                  name="name"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
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
              2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
              text-left"
                >
                  PAST DESIGNATIONS:
                </Label>
                <Input
                  name="desigUpd"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
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
                  name="name"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center mt-8">
                <Label
                  htmlFor="ext"
                  className="
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  EXTENSION PROJECTS:
                </Label>
                <Input
                  name="extUpd"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
                />
              </div>
              <div className="flex flex-col mt-8 ml-36">
                <Label
                  htmlFor="presented"
                  className="font-italize 
                  font-semibold ml-0 w-full text-[15px]
                  sm:font-semibold sm:text-[17px]
                  md:font-semibold md:text-[19px]
                  lg:font-semibold lg:text-[21px] lg:ml-24
                  xl:font-semibold xl:text-[23px] xl:ml-24
                  2xl:font-semibold 2xl:text-[25px] 2xl:ml-36
                  text-left"
                >
                  PRESENTED:
                </Label>
                <Input
                  name="papersUpd"
                  type="text"
                  className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]"
                />
              </div>
            </div>
            <div className="flex justify-center gap-4 gap-x-16 mt-10">
              <Button
                type="submit"
                className="bg-[#5B0505] text-[25px] font-semibold w-72"
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
