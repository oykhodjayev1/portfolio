import { useState } from "react";
import { api } from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Createprd() {
  const notify = () => toast("Created! 👌");
  let [title, setTitle] = useState("");
  let [malumot, setMalumot] = useState("");
  const yandiXabar = (e) => {
    e.preventDefault();
    api.post("/news", { title: title, malumot: malumot }).then(notify);
  };
  return (
    <div className="mb-[30px">
      <h1>Create</h1>
      <form className="flex flex-col gap-[20px] items-center mg:flex-row" onSubmit={(e)=> yandiXabar(e)}>
      <input
        className="w-[200px] h-[40px] rounded-[20px] p-[10px] bg-[khaki] mr-[10px]"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-[200px] h-[40px] rounded-[20px] p-[10px] bg-[khaki] mr-[10px]"
        type="text"
        placeholder="Malumot"
        value={malumot}
        onChange={(e) => setMalumot(e.target.value)}
      />
      <button
        className="w-[100px] h-[40px] rounded-[3px] bg-[#4B4ACF]"
      >
        Send
      </button>
      <ToastContainer />
      </form>
    </div>
  );
}
