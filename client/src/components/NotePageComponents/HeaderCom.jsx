import { useNavigate } from "react-router-dom";
import NotePageStore from "../../store/NotePageStore"
import BackArrowIcon from "../../svg/BackArrowIcon"
import SettingIcon from "../../svg/SettingIcon"
import NoteSetting from "../ModalWindows/NoteSetting";
import DeleteNote from "../ModalWindows/DeleteNote";
import SetPassWordCom from "../ModalWindows/SetPassword"
import SetReminderDataCom from "../ModalWindows/SetReminderData.jsx";
import EditNoteCom from "../ModalWindows/EditNote.jsx";

const HeaderCom = () =>{
    const navigate = useNavigate();

    const Note = NotePageStore((state) => state.Note)
    const setOpenSetting = NotePageStore((state) => state.setOpenSetting)
    const OpenSetting = NotePageStore((state) => state.OpenSetting)
    

    const TurnBack = () =>{
        navigate(-1)
    }
    return(
        <div className="bg-[#1C68DA] relative px-2 h-[70px] flex justify-between items-center text-[20px] text-white">
            
            <BackArrowIcon onClick={()=>TurnBack()} className={"cursor-pointer"}/>
            
            {Note.title}
            
            <SettingIcon onClick={()=>setOpenSetting(!OpenSetting)} className={"cursor-pointer duration-300 ease-in-out "}/>


            {/* Modal window Setting */}
            <NoteSetting/>

            {/* Aprove window for delete */}
            <DeleteNote/>

            {/* setReminderData */}
            <SetReminderDataCom/>

            {/* edit note */}
            <EditNoteCom/>

            {/* setPasswordWindow */}
            <SetPassWordCom/>
        </div>
    )
}
export default HeaderCom