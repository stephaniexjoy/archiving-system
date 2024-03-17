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
      {Object.entries(searchParams).length > 0 ? (
        <>
          {perform === true ? (
            <div>
              <div>
                <InputPasswordCard userInfo={searchParamsObject}/>
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
    </>
  );
}
