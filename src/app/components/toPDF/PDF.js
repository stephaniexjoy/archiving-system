"use client";
import { getUserInfo } from "@/app/lib/actions/actions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const PDF = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const fetchData = await getUserInfo();
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
          <div className="w-full max-w-screen mx-auto h-auto bg-white border-gray-800 border-collapse relative">
            <div className="w-full">
              <Image
                className="w-full h-[300px] items-center"
                src="/header.jpg"
                alt="Header Image"
                width={2300}
                height={100}
              />
            </div>
            <div className="w-full">
              <Image
                src="/faculty.png"
                alt="faculty"
                className="absolute right-0 mt-72 opacity-70 z-10"
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
                <div>Specialization: {user.specialization} </div>
                <div>Eligibility/Professional License: {user.license}</div>
                <div>Certifications: {user.certifications} </div>
              </div>
            </div>

            <div className="relative top-[10px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              ACADEMIC QUALIFICATIONS
            </div>

            <table className="w-[86%] ml-[145px] mt-[30px]">
              <tbody>
                <tr>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    Baccalaureate Degree:
                    {user.education.bacDegree}
                  </td>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    School: {user.education.bacSchool}
                  </td>
                </tr>
                <tr>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    Master’s Degree: {user.education.masDegree}
                  </td>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    School: {user.education.masSchool}
                  </td>
                </tr>
                <tr>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    Doctorate Degree: {user.education.docDegree}
                  </td>
                  <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                    School: {user.education.docSchool}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative top-[40px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              SEMINARS AND TRAININGS ATTENDED
            </div>

            <div className="relative top-[45px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-80">
              <tbody>
                {user.education.seminars_trainings
                  .split(",")
                  .map((seminarTrainings, index) => (
                    <tr key={index}>
                      <div className="text-[25px] font-[Century Gothic] text-black h-[2em] mx-auto">
                        {seminarTrainings.trim()}
                      </div>
                    </tr>
                  ))}
              </tbody>
            </div>

            <div className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              JOB EXPERIENCE
            </div>

            <div className="relative top-[55px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-60">
              <tbody>
                {user.education.experience.split(",").map((jobExp, index) => (
                  <tr key={index}>
                    <div className="text-[25px] font-[Century Gothic] text-black h-[2em] mx-auto">
                      {jobExp.trim()}
                    </div>
                  </tr>
                ))}
              </tbody>
            </div>

            <div className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              SUBJECTS HANDLED (DESCRIPTIVE TITLE)
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px]">
              <tbody>
                {user.education.subjects_handled
                  .split(",")
                  .map((subjectHandled, index) => (
                    <tr key={index}>
                      <td className="text-left mb-[0px] w-full p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                          {subjectHandled.trim()}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              PAST DESIGNATIONS
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px]">
              <tbody>
                {user.education.past_designation
                  .split(",")
                  .map((pastDesignation, index) => (
                    <tr key={index}>
                      <td className="text-left mb-[0px] w-full p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                          {pastDesignation.trim()}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="relative top-[50px] left-[95px] bottom-[50px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              PRESENTED PAPERS
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px]">
              <thead>
                <tr>
                  <td className="text-center mb-[0px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                      COMPLETED
                    </div>
                  </td>
                  <td className="text-center mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                      PUBLISHED
                    </div>
                  </td>
                  <td className="text-center mb-[10px] w-1/3 p-0">
                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                      PRESENTED
                    </div>
                  </td>
                </tr>
              </thead>

              <tbody>
                {user.education.presented_papers_completed
                  .split(",")
                  .map((completedPaper, index) => (
                    <tr key={index}>
                      <td className="text-left mb-[0px] w-1/3 p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                          {completedPaper.trim()}
                        </div>
                      </td>
                      <td className="text-left mb-[0px] w-1/3 p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                          {user.education.presented_papers_published.split(",")[
                            index
                          ]
                            ? user.education.presented_papers_published
                                .split(",")
                                [index].trim()
                            : ""}
                        </div>
                      </td>
                      <td className="text-left mb-[0px] w-1/3 p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                          {user.education.presented_papers_presented.split(",")[
                            index
                          ]
                            ? user.education.presented_papers_presented
                                .split(",")
                                [index].trim()
                            : ""}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="relative top-[50px] left-[95px] bottom-[50px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
              EXTENSION PROJECTS
            </div>

            <table className="w-[84%] mt-[5em] ml-[105px] mb-[100px]">
              <tbody>
                {user.education.extension_projs
                  .split(",")
                  .map((extensionProj, index) => (
                    <tr key={index}>
                      <td className="text-left mb-[0px] w-full p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto">
                          {extensionProj.trim()}
                        </div>
                      </td>
                    </tr>
                  ))}
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
