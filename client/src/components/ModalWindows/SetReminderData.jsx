import { useState } from "react";
import SaveButton from "../ComonComponents/SaveButton";
import CloseIcon from "../../svg/CloseIcon";
import NotePageStore from "../../store/NotePageStore";
import axios from "axios";
import { useParams } from "react-router-dom";




const SetReminderDataCom = () =>{
    const { id } = useParams();
    const [reminderData, setReminderdata] = useState('')
    const ReminderData = NotePageStore((state) => state.ReminderData)
    const setReminderData = NotePageStore((state) => state.setReminderData)

    const ClearAll = () =>{
        setReminderdata('')
    }

    const PostReminderData = async () =>{
        try {
            const response = await axios.post(`http://localhost:3500/api/notes/reminder/set-reminder/${id}`, {
            reminderDate: reminderData
            });

            console.log('Нагадування встановлено:', response.data);
            return response.data;
        } catch (error) {
            console.error('Помилка при встановленні дати нагадування:', error.response?.data || error.message);
            throw error;
        }
    }

    
    return(
        <div  className={` ${ReminderData ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            <div className="w-1/2 m-0 m-auto">
                {/* */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2 text-black">
                    Add reminder
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>{ ClearAll(); setReminderData(false)}}/>
                </div>

                {/* */}
                <div className="flex flex-col mb-10 text-black">
                    Set a date
                    <input value={reminderData} onChange={(e)=>setReminderdata(e.target.value)} type="date" placeholder="Write a password" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* */}
                <SaveButton onClick={()=>{PostReminderData(); ClearAll(); setReminderData(false)}}/>

            </div>
        </div>
    )
}
export default SetReminderDataCom;