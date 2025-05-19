import AddIcon from "../../svg/AddIcon"

const CreateButton = ({className, onClick}) => {

    // Button for create a note

    return(
        <div onClick={onClick} className={` ${className} h-[60px] w-[60px] bg-white hover:bg-[#D2D2D2] duration-300 cursor-pointer ease-in-out shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[15px] absolute sm:right-10 lg:right-[200px] bottom-10`}>
            <AddIcon/>
        </div>
    )
}
export default CreateButton