import { useState } from "react";
import NotePageStore from "../../store/NotePageStore";
import CloseIcon from "../../svg/CloseIcon";
import SaveButton from "../ComonComponents/SaveButton";
import HomeStore from "../../store/HomePageStore";
import CategoryIcon from "../../svg/CategoryIcon";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditNoteCom = () =>{
    const { id } = useParams();

    const EditNoteWindow = NotePageStore((state) => state.EditNoteWindow)
    const setEditNoteWindow = NotePageStore((state) => state.setEditNoteWindow)
    const OpenCategoryList = NotePageStore((state)=> state.OpenCategoryList)
    const setOpenCategoryList = NotePageStore((state) => state.setOpenCategoryList)

    const categories = HomeStore((state) => state.categories || [])

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [categori, setCategory] = useState({
        _id:"",
        categoryName:""
    })

    const ClearAll = () =>{
        setTitle("")
        setContent('')
        setCategory({})
      }

    const EditNote = async () => {
            try {
                const response = await axios.put(`http://localhost:3500/api/notes/${id}`, {
                title,
                content,
                category:categori._id
                });

                console.log('Нотатку оновлено:', response.data);
                ClearAll()
                setOpenCategoryList(false)
                setEditNoteWindow(false)
                return response.data;
                
            } catch (error) {
                console.error('Помилка при оновленні нотатки:', error.response?.data || error.message);
                throw error;
            }
          }
    return(
        <div className={` ${EditNoteWindow ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            
            <div className="w-1/2 m-0 m-auto">
                {/* */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2 text-black">
                    Edit a note 
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>{setEditNoteWindow(false); ClearAll(); setOpenCategoryList(false)}}/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3 text-black">
                    Title
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Write a text" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3 text-black">
                    Content
                    <input value={content} onChange={(e)=>setContent(e.target.value)} type="text" placeholder="Write a text" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3 relative text-black">
                    Category
                    <div className={` ${OpenCategoryList ? "rounded-t-[15px]" : "rounded-[15px]"} flex justify-between items-center text-[#9E9E9E] h-[60px] w-full bg-[#F3F3F3] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]`}>
                        {categori.categoryName  ? categori.categoryName : "Select a category"} <CategoryIcon onClick={()=>setOpenCategoryList(!OpenCategoryList)} className="cursor-pointer"/>
                    </div>
                    <div className={`${OpenCategoryList ? "block" : "hidden" } overflow-y-scroll absolute w-full px-2 h-[200px] bg-[#f3f3f3] -bottom-[200px] rounded-b-[15px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)]`}>
                        {categories.map(category => (
                            <div style={{ borderColor: category.color }} onClick={() => setCategory({...categori, _id: category._id, categoryName: category.name})} className={` ${categori === category._id ? "bg-[#D8D8D8]" : " bg-[#f3f3f3]"} h-[50px] w-full rounded-[10px] mb-1 flex hover:bg-[#D8D8D8] ease-in-out duration-300 cursor-pointer items-center pl-3 border-l-[3px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)]`}>
                                {category.name}
                            </div>
                        ))}
                        
                    </div>
                </div>

                {/* */}
                <SaveButton onClick={()=>EditNote()}/>

            </div>
            
        </div>
    )
}
export default EditNoteCom;