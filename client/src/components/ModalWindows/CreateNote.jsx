import { useState } from "react"
import HomeStore from "../../store/HomePageStore"
import CategoryIcon from "../../svg/CategoryIcon"
import CloseIcon from "../../svg/CloseIcon"
import SaveButton from "../ComonComponents/SaveButton"
import axios from 'axios'
const CreateNote = ({className}) =>{

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [reminderDate, setReminderDate] = useState('')

    const CreateNoteWindow = HomeStore((state)=> state.CreateNoteWindow)
    const setCreateNoteWindow = HomeStore((state) => state.setCreateNoteWindow)

    const data = {
        title:title,
        content:content,
        category:category,
        reminderDate:reminderDate
    }
    const SaveRequest = async () => {
        try {
          const response = await axios.post('http://localhost:3500/api/notes', {
            title,
            content,
            category,
            reminderDate,
          },{withCredentials:true})
          console.log('Note was created', response.data)
          setCreateNoteWindow(false)
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
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>setCreateNoteWindow(false)}/>
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
                <div className="flex flex-col mb-3">
                    Category
                    <div className="flex justify-between items-center text-[#9E9E9E] h-[60px] w-full bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
                        Select a category <CategoryIcon/>
                    </div>
                </div>

                {/* */}
                <div className="flex flex-col mb-10">
                    Reminder
                    <input value={reminderDate} onChange={(e)=>setReminderDate(e.target.value)} type="date" name="" id="" className=" flex justify-between items-center text-[#9E9E9E] h-[60px] w-full bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]" />
                </div>

                {/* */}
                <SaveButton onClick={SaveRequest}/>

            </div>
            
        </div>
    )
}
export default CreateNote