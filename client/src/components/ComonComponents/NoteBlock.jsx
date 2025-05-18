import { useState } from "react"
import LockIcon from "../../svg/LockIcon"
import HomeStore from "../../store/HomePageStore"

const NoteBlock = ({data}) =>{

    const categories = HomeStore((state) => state.categories || [])

    if (!data || !categories){
        (<div>Wait please...</div>)
    }
    const Category = categories.find(categ => categ._id === data.category)

    return(
        <div style={{borderColor: Category ? Category.color : "#f6f6f6"}} className="border-l-[3px] hover:bg-[#D2D2D2] duration-300 ease-in-out cursor-pointer flex justify-between items-center px-2 h-[60px] w-full bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[10px] mb-2">
            <div>
                <div className="text-[24px] -mb-[4px]">
                    {data.title}
                </div>
                <div className="text-[12px] text-[#9E9E9E]">
                    {Category ? Category.name : "Category not selected"}
                </div>
            </div>

            <LockIcon className={"hidden"}/>
        </div>
    )
}
export default NoteBlock