import { useState } from "react";
import CloseIcon from "../../svg/CloseIcon";
import SaveButton from "../ComonComponents/SaveButton";
import NotePageStore from "../../store/NotePageStore";
import axios from "axios";
import { useParams } from "react-router-dom";

const SetPassWordCom = () =>{
    const { id } = useParams();

    const [password, setPassword] = useState("")
    const CreatePasswordWindow = NotePageStore((state) => state.CreatePasswordWindow)
    const setCreatePasswordWindow = NotePageStore((state) => state.setCreatePasswordWindow)

    const ClearAll = () =>{
        setPassword("")
    }


    const PostPassword = async () =>{
        try {
            const response = await axios.post(`http://localhost:3500/api/notes/password/set-password/${id}`, {
            password: password
            });

            console.log('Пароль встановлено:', response.data);
            return response.data;
        } catch (error) {
            console.error('Помилка при встановленні пароля:', error.response?.data || error.message);
            throw error;
        }
    }
    return(
        <div  className={` ${CreatePasswordWindow ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            <div className="w-1/2 m-0 m-auto">
                {/* */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2 text-black">
                    Add password
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>{ ClearAll(); setCreatePasswordWindow(false)}}/>
                </div>

                {/* */}
                <div className="flex flex-col mb-10 text-black">
                    Set password
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Write a password" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* */}
                <SaveButton onClick={()=>{PostPassword(); ClearAll(); setCreatePasswordWindow(false)}}/>

            </div>
        </div>
    )
}
export default SetPassWordCom;