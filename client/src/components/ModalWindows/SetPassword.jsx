import { useState } from "react";
import CloseIcon from "../../svg/CloseIcon";
import SaveButton from "../ComonComponents/SaveButton";
import NotePageStore from "../../store/NotePageStore";
import axios from "axios";
import { useParams } from "react-router-dom";

const SetPassWordCom = () =>{

    //SetPassWordCom modal component, little form that help add password for note


    // UseParams, use id for server request
    const { id } = useParams();

    // React useState
    const [password, setPassword] = useState("")

    // Zustand state
    const CreatePasswordWindow = NotePageStore((state) => state.CreatePasswordWindow)
    const setCreatePasswordWindow = NotePageStore((state) => state.setCreatePasswordWindow)
    const Note = NotePageStore((state) => state.Note)


    //Clear fun
    const ClearAll = () =>{
        setPassword("")
    }

    // PostPassword, post request on server, that add password 
    const PostPassword = async () =>{
        try {
            const response = await axios.post(`http://localhost:3500/api/notes/password/set-password/${id}`, {
            password: password
            });

            console.log('Password set:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error setting a password:', error.response?.data || error.message);
            throw error;
        }
    }


    return(
        <div  className={` ${CreatePasswordWindow ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            <div className="w-1/2 m-0 m-auto">
                {/* Form title */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2 text-black">
                    {Note.password ? "Add new password" : "Add password"}
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>{ ClearAll(); setCreatePasswordWindow(false)}}/>
                </div>

                {/* input */}
                <div className="flex flex-col mb-10 text-black">
                    Set password
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Write a password" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>

                {/* SaveButton */}
                <SaveButton onClick={()=>{PostPassword(); ClearAll(); setCreatePasswordWindow(false)}}/>

            </div>
        </div>
    )
}
export default SetPassWordCom;