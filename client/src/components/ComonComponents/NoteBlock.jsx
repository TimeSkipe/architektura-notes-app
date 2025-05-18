import { useState } from "react"
import LockIcon from "../../svg/LockIcon"
import HomeStore from "../../store/HomePageStore"
import { Link, useNavigate } from "react-router-dom"
import CheckPassword from "../ModalWindows/CheckPassword"

const NoteBlock = ({data}) =>{
    const navigate = useNavigate();
    const categories = HomeStore((state) => state.categories || [])

    if (!data || !categories){
        (<div>Wait please...</div>)
    }
    const Category = categories.find(categ => categ._id === data.category)
    const setCheckPasswordWindow = HomeStore((state) => state.setCheckPasswordWindow)

    const Lock = () =>{
        if(data.isProtected){
        setCheckPasswordWindow(true)
        }
        else{
            navigate(`/note/${data._id}`)
        }
    }
    

    return(
        <div onClick={()=>Lock()} style={{borderColor: Category ? Category.color : "#f6f6f6"}} className="border-l-[3px] hover:bg-[#D2D2D2] duration-300 ease-in-out cursor-pointer flex justify-between items-center px-2 h-[60px] w-full bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[10px] mb-2">
            <div>
                <div className="text-[24px] -mb-[4px]">
                    {data.title}
                </div>
                <div className="text-[12px] text-[#9E9E9E]">
                    {Category ? Category.name : "Category not selected"}
                </div>
            </div>

            <LockIcon className={data.isProtected ? "" : "hidden"}/>


            <CheckPassword data={data} />
        </div>
    )
}
export default NoteBlock