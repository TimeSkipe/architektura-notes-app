
import LockIcon from "../../svg/LockIcon"
import HomeStore from "../../store/HomePageStore"
import { useNavigate } from "react-router-dom"

const NoteBlock = ({data}) =>{

    // NoteBlock component, 

    // Zustand state 
    const navigate = useNavigate();
    const categories = HomeStore((state) => state.categories || [])
    const setActiveNoteId = HomeStore((state) => state.setActiveNoteId)


    // loading while data load 
    if (!data || !categories){
        (<div>Wait please...</div>)
    }

    // Find category from list of categories, than takes the right one, and puts category`s color in block below
    const Category = categories.find(categ => categ._id === data.category)

    
    // if Note have a password, open a modal window to control a password, else just navigate to right note
    const Lock = () =>{
        if(data.isProtected){
            setActiveNoteId(data)
            }
        else{
            navigate(`/note/${data._id}`)
        }
    }


    return(
        <div onClick={()=>Lock()} style={{borderColor: Category ? Category.color : "#f6f6f6"}} className="border-l-[3px] hover:bg-[#D2D2D2] duration-300 ease-in-out cursor-pointer flex justify-between items-center px-2 h-[60px] w-full bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[10px] mb-2">
            <div>
                <div className="text-[24px] -mb-[4px]">
                    {data.title}
                </div>
                <div className="text-[12px] text-[#9E9E9E]">
                    {Category ? Category.name : "Category not selected"}
                </div>
            </div>

            <LockIcon className={data.isProtected ? "" : "hidden"}/>

        </div>
    )
}
export default NoteBlock