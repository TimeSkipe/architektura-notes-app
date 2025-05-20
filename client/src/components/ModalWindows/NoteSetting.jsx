import NotePageStore from "../../store/NotePageStore"

const NoteSetting = () =>{

    //NoteSetting its modal component, that show 4 buttons, Edit, add Password, add reminder and Delete button


    // Zustand state
    const OpenSetting = NotePageStore((state) => state.OpenSetting)
    const setOpenSetting = NotePageStore((state) => state.setOpenSetting)
    const setDeleteWindow = NotePageStore((state) => state.setDeleteWindow)
    const setCreatePasswordWindow = NotePageStore((state) => state.setCreatePasswordWindow)
    const setReminderData = NotePageStore((state) => state.setReminderData)
    const setEditNoteWindow = NotePageStore((state) => state.setEditNoteWindow)
    const Note = NotePageStore((state) => state.Note)
    
    
    return(
        <div className={` ${OpenSetting ? "flex" : "hidden"}  absolute flex-col -bottom-[190px] right-1 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[15px] p-2`}>
            <div onClick={()=>{setEditNoteWindow(true);setOpenSetting(false)}} className="h-[43px] px-3 py-[2px] bg-[#F3F3F3] hover:bg-[#CFCFCF] cursor-pointer duration-300 ease-in-out shadow-[2px_2px_4px_rgba(0,0,0,0.25)] text-black rounded-[10px] mb-1 flex items-center">Edit</div>
            <div onClick={()=>{setReminderData(true);setOpenSetting(false)}} className="h-[43px] px-3 py-[2px] bg-[#F3F3F3] hover:bg-[#CFCFCF] cursor-pointer duration-300 ease-in-out shadow-[2px_2px_4px_rgba(0,0,0,0.25)] text-black rounded-[10px] mb-1 flex items-center">{Note.reminderDate ? "Change reminder date" : "Add reminder date"}</div>
            <div onClick={()=>{setCreatePasswordWindow(true); setOpenSetting(false)}} className="h-[43px] px-3 py-[2px] bg-[#F3F3F3] hover:bg-[#CFCFCF] cursor-pointer duration-300 ease-in-out shadow-[2px_2px_4px_rgba(0,0,0,0.25)] text-black rounded-[10px] mb-1 flex items-center">{Note.password ? "Change password" : "Add password"}</div>
            <div onClick={()=>{setDeleteWindow(true); setOpenSetting(false)}} className="h-[43px] px-3 py-[2px] bg-red-300 hover:bg-red-400 cursor-pointer duration-300 ease-in-out shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[10px] flex items-center">Delete Note</div>
        </div>
    )
}
export default NoteSetting