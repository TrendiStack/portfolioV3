import { useContext } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { ProjectContext } from "../context/projects.context";

const Mockup = ({ image }) => {
   const { modal, handleModal } = useContext(ProjectContext);
  return (
    <>
      <div
        className={`${
          modal
            ? "opacity-1 w-[80vw] lg:w-[40vw] h-[50vh] lg:h-[70vh]  rounded-xl"
            : "opacity-0 w-1 h-1 rounded-full"
        }  bg-white fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center transition-all duration-700 ease-in-out z-[104]`}
      >
        <div
          className={`${
            modal
              ? "opacity-1 w-[76vw] lg:w-[38vw] h-[48vh] lg:h-[67vh] bg-black rounded-xl"
              : "opacity-0 w-1 h-1 bg-white rounded-full"
          }   flex items-center justify-center transition-all duration-700 ease-in-out`}
        >
          <HiArrowLeft className="absolute top-[50%] left-[5%] lg:left-10 transform -translate-y-1/2 text-white text-4xl" />
          <img src={image} alt="" className="w-[60%] mt-5 disable-highlight" />
          <div className="fixed top-5 right-5 w-10 h-10 bg-transparent flex items-center justify-center">
            <AiOutlineFullscreenExit
              onClick={handleModal}
              className="text-white text-2xl hover:text-4xl transition-all duration-300 ease-in-out"
            />
          </div>
          <HiArrowRight className="absolute top-[50%] right-[5%] lg:right-10 transform -translate-y-1/2 text-white text-4xl" />
        </div>
      </div>
      <div
        onClick={handleModal}
        className={`${
          modal ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[103]`}
      ></div>
    </>
  );
};

export default Mockup;
