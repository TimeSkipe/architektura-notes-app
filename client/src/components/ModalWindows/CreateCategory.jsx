import HomeStore from "../../store/HomePageStore"
import CloseIcon from "../../svg/CloseIcon"
import SaveButton from "../ComonComponents/SaveButton"

const CreateCategory = () => {

    const CreateCategoryWindow = HomeStore((state)=> state.CreateCategoryWindow)
    const setCreateCategoryWindow = HomeStore((state) => state.setCreateCategoryWindow)

    return(
        <div className={` ${CreateCategoryWindow ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            
            <div className="w-1/2 m-0 m-auto">
                {/* */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2">
                    Create a category 
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>setCreateCategoryWindow(false)}/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3">
                    Name of category
                    <input type="text" placeholder="Write a text" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>
                <div className="flex flex-col mb-3">
                    Color of category
                    
                    <div className="bg-[#F3F3F3] min-h-[70px] flex justify-around items-center rounded-[15px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] p-3">
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-red-500 duration-300 ease-in-out bg-red-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-blue-500 duration-300 ease-in-out bg-blue-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-green-500 duration-300 ease-in-out bg-green-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-yellow-500 duration-300 ease-in-out bg-yellow-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-purple-500 duration-300 ease-in-out bg-purple-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-pink-500 duration-300 ease-in-out bg-pink-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-gray-500 duration-300 ease-in-out bg-gray-400 rounded-[15px]"></div>
                        <div className="h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-red-900 duration-300 ease-in-out bg-red-800 rounded-[15px]"></div>
                    </div>
                </div>

                

                {/* */}
                <SaveButton/>

            </div>
            
        </div>
    )
}
export default CreateCategory