
const SaveButton = ({onClick}) =>{

    // Save button component, use in every modal windows, like universal button

    return(
        <div onClick={onClick} className="bg-[#F3F3F3] hover:bg-[#A4A4A4] duration-300 ease-in-out cursor-pointer flex justify-center items-center rounded-[15px] h-[60px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] text-black">Save</div>
    )
}
export default SaveButton