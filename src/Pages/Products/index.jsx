import { useEffect } from "react";
import { useState } from "react";
import { api } from "./../../axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
export default function Products() {
  const notify = () => toast("Deleated! 😊");
  let [xabar, setXabar] = useState([]);
  useEffect((e)=>{
    api.get("/news").then(res => setXabar(res.data))
  } , [])
  const del = (id)=> {
    api.delete(`/news/${id}`).then(notify)
  }
  return (
    <div>
      <h1>All Products</h1>
      {xabar.map(news => {
        return (
            <div key={news._id} className="bg-[khaki] p-[20px] w-[300px] mb-[20px] flex flex-col gap-[20px]">
                <h1>Title: {news.title}</h1>
                <h3>Malumot: {news.malumot}</h3>
                <button className="w-[100px] h-[40px] rounded-[3px] bg-[#4B4ACF]"  onClick={(e)=> del(news._id)}>Delete</button>
                <Link className="w-[100px] h-[40px] p-[10px] rounded-[3px] bg-[#4B4ACF]" to={`/update/${news._id}`}>Update</Link>
                <ToastContainer />
            </div>
        )
      })}
    </div>
  );
}
