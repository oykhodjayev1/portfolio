import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../axios";
export default function UpdatePrd() {
  const notify = () => toast("Updated! 👌");
  const { id } = useParams();
  let [title, setTitle] = useState("");
  let [malumot, setMalumot] = useState("");
  useEffect(() => {
    api.get(`/news/${id}`).then(res => {
        setTitle(res.data.title)
        setMalumot(res.data.malumot)
    })
  } , [])
  const xabarniYangilash = (e) => {
    e.preventDefault();
    api.put(`/news/${id}` , {title: title , malumot: malumot})
  };
  return (
    <div>
      <h1>UpdatePrd</h1>
      <form onSubmit={(e) => xabarniYangilash(e)}>
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
          onClick={notify}
          className="w-[100px] h-[40px] rounded-[3px] bg-[#4B4ACF]"
        >
          Update
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
