import { useState } from "react"
import HomeStore from "../../store/HomePageStore"
import CloseIcon from "../../svg/CloseIcon"
import SaveButton from "../ComonComponents/SaveButton"
import axios from "axios"

const CreateCategory = () => {

    const CreateCategoryWindow = HomeStore((state)=> state.CreateCategoryWindow)
    const setCreateCategoryWindow = HomeStore((state) => state.setCreateCategoryWindow)


    const [CategoryName, setCategoryName] = useState('')
    const [ColorCategory, setColorCategory] = useState('')

    
    const CreateCategoryFun = async () =>{
        try {
            const response = await axios.post('http://localhost:3500/api/notes/category', {
              name:CategoryName,
              color:ColorCategory
            })
            console.log('Category was created', response.data)
            setCreateCategoryWindow(false)
            ClearAll()
            window.location.reload();
          } catch (error) {
            console.error('ERROR', error)
          }
    }
    
    const ClearAll = () =>{
        setCategoryName("")
        setColorCategory("")
    }
    return(
        <div className={` ${CreateCategoryWindow ? "" : "hidden"} absolute h-[100vh] w-[100vw] bg-white top-0 right-0 z-50`}>
            
            <div className="w-1/2 m-0 m-auto">
                {/* */}
                <div className="flex justify-between items-center text-[24px] h-15 py-2">
                    Create a category 
                    <CloseIcon className={"cursor-pointer"} onClick ={()=>{setCreateCategoryWindow(false);ClearAll()}}/>
                </div>

                {/* */}
                <div className="flex flex-col mb-3">
                    Name of category
                    <input value={CategoryName} onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Write a text" className="h-[50px] bg-[#F3F3F3] rounded-[15px] px-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] outline-none"/>
                </div>
                <div className="flex flex-col mb-3">
                    Color of category
                    
                    <div className="bg-[#F3F3F3] min-h-[70px] flex justify-around items-center rounded-[15px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] p-3">
                        <div onClick={()=> setColorCategory("#f97171")} className={` ${ColorCategory == "#f97171" ? "bg-red-500" : "bg-red-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-red-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#60a6fa")} className={` ${ColorCategory == "#60a6fa" ? "bg-blue-500" : "bg-blue-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-blue-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#4bde80")} className={` ${ColorCategory == "#4bde80" ? "bg-green-500" : "bg-green-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-green-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#facc14")} className={` ${ColorCategory == "#facc14" ? "bg-yellow-500" : "bg-yellow-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-yellow-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#c084fc")} className={` ${ColorCategory == "#c084fc" ? "bg-purple-500" : "bg-purple-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-purple-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#f472b6")} className={` ${ColorCategory == "#f472b6" ? "bg-pink-500" : "bg-pink-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-pink-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#9da3af")} className={` ${ColorCategory == "#9da3af" ? "bg-gray-500" : "bg-gray-400"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-gray-500 duration-300 ease-in-out rounded-[15px]`}></div>
                        <div onClick={()=> setColorCategory("#991b1b")} className={` ${ColorCategory == "#991b1b" ? "bg-red-800" : "bg-red-700"} h-[50px] w-[50px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-red-800 duration-300 ease-in-out rounded-[15px]`}></div>
                    </div>
                </div>

                

                {/* */}
                <SaveButton onClick={CreateCategoryFun}/>

            </div>
            
        </div>
    )
}
export default CreateCategory