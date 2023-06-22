import React,{useState} from "react";
import SideNav from "./sideNav";
import TopNav from "./topNav";

const Container = () => {
    const [isNav, setisNav] = useState(false)
    return (
        <div className="w-full h-full pb-[50px]  bg-gray-100 text-zinc-700">
            <SideNav isNav={isNav} setisNav={setisNav}/>
            <TopNav/>
        </div>
    )
}

export default Container