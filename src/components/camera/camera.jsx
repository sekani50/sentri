import React, { useState } from "react";
import Container from "../container/container";
import three from "../../assets/png/three.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import camera from "../../assets/svg/camera.svg";
import archive from "../../assets/svg/archive.svg";
import edit from "../../assets/svg/edit.svg";
import event from "../../assets/svg/event.svg";
import nosignal from "../../assets/png/nosignal.jpg";
import Alert from "./alert/alert";

import MenusWidget from "./menuwidget/menuWidget";
import CameraWidget from "./camerwidget/cameraWidget";
const Camera = () => {
    const [issignal, setsignal] = useState(true)
    const [isalert, setalert] = useState(true)
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 py-14 sm:py-24">
        <div className="flex space-x-2 items-center">
          <div className="text-gray-500">View type:</div>

          {/**grid grid-cols-1 */}
          <div className="flex items-center flex-col gap-[2px]">
            <div className="w-8 h-[11px] bg-zinc-600 max-[624px]:bg-[#01C38D]"></div>
            <div className="w-8 h-[11px] bg-zinc-600 max-[624px]:bg-[#01C38D]"></div>
          </div>
          {/**grid grid-cols-2 */}
          <div className="flex flex-col items-center gap-[2px]">
            <div className="flex gap-[2px]">
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
            </div>
            <div className="flex gap-[2px]">
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
            </div>
          </div>
          {/**grid grid-cols-3 */}
          <div className="flex flex-col items-center gap-[2px]">
            <div className="flex gap-[2px]">
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
            </div>
            <div className="flex gap-[2px]">
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full items-center">
          <CameraWidget image={three} isalert={isalert} issignal={issignal}/>
          <CameraWidget image={three} isalert={!isalert}  issignal={issignal}/>
          <CameraWidget image={three} isalert={!isalert}  issignal={issignal}/>
          <CameraWidget image={''} isalert={!isalert}  issignal={!issignal}/>
          <CameraWidget image={''} isalert={!isalert}  issignal={!issignal}/>

          {/** */}
        

          {/** */}
        

          {/** */}
          
        </div>
      </div>
    </Container>
  );
};

export default Camera;
