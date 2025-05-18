import { useState } from "react"
import HomeStore from "../../store/HomePageStore"
import CategoryIcon from "../../svg/CategoryIcon"
import CloseIcon from "../../svg/CloseIcon"
import SaveButton from "../ComonComponents/SaveButton"
import axios from 'axios'
const CreateNote = ({className}) =>{

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [categori, setCategory] = useState({
        _id:"",
        categoryName:""
    })
    const [reminderDate, setReminderDate] = useState('')

    const CreateNoteWindow = HomeStore((state)=> state.CreateNoteWindow)
    const setCreateNoteWindow = HomeStore((state) => state.setCreateNoteWindow)

    const OpenCategoryList = HomeStore((state)=> state.OpenCategoryList)
    const setOpenCategoryList = HomeStore((state) => state.setOpenCategoryList)

    const categories = HomeStore((state) => state.categories || [])

    const ClearAll = () =>{
        setTitle("")
        setContent('')
        setCategory({})
        setReminderDate("")
      }

    const CreateNoteFun = async () => {
        try {
          const response = await axios.post('http://localhost:3500/api/notes', {
            title,
            content,
            category: categori._id,
            reminderDate,
          },{withCredentials:true})
          //console.log('Note was created', response.data)
          setCreateNoteWindow(false)
          ClearAll()
          setOpenCategoryList(false)
        } catch (error) {
          console.error('ERROR', error)
        }
      }

      
    

    return(
        <div className={` ${CreateNoteWindow ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            
            <div className="w-1/2 m-0 m-auto">
                {/* */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2">
                    Create a new note 
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>{setCreateNoteWindow(false); ClearAll(); setOpenCategoryList(false)}}/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3">
                    Title
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Write a text" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3">
                    Content
                    <input value={content} onChange={(e)=>setContent(e.target.value)} type="text" placeholder="Write a text" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3 relative">
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
                <div className="flex flex-col mb-10">
                    Reminder
                    <input value={reminderDate} onChange={(e)=>setReminderDate(e.target.value)} type="date" name="" id="" className=" flex justify-between items-center text-[#9E9E9E] h-[60px] w-full bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]" />
                </div>

                {/* */}
                <SaveButton onClick={CreateNoteFun}/>

            </div>
            
        </div>
    )
}
export default CreateNote