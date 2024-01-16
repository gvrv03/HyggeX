import React from "react";

const MainPage = () => {
  return (
    <div className="py-10">
      <h3 
      
      className="text-[32px] font-semibold  text-[#06286E] ">
        Relations and Functions ( Mathematics )
      </h3>

      <div className="py-14 ">
        <div className="flex flex-col gap-10  justify-center items-center">
          <div className="flex text-[20px] gap-[40px]  font-semibold text-[#3A3740]">
            <div className=" text-[#06286E] pb-2 border-[#06286E]  font-bold border-b-2" >Study</div>
            <div>Quiz</div>
            <div>Test</div>
            <div>Game</div>
            <div>Others</div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)",
            }}
            className="w-[712px] flex text-white font-semibold text-[38.26px]   h-[393.19px] rounded-3xl justify-center items-center "
          >
            9 + 6 + 7x - 2x - 3
          </div>

          <div className="flex  justify-around w-[712px] ">
            <button>
              <img src="/refresh.svg" />
            </button>{" "}
            <div className="flex gap-10 items-center ">  
              <button className="uil text-4xl text-white bg-gradient-to-t from-[#06286E] to-[#164EC0]  h-[60px] w-[60px] rounded-full  uil-angle-left-b" />
              <div className="text-[24px] font-semibold ">01/10</div>
              <button className="uil text-4xl text-white bg-gradient-to-t from-[#06286E] to-[#164EC0]  h-[60px] w-[60px] rounded-full  uil-angle-right-b" />
            </div>
            <button>
              <img src="/MinMax.svg" />
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
