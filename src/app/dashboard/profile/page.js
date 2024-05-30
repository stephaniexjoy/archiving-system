import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import PrintButton from "@/app/components/New_Components/Buttons/PrintButton";
import EditProfileFaculty_Dialog from "@/app/components/New_Components/EditProfileFaculty_Dialog/EditProfileFaculty_Dialog";
import { db } from "@/app/lib/prisma_db";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import EditProfile_Dialog from "@/app/components/New_Components/EditProfile_Secretary/EditProfile_Dialog";
import EditPrivacy_Dialog from "@/app/components/New_Components/Edit_Privacy_Dialog/EditPrivacy_Dialog";

function FacultyProfile({ sessionPhoto, user }) {
  return (
    <div className="flex flex-col w-screen h-screen items-center overflow-y-auto bg-slate-50">
      <div
        className="
    w-full overflow-auto overflow-x-auto h-auto p-4 max-w-md
    sm:max-w-xl sm:overflow-x-auto sm:w-full sm:h-auto sm:p-4
    md:overflow-x-auto md:w-full md:h-auto md:p-4
    lg:max-w-[90%]
    xl:max-w-[90%] 
    2xl:max-w-[90%] 2xl:my-6
    "
      >
        <div
          className="
      flex flex-col justify-center text-start items-center
      sm:flex sm:flex-col sm:justify-center sm:text-start sm:items-center
      md:flex md:flex-col md:justify-center md:text-start
      lg:flex lg:flex-row lg:justify-center lg:text-start
      xl:flex xl:flex-row xl:justify-center xl:text-start
      2xl:flex 2xl:flex-row 2xl:justify-center 2xl:text-start
      "
        >
          {sessionPhoto ? (
            <Image
              className="
          mt-16 rounded-full w-[60%] h-auto object-cover mb-0
          sm:mt-16 sm:rounded-full sm:w-[50%] sm:h-auto sm:object-cover sm:mb-0
          md:mt-16 md:rounded-full md:w-[50%] md:h-auto md:object-cover md:mb-0
          lg:mt-16 lg:rounded-full lg:w-[50%] lg:h-auto lg:object-cover lg:mb-0
          xl:mt-16 xl:rounded-full xl:w-[50%] xl:h-auto xl:object-cover xl:mb-0
          2xl:mt-16 2xl:rounded-full 2xl:w-[35%] 2xl:h-auto 2xl:object-cover 2xl:mb-5
          "
              alt="profile"
              src={`${sessionPhoto}`}
              width={474}
              height={474}
            />
          ) : (
            <Image
              className="
          mt-16 rounded-full w-[60%] h-auto object-cover mb-0
          sm:mt-16 sm:rounded-full sm:w-[50%] sm:h-auto sm:object-cover sm:mb-0
          md:mt-16 md:rounded-full md:w-[50%] md:h-auto md:object-cover md:mb-0
          lg:mt-16 lg:rounded-full lg:w-[50%] lg:h-auto lg:object-cover lg:mb-0
          xl:mt-16 xl:rounded-full xl:w-[50%] xl:h-auto xl:object-cover xl:mb-0
          2xl:mt-16 2xl:rounded-full 2xl:w-[35%] 2xl:h-auto 2xl:object-cover 2xl:mb-5
          "
              alt="profile"
              src="/profile.jpg"
              width={250}
              height={250}
            />
          )}

          <div
            className="
        font-semibold ml-0 w-full text-[15px]
        sm:font-semibold sm:text-[17px]
        md:font-semibold md:text-[19px]
        lg:font-semibold lg:text-[21px] lg:ml-24
        xl:font-semibold xl:text-[23px] xl:ml-24
        2xl:font-semibold 2xl:text-[24px] 2xl:ml-36
        "
          >
            <div
              className="
          mt-6
          sm:mt-6
          md:mt-6
          lg:mt-6
          xl:mt-6
          2xl:mt-6 
          "
            >
              <b>Name:</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;{user.name}
            </div>
            <div>
              <b>Position:</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;{user.position}
            </div>
            <div>
              <b>
                Eligibility/
                <br />
                Professional License:
              </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.license}
            </div>
            <div>
              <b>School:</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;{user.education.school}
            </div>
          </div>

          <div
            className="
        ml-0 font-semibold w-full mb-4 text-[15px]
        sm:ml-0 sm:font-semibold sm:w-full sm:mb-4 sm:text-[17px]
        md:ml-0 md:font-semibold md:w-full md:mb-4 md:text-[19px]
        lg:font-semibold lg:w-full lg:mb-4 lg:text-[21px] lg:ml-28
        xl:font-semibold xl:w-full xl:mb-4 xl:text-[23px] xl:ml-28  
        2xl:font-semibold 2xl:text-[25px] 2xl:ml-28  
        "
          >
            <div
              className="
          mt-0
          sm:mt-0
          md:mt-0
          lg:mt-10
          xl:mt-10
          2xl:mt-10
          "
            >
              <b>Designation:</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {user.designation}
            </div>
            <div>
              <b>Specialization:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {user.specialization}
            </div>
            <div>
              <b>Certifications:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {user.certifications}
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8 top-[288px] font-semibold text-[24px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[40px]">
          ACADEMIC QUALIFICATIONS
        </div>
        <div
          className="
      flex flex-col 
      sm:flex sm:flex-col
      md:flex md:flex-col
      lg:flex lg:flex-col
      xl:flex xl:flex-col
      2xl:flex 2xl:flex-col
      "
        >
          <div
            className="
        grid grid-cols-1 gap-1 justify-center text-[15px] mt-8 mb-8
        sm:grid sm:grid-cols-1 sm:gap-1 sm:text-[17px] sm:mt-4 sm:justify-center
        md:grid md:grid-cols-1 md:gap-1 md:justify-center
        lg:grid lg:grid-cols-2 lg:gap-2 lg:justify-center lg:ml-16
        xl:grid xl:grid-cols-2 xl:gap-6 xl:justify-center
        2xl:grid 2xl:grid-cols-2 2xl:gap-6 2xl:justify-center
        "
          >
            {[
              {
                degree: "Baccalaureate Degree",
                school: user.education.bacSchool,
                degreeInfo: user.education.bacDegree,
              },
              {
                degree: "Master's Degree",
                school: user.education.masSchool,
                degreeInfo: user.education.masDegree,
              },
              {
                degree: "Doctorate Degree",
                school: user.education.docSchool,
                degreeInfo: user.education.docDegree,
              },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="
              flex flex-col
              sm:flex sm:flex-col
              md:flex md:flex-col
              lg:flex lg:flex-col
              xl:flex xl:flex-col
              2xl:flex 2xl:flex-col
              "
                >
                  <div
                    className="
                text-[15px] text-black mb-2 font-bold
                sm:text-[17px] sm:text-black sm:mb-2
                md:text-[19px] md:text-black md:mb-2
                lg:text-[21px] lg:text-black lg:mb-2
                xl:text-[23px] xl:text-black xl:mb-2
                 2xl:text-[24px] 2xl:text-black 2xl:mb-2
                "
                  >
                    <b>{item.degree}</b>
                  </div>
                  <div className="ml-12 text-[20px] text-black">
                    {item.degreeInfo}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="
                font-semibold text-[15px] text-black mb-2
                sm:font-semibold sm:text-[17px] sm:text-black sm:mb-2
                md:font-semibold md:text-[19px] md:text-black md:mb-2
                lg:font-semibold lg:text-[21px] lg:text-black lg:mb-2
                xl:font-semibold xl:text-[23px] xl:text-black xl:mb-2
                2xl:font-semibold 2xl:text-[25px] 2xl:text-black 2xl:mb-2
                "
                  >
                    <b>School:</b>
                  </div>
                  <div className="ml-12 text-[20px] text-black">
                    {item.school}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div
            className="
        flex flex-col w-full
        sm:flex sm:w-full
        md:flex md:flex-col md:w-full
        lg:flex lg:w-full
        xl:flex xl:w-full
        2xl:flex 2xl:flex-row 2xl:w-full
        "
          >
            <div className=" w-1/2 ">
              <h1 className="mt-8 mb-8 top-[285px] font-semibold text-[24px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[40px]">
                SEMINARS AND TRAININGS ATTENDED
              </h1>
              <tbody>
                {user.education.seminars_trainings ? (
                  user.education.seminars_trainings
                    .split(",")
                    .map((seminarTraining, index) => (
                      <tr key={index}>
                        <td>
                          <div className="ml-12 text-[20px] font-[Century Gothic] text-black h-[2em] mx-auto">
                            {seminarTraining.trim()}
                          </div>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </div>
            <div className="top-[450px] font-semibold text-[24px] bg-transparent [backdrop-filter:blur(4px)] text-white text-center w-[20px] h-[40px]"></div>
            <div className=" w-1/2 ">
              <h1 className="mt-8 mb-8 top-[285px] font-semibold text-[24px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[40px]">
                JOB EXPERIENCE
              </h1>
              <tbody>
                {user.education.experience ? (
                  user.education.experience.split(",").map((jobExp, index) => (
                    <tr key={index}>
                      <td>
                        <div className="ml-12 text-[20px] font-[Century Gothic] text-black h-[2em] mx-auto">
                          {jobExp.trim()}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-8 mb-8 top-[285px] font-semibold text-[24px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[40px]">
            SUBJECTS HANDLED (DESCRIPTIVE TITLE)
          </h1>
          <tbody>
            {user.education.subjects_handled ? (
              user.education.subjects_handled
                .split(",")
                .map((subjectHandled, index) => (
                  <tr key={index}>
                    <td>
                      <div className="ml-12 text-[20px] font-[Century Gothic] text-black h-[2em] mx-auto">
                        {subjectHandled.trim()}
                      </div>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td></td>
              </tr>
            )}
          </tbody>
        </div>
        <div>
          <h1 className="mt-8 mb-8 top-[285px] font-semibold text-[24px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[40px]">
            PAST DESIGNATIONS
          </h1>
        </div>
        <tbody>
          {user.education.past_designation ? (
            user.education.past_designation
              .split(",")
              .map((pastDesignation, index) => (
                <tr key={index}>
                  <td>
                    <div className="ml-12 text-[20px] font-[Century Gothic] h-[2em] mx-auto">
                      {pastDesignation.trim()}
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>

        <div>
          <h1 className="mt-8 mb-8 top-[285px] font-semibold text-[24px] bg-[#8F8F8F] backdrop-blur-[4px] text-white text-center w-full h-[40px]">
            PRESENTED PAPERS
          </h1>
          <div>
            <table
              className="
          w-full border-none border-collapse hidden
          xl:table xl:w-full
          2xl:table 2xl:w-full
          "
            >
              <thead>
                <tr>
                  <th className="border border-black bg-[#D7D4D4] backdrop-blur-[4px] font-semibold text-[24px] text-white text-center w-1/3 h-[40px]">
                    COMPLETED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] backdrop-blur-[4px] font-semibold text-[24px] text-white text-center w-1/3 h-[40px]">
                    PUBLISHED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] backdrop-blur-[4px] font-semibold text-[24px] text-white text-center w-1/3 h-[40px]">
                    PRESENTED
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.education.presented_papers_completed ? (
                  user.education.presented_papers_completed
                    .split(",")
                    .map((completedPaper, index) => (
                      <tr key={index}>
                        <td className="text-[20px] border border-black bg-[#8F8F8F] backdrop-blur-[4px] text-white text-center h-[50px]">
                          {completedPaper.trim()}
                        </td>
                        <td className="text-[20px] border border-black bg-[#8F8F8F] backdrop-blur-[4px] text-white text-center h-[50px]">
                          {user.education.presented_papers_published &&
                          user.education.presented_papers_published.split(",")[
                            index
                          ]
                            ? user.education.presented_papers_published
                                .split(",")
                                [index].trim()
                            : ""}
                        </td>
                        <td className="text-[20px] border border-black bg-[#8F8F8F] backdrop-blur-[4px] text-white text-center h-[50px]">
                          {user.education.presented_papers_presented &&
                          user.education.presented_papers_presented.split(",")[
                            index
                          ]
                            ? user.education.presented_papers_presented
                                .split(",")
                                [index].trim()
                            : ""}
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="3"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h1
            className="
        mt-4 top-[285px] font-semibold text-[15px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-start w-full h-[30px]
        sm:mt-4 sm:top-[285px] sm:font-semibold sm:text-[17px] sm:bg-[#8F8F8F] sm:[backdrop-filter:blur(4px)] sm:text-white sm:text-start sm:w-full sm:h-[30px]
        md:mt-4 md:top-[285px] md:font-semibold md:text-[19px] md:bg-[#8F8F8F] md:[backdrop-filter:blur(4px)] md:text-white md:text-start md:w-full md:h-[30px]
        lg:mt-4 lg:top-[285px] lg:font-semibold lg:text-[21px] lg:bg-[#8F8F8F] lg:[backdrop-filter:blur(4px)] lg:text-white lg:text-start lg:w-full lg:h-[30px]
        xl:mt-4 xl:top-[285px] xl:font-semibold xl:text-[23px] xl:bg-[#8F8F8F] xl:[backdrop-filter:blur(4px)] xl:text-white xl:text-start xl:w-full xl:h-[30px] xl:hidden
        2xl:mt-4 2xl:top-[285px] 2xl:font-semibold 2xl:text-[25px] 2xl:bg-[#8F8F8F] 2xl:[backdrop-filter:blur(4px)] 2xl:text-white 2xl:text-start 2xl:w-full 2xl:h-[30px] 2xl:hidden
        "
          >
            COMPLETED:
          </h1>
          <h1
            className="
        mt-28 top-[285px] font-semibold text-[15px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-start w-full h-[30px]
        sm:mt-28 sm:top-[285px] sm:font-semibold sm:text-[17px] sm:bg-[#8F8F8F] sm:[backdrop-filter:blur(4px)] sm:text-white sm:text-start sm:w-full sm:h-[30px]
        md:mt-28 md:top-[285px] md:font-semibold md:text-[19px] md:bg-[#8F8F8F] md:[backdrop-filter:blur(4px)] md:text-white md:text-start md:w-full md:h-[30px]
        lg:mt-28 lg:top-[285px] lg:font-semibold lg:text-[21px] lg:bg-[#8F8F8F] lg:[backdrop-filter:blur(4px)] lg:text-white lg:text-start lg:w-full lg:h-[30px]
        xl:mt-28 xl:top-[285px] xl:font-semibold xl:text-[23px] xl:bg-[#8F8F8F] xl:[backdrop-filter:blur(4px)] xl:text-white xl:text-start xl:w-full xl:h-[30px] xl:hidden
        2xl:mt-28 2xl:top-[285px] 2xl:font-semibold 2xl:text-[25px] 2xl:bg-[#8F8F8F] 2xl:[backdrop-filter:blur(4px)] 2xl:text-white 2xl:text-start 2xl:w-full 2xl:h-[30px] 2xl:hidden
        "
          >
            PUBLISHED:
          </h1>
          <h1
            className="
        mt-28 top-[285px] font-semibold text-[15px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-start w-full h-[30px]
        sm:mt-28 sm:top-[285px] sm:font-semibold sm:text-[17px] sm:bg-[#8F8F8F] sm:[backdrop-filter:blur(4px)] sm:text-white sm:text-start sm:w-full sm:h-[30px]
        md:mt-28 md:top-[285px] md:font-semibold md:text-[19px] md:bg-[#8F8F8F] md:[backdrop-filter:blur(4px)] md:text-white md:text-start md:w-full md:h-[30px]
        lg:mt-28 lg:top-[285px] lg:font-semibold lg:text-[21px] lg:bg-[#8F8F8F] lg:[backdrop-filter:blur(4px)] lg:text-white lg:text-start lg:w-full lg:h-[30px]
        xl:mt-28 xl:top-[285px] xl:font-semibold xl:text-[23px] xl:bg-[#8F8F8F] xl:[backdrop-filter:blur(4px)] xl:text-white xl:text-start xl:w-full xl:h-[30px] xl:hidden
        2xl:mt-28 2xl:top-[285px] 2xl:font-semibold 2xl:text-[25px] 2xl:bg-[#8F8F8F] 2xl:[backdrop-filter:blur(4px)] 2xl:text-white 2xl:text-start 2xl:w-full 2xl:h-[30px] 2xl:hidden
        "
          >
            PRESENTED:
          </h1>
        </div>
        <div>
          <h1
            className="
        mt-8 mb-8 top-[285px] bottom-[285px] font-semibold text-[24px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[40px]
        2xl:mt-8 2xl:mb-8 2xl:top-[285px] 2xl:bottom-[285px] 2xl:font-semibold 2xl:text-[24px] 2xl:bg-[#8F8F8F] 2xl:[backdrop-filter:blur(4px)] 2xl:text-white 2xl:text-center 2xl:w-full 2xl:h-[40px]
        "
          >
            EXTENSIONS PROJECTS
          </h1>

          <tbody>
            {user.education.extension_projs ? (
              user.education.extension_projs
                .split(",")
                .map((extensionProj, index) => (
                  <tr key={index}>
                    <td>
                      <div className="ml-12 text-[20px] font-[Century Gothic] h-[2em] mx-auto">
                        {extensionProj.trim()}
                      </div>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td></td>
              </tr>
            )}
          </tbody>
        </div>
        <div>
          <div
            className="
        flex w-full h-auto items-center justify-evenly
        sm:flex sm:w-full sm:h-auto sm:items-center sm:justify-evenly
        md:flex md:w-full md:h-auto md:items-center md:justify-evenly
        lg:flex lg:w-full lg:h-auto lg:items-center lg:justify-evenly
        xl:flex xl:w-full xl:h-auto xl:items-center xl:justify-evenly
        2xl:flex 2xl:w-full 2xl:h-auto 2xl:items-center 2xl:justify-evenly
        "
          >
            <div className="flex items-center">
              <EditProfileFaculty_Dialog user={user} />
            </div>
            <div className="flex items-center"></div>
            <div className="flex items-center">
              <PrintButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function SecretaryProfile({ session, sessionPhoto, user }) {
  return (
    <div className="flex flex-col w-screen h-screen items-center overflow-y-auto bg-slate-50">
      <Card
        className="
    flex w-[90%] h-auto mt-4 items-center justify-center bg-slate-50
    sm:flex sm:w-[80%] sm:h-auto sm:mt-4 sm:items-center sm:justify-center
    md:flex md:w-[80%] md:h-auto md:mt-4 md:items-center md:justify-center
    lg:flex lg:w-[70%] lg:h-auto lg:mt-4 lg:items-center lg:justify-center
    xl:flex xl:w-[70%] xl:h-auto xl:mt-4 xl:items-center xl:justify-center
    2xl:flex 2xl:w-[60%] 2xl:mt-4 2xl:items-center 2xl:justify-center
    "
      >
        <CardContent
          className="
      w-auto h-auto
      sm:w-auto sm:h-auto
      md:w-auto md:h-auto
      lg:w-auto lg:h-auto
      xl:w-auto xl:h-auto
      2xl:w-auto 2xl:h-auto
      "
        >
          <div
            className="
        flex flex-col w-auto items-center py-1
        sm:flex sm:flex-col sm:w-auto sm:items-center sm:py-1
        md:flex md:flex-col md:w-auto md:items-center md:py-1
        lg:flex lg:flex-col lg:w-auto lg:items-center lg:py-1
        xl:flex xl:flex-col xl:w-auto xl:items-center xl:py-1
        2xl:flex 2xl:flex-col 2xl:w-auto 2xl:items-center 2xl:py-1
        "
          >
            {sessionPhoto ? (
              <Image
                className="
          mt-16 rounded-full w-[60%] h-auto object-cover mb-0
          sm:mt-16 sm:rounded-full sm:w-[50%] sm:h-auto sm:object-cover sm:mb-0
          md:mt-16 md:rounded-full md:w-[50%] md:h-auto md:object-cover md:mb-0
          lg:mt-16 lg:rounded-full lg:w-[50%] lg:h-auto lg:object-cover lg:mb-0
          xl:mt-16 xl:rounded-full xl:w-[50%] xl:h-auto xl:object-cover xl:mb-0
          2xl:mt-16 2xl:rounded-full 2xl:w-[35%] 2xl:h-auto 2xl:object-cover 2xl:mb-5
          "
                alt="profile"
                src={`${sessionPhoto}`}
                width={474}
                height={474}
              />
            ) : (
              <Image
                className="
          mt-16 rounded-full w-[60%] h-auto object-cover mb-0
          sm:mt-16 sm:rounded-full sm:w-[50%] sm:h-auto sm:object-cover sm:mb-0
          md:mt-16 md:rounded-full md:w-[50%] md:h-auto md:object-cover md:mb-0
          lg:mt-16 lg:rounded-full lg:w-[50%] lg:h-auto lg:object-cover lg:mb-0
          xl:mt-16 xl:rounded-full xl:w-[50%] xl:h-auto xl:object-cover xl:mb-0
          2xl:mt-16 2xl:rounded-full 2xl:w-[35%] 2xl:h-auto 2xl:object-cover 2xl:mb-5
          "
                alt="profile"
                src="/profile.jpg"
                width={474}
                height={474}
              />
            )}
          </div>

          <div
            className="
        grid grid-cols-2 gap-4 mt-16
        sm:grid-cols-2 sm:gap-4 sm:mt-16
        md:grid-cols-2 md:gap-4 md:mt-16
        lg:grid-cols-2 lg:gap-4 lg:mt-16
        xl:grid-cols-2 xl:gap-4 xl:mt-16
        2xl:grid-cols-2 2xl:gap-4 2xl:mt-16 2xl:text-start
        "
          >
            {[
              { label: "Name", value: user.name },
              { label: "Age", value: user.age },
              { label: "Sex", value: user.sex },
              { label: "Employee No", value: user.employee_no },
              { label: "Department", value: "College of Computer Studies" },
              { label: "Designation", value: user.designation },
              { label: "Institutional Email", value: user.email },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="
              text-[15px] text-[#5B0505]
              sm:text-[17px] sm:text-[#5B0505]
              md:text-[19px] md:text-[#5B0505]
              lg:text-[21px] lg:text-[#5B0505]
              xl:text-[23px] xl:text-[#5B0505]
              2xl:text-[25px] 2xl:text-[#5B0505]
              "
                >
                  {item.label}:
                </div>
                <div
                  className="
              text-[15px] text-[#5B0505] font-bold
              sm:text-[17px] sm:text-[#5B0505]
              md:text-[19px] md:text-[#5B0505]
              lg:text-[21px] lg:text-[#5B0505]
              xl:text-[23px] xl:text-[#5B0505]
              2xl:text-[25px] 2xl:text-[#5B0505]
              "
                >
                  {item.value}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#AD5606] rounded-lg mt-16">
              <EditProfile_Dialog user={user} />
            </div>
            <div className="bg-[#AD5606] rounded-lg mt-5">
              <EditPrivacy_Dialog sessionUser={session.user} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default async function profile() {
  const session = await getServerSession(AuthOptions);
  const sessionPhoto = session.user.image;

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      education: true,
    },
  });
  console.log(user);

  if (session.user.position === "Secretary") {
    return (
      <SecretaryProfile
        session={session}
        sessionPhoto={sessionPhoto}
        user={user}
      />
    );
  }

  return <FacultyProfile sessionPhoto={sessionPhoto} user={user} />;
}
