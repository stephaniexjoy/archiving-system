import React from "react";

export default function page({ searchParams }) {
  const searchParamsObject = {};

  // Iterate over the entries of searchParams and populate the searchParamsObject
  Object.entries(searchParams).forEach(([key, value]) => {
    searchParamsObject[key] = value;
  });

  console.log(Object.entries(searchParams).length);
  return (
    <>
      {Object.entries(searchParams).length > 0 ? (
        <div>
          <p>Forgot Password page</p>

          <div>{JSON.stringify(searchParamsObject)}</div>
        </div>
      ) : (
        <div>
          <p>Forgot Password page</p>

          <div>Missing Search Paramas</div>
        </div>
      )}
    </>
  );
}
