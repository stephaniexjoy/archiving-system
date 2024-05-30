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
          <div className="w-full max-w-screen mx-auto h-auto bg-white border-gray-800 border-collapse relative">
            <div className="w-full margin-auto">
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
                className="absolute w-44 h-auto right-0 mt-96 opacity-80 z-10"
                width={210}
                height={200}
              />
            </div>
            <div className="flex justify-center items-center w-full overflow-hidden">
              <div className="w-1/2 flex -ml-8 justify-center items-center shrink-0 mr-[0px]">
                {user.profile_photo_path ? (
                  <Image
                    src={user.profile_photo_path}
                    alt="Image"
                    className="w-96 h-96 border border-solid border-black p-0 mt-0 ml-0 object-fit-fill"
                    width={460}
                    height={460}
                  />
                ) : (
                  <Image
                    src="/profile.jpg"
                    alt="Image"
                    className="w-96 h-96 border border-solid border-black p-1 mt-0 ml-0 object-fit-fill"
                    width={460}
                    height={460}
                  />
                )}
              </div>
              <div className="w-1/2 relative -mt-8 -ml-8 text-start text-black text-[24px] font-[Calibri]">
                <div className="font-bold text-[48px]">NAME:{user.name}</div>
                <div>Position: {user.position}</div>
                <div>Designation: {user.designation}</div>
                <div>Specialization: {user.specialization} </div>
                <div>
                  Eligibility/
                  <br />
                  Professional License: {user.license}
                </div>
                <div>Certifications: {user.certifications} </div>
              </div>
            </div>
            <div className="flex justify-center h-auto">
              <div className=" mt-8 mb-8 text-[32px] bg-[#B83633] font-[Century Gothic] text-white text-center h-auto w-[86%] font-bold">
                ACADEMIC QUALIFICATIONS
              </div>
            </div>
            <div className="flex justify-center w-[80%] mx-auto">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                      Baccalaureate Degree:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {user.education.bacDegree}
                    </td>
                    <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                      School:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {user.education.bacSchool}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                      Master’s Degree:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {user.education.masDegree}
                    </td>
                    <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                      School:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {user.education.masSchool}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                      Doctorate Degree:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {user.education.docDegree}
                    </td>
                    <td className="text-left text-[25px] font-[Century Gothic] text-black w-1/2">
                      School:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {user.education.docSchool}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <div className="relative mt-8 mb-8 text-[28px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[44px] w-[86%] font-bold">
                SEMINARS AND TRAININGS ATTENDED
              </div>
            </div>
            <div className="w-[80%] mx-auto">
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
            <div className="flex justify-center">
              <div className="relative mt-8 mb-8 text-[28px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center items h-[44px] w-[86%] font-bold">
                JOB EXPERIENCE
              </div>
            </div>
            <div className="w-[80%] mx-auto">
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
            <div className="flex justify-center">
              <div className="relative mt-8 mb-8 text-[28px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center items-center center h-[44px] w-[86%] font-bold">
                SUBJECTS HANDLED (DESCRIPTIVE TITLE)
              </div>
            </div>
            <table className="w-[86%] mx-auto ">
              <tbody>
                {user.education.subjects_handled
                  .split(",")
                  .map((subjectHandled, index) => (
                    <tr key={index}>
                      <td className="text-left w-full ">
                        <div className="text-[24px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto px-12">
                          {subjectHandled.trim()}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-center">
              <div className="relative mt-8 mb-8 text-[28px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[44px] w-[86%] font-bold">
                PAST DESIGNATIONS
              </div>
            </div>
            <table className="w-[86%] mx-auto">
              <tbody>
                {user.education.past_designation
                  .split(",")
                  .map((pastDesignation, index) => (
                    <tr key={index}>
                      <td className="text-left mb-[0px] w-full p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto px-12">
                          {pastDesignation.trim()}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-center">
              <div className="relative mt-8 mb-8 text-[28px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[44px] w-[86%] font-bold">
                PRESENTED PAPERS
              </div>
            </div>
            <table className="w-[86%] mx-auto">
              <thead>
                <tr>
                  <td className="text-center w-1/3 mx-auto">
                    <div className="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto">
                      COMPLETED
                    </div>
                  </td>
                  <td className="text-center mb-[10px] w-1/3">
                    <div className="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto">
                      PUBLISHED
                    </div>
                  </td>
                  <td className="text-center mb-[10px] w-1/3">
                    <div className="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto">
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
                      <td className="text-left mb-[0px] w-1/3">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto px-6">
                          {completedPaper.trim()}
                        </div>
                      </td>
                      <td className="text-left mb-[0px] w-1/3 p-0">
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto px-6">
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
                        <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto px-6">
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
            <div className="flex justify-center">
              <div className="relative mt-8 mb-8 text-[28px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[44px] w-[86%] font-bold">
                EXTENSION PROJECTS
              </div>
            </div>
            <div className="pb-24">
              <table className="w-[86%] mx-auto">
                <tbody>
                  {user.education.extension_projs
                    .split(",")
                    .map((extensionProj, index) => (
                      <tr key={index}>
                        <td className="text-left mb-8 w-full">
                          <div className="text-[24px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto px-12">
                            {extensionProj.trim()}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>{" "}
          </div>
        )}
      </>
    );
  } else {
    return <>loading...</>;
  }
};

export default PDF;
