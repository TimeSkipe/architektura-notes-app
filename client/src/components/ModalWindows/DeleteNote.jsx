import axios from "axios"
import NotePageStore from "../../store/NotePageStore"
import { useNavigate, useParams } from "react-router-dom"

const DeleteNote = () =>{

    // DeleteNote modal component, serve as window that ask user, if he/she sure for deleting a note
    
    // UseNavigate, used to navigate a user after delete
    const navigate = useNavigate();

    //UseParams, use id for deleting note
    const { id } = useParams();

    // Zustand state
    const DeleteWindow = NotePageStore((state) => state.DeleteWindow)
    const setDeleteWindow = NotePageStore((state) => state.setDeleteWindow)
    

    // DeleteNote, delete request on server(delete a note)
    const DeleteNote = async () =>{
        try {
            const response = await axios.delete(`http://localhost:3500/api/notes/${id}`);
            console.log('A note was delete:', response.data);
            navigate(-1)
        } catch (error) {
            console.error('Error when deleting a note:', error.response?.data || error.message);
        }
    }


    return(
        <div className={` ${DeleteWindow ? "flex" : "hidden"} text-black items-center justify-center flex-col px-3 text-center top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[200px] absolute rounded-[15px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-white`}>
            Are you sure, you want to delete a note?
            <div className="flex justify-around mt-4 w-full">
                <div onClick={()=>setDeleteWindow(false)} className=" w-[120px] h-[50px] hover:bg-[#D0D0D0] cursor-pointer bg-[#f3f3f3] duration-300 ease-out rounded-[10px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex justify-center items-center ">No</div>
                <div onClick={()=>DeleteNote()} className=" w-[120px] h-[50px] hover:bg-[#BF6464] cursor-pointer text-white bg-[#EE8080] duration-300 ease-out rounded-[10px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex justify-center items-center ">Yes</div>
            </div>
        </div>
    )
}
export default DeleteNote