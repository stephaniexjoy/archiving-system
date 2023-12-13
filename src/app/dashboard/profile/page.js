"use client"


export default function profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <div>
        <div className="absolute top-[125px] left-[1px] bg-[#AD5606] [backdrop-filter:blur(4px)] w-[1800px] h-[1800px]" />
        <img
          className="absolute top-[10px] left-[45%] w-[400px] h-[100px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />
        <div className="absolute top-[550px] left-[25%] text-white  text-[31px] font-bold font-['Inter']">
          Name:
        </div>
        <div className="absolute top-[600px] left-[25%] text-white  text-[31px] font-bold font-['Inter']">
          Age:
        </div>
        <div className="absolute top-[650px] left-[25%] text-white inline-block text-[31px] font-bold font-['Inter']">
          Sex:
        </div>
        <div className="absolute top-[700px] left-[25%] text-white inline-block text-[31px] font-bold font-['Inter']">
          Employee No.:
        </div>
        <div className="absolute top-[750px] left-[25%] text-white inline-block text-[31px] font-bold font-['Inter']">
          Designation:
        </div>
        <div className="absolute top-[800px] left-[25%] text-white inline-block text-[31px] font-bold font-['Inter']">
          Position:
        </div>
        <div className="absolute top-[850px] left-[25%] text-white inline-block text-[31px] font-bold font-['Inter']">
          Plantilla Position:
        </div>
        <div className="absolute top-[900px] left-[25%] text-white inline-block text-[31px] font-bold font-['Inter']">
          Institutional Email:
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="absolute top-[1000px] left-[50%] bg-[#D9D9D9] text-[20px] text-black text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            // onClick={handleSubmit}
          >
            EDIT PROFILE
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="absolute top-[1050px] left-[50%] bg-[#D9D9D9] text-[20px] text-black text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            //onClick={handleSubmit}
          >
            EDIT PRIVACY
          </button>
        </div>
      </div>
    </main>
  ); 
   
}
