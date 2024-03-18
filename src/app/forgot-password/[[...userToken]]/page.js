import InputPasswordCard from "@/app/components/New_Components/Forgot_Password/Main_ForgotPassword/InputPasswordCard";
import { performForgotPassword } from "@/app/lib/actions/actions";
import React from "react";

export default async function page({ searchParams }) {
  const searchParamsObject = {};

  // Iterate over the entries of searchParams and populate the searchParamsObject
  Object.entries(searchParams).forEach(([key, value]) => {
    searchParamsObject[key] = value;
  });

  console.log(Object.entries(searchParams).length);

  const perform = await performForgotPassword(searchParamsObject);
  console.log(perform);

  return (
    <>
      <div className="flex flex-col w-screen h-screen overflow-y-auto">
        <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
          <img
            className="
          w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
          lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
          />
        </div>

        
    
      {Object.entries(searchParams).length > 0 ? (
        <>
          {perform === true ? (
            <div>
              <div>
                <InputPasswordCard userInfo={searchParamsObject} />
              </div>
            </div>
          ) : (
            <>Token Expired / Token not found</>
          )}
        </>
      ) : (
        <div>
          <p>Forgot Password page</p>

          <div>Missing Search Paramas</div>
        </div>
      )}
      
        </div>
    </>
  );
}
