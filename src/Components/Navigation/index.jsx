import { Link } from "react-router-dom";

export default function Navigation(){
    return <div className="bg-red-400 flex flex-col gap-[30px] items-center p-[20px] md:flex-row justify-evenly">
        <Link to={"/"}>Figma</Link>
        <Link to={"/add"}>Create</Link>
        <Link to={"/news"}>News & Del News</Link>
    </div>
}