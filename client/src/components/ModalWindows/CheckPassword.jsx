import { useEffect, useState } from "react"
import HomeStore from "../../store/HomePageStore"
import CloseIcon from "../../svg/CloseIcon"
import { useNavigate } from "react-router-dom";

const CheckPassword = () =>{

    //CheckPassword is modal component, which control a password

    // navigation to right place
    const navigate = useNavigate();

    // Zustand state
    const activeNoteId = HomeStore((state) => state.activeNoteId)
    const setActiveNoteId = HomeStore((state) => state.setActiveNoteId)

    // React useState
    const [password, setPassword] = useState("")
    

    // Close modal fun, clear every inputs, and set ActiveNote(false)
    const CloseModal = () =>{
            setPassword('')
            setActiveNoteId(null)
        }

    
    // Lock function, serve a control the entered password
    const Lock = () =>{
        if(activeNoteId.password === password){
            navigate(`/note/${activeNoteId._id}`)
            CloseModal()
        }
        else{
            alert("Incorrect password")
        }
        
    }


    return(
        <div className={`${activeNoteId ? "flex" : "hidden"} flex-col px-3 justify-center items-center absolute z-50 h-[300px] w-[400px] rounded-[15px] bg-[#fff] top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]`}>
            <div className="text-[24px] text-center relative">
                Please write a password below to open a note
                <CloseIcon onClick={()=>CloseModal()} className="absolute right-0 -top-4 cursor-pointer"/>
            </div>
            <div>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className="w-[320px] h-[50px] rounded-[15px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none px-4 mt-10 mb-7" type="password" name="" id="" placeholder="Please write a password" />
            </div>
            <div onClick={()=>Lock()} className="bg-[#f3f3f3] rounded-[15px] duration-300 ease-in-out cursor-pointer hover:bg-[#D1D1D1] h-[50px] w-[320px] flex justify-center items-center shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
                Open note
            </div>
        </div>
    )
}
export default CheckPassword