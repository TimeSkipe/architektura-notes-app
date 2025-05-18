import axios from "axios"
import NotePageStore from "../../store/NotePageStore"
import { useNavigate, useParams } from "react-router-dom"

const DeleteNote = () =>{
    const navigate = useNavigate();
    const { id } = useParams();


    const DeleteWindow = NotePageStore((state) => state.DeleteWindow)

    const setDeleteWindow = NotePageStore((state) => state.setDeleteWindow)
    
    const DeleteNote = async () =>{
        try {
            const response = await axios.delete(`http://localhost:3500/api/notes/${id}`);
            console.log('Нотатку видалено:', response.data);
            navigate(-1)
        } catch (error) {
            console.error('Помилка при видаленні нотатки:', error.response?.data || error.message);
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