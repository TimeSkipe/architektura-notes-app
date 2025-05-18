import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeStore from "../store/HomePageStore";
import axios from 'axios'
import NotePageStore from "../store/NotePageStore";
import HeaderCom from "../components/NotePageComponents/HeaderCom";

const NotePage = () =>{

    const { id } = useParams();
    const Note = NotePageStore((state) => state.Note)
    const setNote = NotePageStore((state) => state.setNote)

    useEffect(()=>{
        if(id){
            GetNote()
        }
    },[Note])

    const GetNote = async () => {
        try {
            const response = await axios.get(`http://localhost:3500/api/notes/${id}`);
            setNote(response.data);
        } catch (error) {
            console.error("Помилка при отриманні нотатки:", error);
        }
        };

    return(
        <div>
            
            {/* header of NotePage */}
            <HeaderCom/>

            <div className="text-center text-[24px] pt-2">
                {Note.content ? Note.content : "Nothing is written"}
            </div>

            
        </div>
    )
}
export default NotePage;