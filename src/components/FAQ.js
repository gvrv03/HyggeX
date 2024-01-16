import React, { useState } from "react";

const FAQ = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  return (
    <div className="py-12">
      <h1 className="text-[48px] font-bold text-[#06286E] ">FAQ</h1>

      <div className="mt-5">
        <div className="flex   flex-col   w-full  justify-between font-semibold md:w-[60%] rounded-md gap-5 text-[16px] items-center ">
          <div className="flex-col  transition-all delay-500 ease-linear w-full flex px-5 p-3  rounded-md border border-[#205ace] gap-2">
            <div className="justify-between flex items-center w-full">
              <p className="text-black">
                Can education flashcards be used for all age groups?
              </p>
              <button
                type="btton"
                onClick={() => {
                  if (first) {
                    setfirst(false);
                  } else {
                    setfirst(true);
                  }
                }}
                className={`uil  ${first? "uil-angle-up":"uil-angle-down"} uil-angle-down text-3xl text-[#06286E]`}
              />
            </div>
            <div
              className={` ${
                first ? "block" : "hidden"
              } text-gray-600 text-justify`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              minus distinctio dicta similique, adipisci provident commodi ipsum
              minus distinctio dicta similique, adipisci provident commodi ipsum
              similique facilis
            </div>
          </div>

          <div className="flex-col  transition-all delay-500 ease-linear w-full flex px-5 p-3  rounded-md border border-[#205ace] gap-2">
            <div className="justify-between flex items-center w-full">
              <p className="text-black">
              How do education flashcards work?
              </p>
              <button
                type="btton"
                onClick={() => {
                  if (second) {
                    setsecond(false);
                  } else {
                    setsecond(true);
                  }
                }}
                className={`uil  ${second? "uil-angle-up":"uil-angle-down"} uil-angle-down text-3xl text-[#06286E]`}
              />
            </div>
            <div
              className={` ${
                second ? "block" : "hidden"
              } text-gray-600 text-justify`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              minus distinctio dicta similique, adipisci provident commodi ipsum
              minus distinctio dicta similique, adipisci provident commodi ipsum
              similique facilis
            </div>
          </div>

          <div className="flex-col  transition-all delay-500 ease-linear w-full flex px-5 p-3  rounded-md border border-[#205ace] gap-2">
            <div className="justify-between flex items-center w-full">
              <p className="text-black">
              Can education flashcards be used for test preparation?
              </p>
              <button
                type="btton"
                onClick={() => {
                  if (third) {
                    setthird(false);
                  } else {
                    setthird(true);
                  }
                }}
                className={`uil  ${third? "uil-angle-up":"uil-angle-down"} uil-angle-down text-3xl text-[#06286E]`}
              />
            </div>
            <div
              className={` ${
                third ? "block" : "hidden"
              } text-gray-600 text-justify`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              minus distinctio dicta similique, adipisci provident commodi ipsum
              minus distinctio dicta similique, adipisci provident commodi ipsum
              similique facilis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
