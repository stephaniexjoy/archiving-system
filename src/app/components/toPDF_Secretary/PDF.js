"use client";
import { getUserInfo, getUserInfobyId } from "@/app/lib/actions/actions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PDF = () => {
  const params = useParams();
  console.log(params);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const fetchData = await getUserInfobyId(params.id);
      setUser(fetchData);
      console.log(fetchData);
      setLoading(false);
    };
    fetchUserData();
  }, [status]);

  if (status === "authenticated") {
    return (
      <>
        {loading === false && user && (
          <div className="w-full max-w-screen mx-auto h-auto bg-white border-gray-800 border-collapse">
            <div className="w-full margin-auto">
              <Image
                className="w-full h-[300px] items-center"
                src="/header.jpg"
                alt="Header Image"
                width={2300}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/faculty.png"
                alt="faculty"
                className="absolute right-0 mt-[330px] mr-[6px] opacity-70"
                width={210}
                height={200}
              />
            </div>

            <div className="flex align-center width-100 auto overflow-hidden">
              <div className="shrink-0 mr-[10px]">
                {user.profile_photo_path ? (
                  <Image
                    src={user.profile_photo_path}
                    alt="Image"
                    className="max-width-100 height-400 border border-solid border-black p-1 mt-10 ml-24 object-fit-fill"
                    width={474}
                    height={474}
                  />
                ) : (
                  <Image
                    src="/profile.jpg"
                    alt="Image"
                    className="max-width-100 height-400 border border-solid border-black p-1 mt-10 ml-24 object-fit-fill"
                    width={474}
                    height={474}
                  />
                )}
              </div>
              <div className="relative left-[30px] top-[70px] text-black text-[25px] font-[Calibri]">
                <div className="font-bold text-[50px]">NAME:{user.name}</div>
                <div>Position: {user.position}</div>
                <div>Designation: {user.designation}</div>
                <div>Specialization: {user.specialization}</div>
                <div>Eligibility/Professional License:{user.license} </div>
                <div>Certifications: {user.certifiations}</div>
              </div>
            </div>

            <div className="relative top-[10px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              ACADEMIC QUALIFICATIONS
            </div>

            <table className="w-[86%] ml-[145px] mt-[30px]">
              <tbody>
                <tr>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    Baccalaureate Degree: {user.education.bacDegree}
                  </td>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    School:{user.education.bacSchool}
                  </td>
                </tr>
                <tr>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    Master’s Degree:{user.education.masDegree}
                  </td>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    School:{user.education.masSchool}
                  </td>
                </tr>
                <tr>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    Doctorate Degree:{user.education.docDegree}
                  </td>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    School:{user.education.docSchool}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative top-[40px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              SEMINARS AND TRAININGS ATTENDED
            </div>

            <div className="relative top-[45px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-80">
              {user.education.seminars_trainings}
            </div>

            <div className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              JOB EXPERIENCE
            </div>

            <div className="relative top-[55px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-60">
              {user.education.experience}
            </div>

            <div className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              SUBJECTS HANDLED (DESCRIPTIVE TITLE)
            </div>

            <div className="relative top-[55px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-60">
              {user.education.subjects_handled}
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px]">
              <tbody>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              PAST DESIGNATIONS
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px]">
              <tbody>
                <tr>
                  <td className="text-left mb-[0px] w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/2 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative top-[50px] left-[95px] bottom-[50px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              PRESENTED PAPERS
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px]">
              <tbody>
                <tr>
                  <td className="text-left mb-[0px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative top-[50px] left-[95px] bottom-[50px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              EXTENSION PROJECTS
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px] mb-[100px]">
              <tbody>
                <tr>
                  <td className="text-left mb-[0px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left mb-[0px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                  <td className="text-left mb-[10px] w-1/4 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto"></div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative top-[55px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-10"></div>
          </div>
        )}
      </>
    );
  } else {
    return <>loading...</>;
  }
};

export default PDF;
