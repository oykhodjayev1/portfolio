import { Link } from "react-router-dom";
import Btn from "../Button";

export default function Navbar(){
    return <div>
        <div className="bg-[#17202A] flex h-[80px] items-center px-[20px] justify-between">
            <img src="./public/Logo.png"/>
            <div className="flex items-center gap-[30px]">
                <Link className="text-[#5D5DFF]">Sign in</Link>
                <Btn uz="96px" bg="#5D5DFF" hg="40px">Sign Up</Btn>
            </div>
        </div>
    </div>
}