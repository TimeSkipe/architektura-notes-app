import LockIcon from "../../svg/LockIcon"

const NoteBlock = ({data}) =>{
    return(
        <div className="border-l-[3px] border-red-400 hover:bg-[#D2D2D2] duration-300 ease-in-out cursor-pointer flex justify-between items-center px-2 h-[60px] w-full bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[10px] mb-2">
            <div>
                <div className="text-[24px] -mb-[4px]">
                    {data.title}
                </div>
                <div className="text-[12px] text-[#9E9E9E]">
                    {data.category ? "" : "category not found"}
                </div>
            </div>

            <LockIcon className={"hidden"}/>
        </div>
    )
}
export default NoteBlock