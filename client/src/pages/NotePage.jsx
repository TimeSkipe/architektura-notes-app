import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeStore from "../store/HomePageStore";
import axios from 'axios'
import NotePageStore from "../store/NotePageStore";
import HeaderCom from "../components/NotePageComponents/HeaderCom";

const NotePage = () =>{
    
    // Note Page, its second page in app, that use HeaderCom, and Note.Content for show info about note

    // useParams, use id for search right note in database
    const { id } = useParams();

    // Zustand state
    const Note = NotePageStore((state) => state.Note)
    const setNote = NotePageStore((state) => state.setNote)

    // if id didnt found, note will loading
    useEffect(()=>{
        if(id){
            GetNote()
        }
    },[Note])

    //Get request on server for find a right note 
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