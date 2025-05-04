import HomeStore from "../../store/HomePageStore"
import CloseIcon from "../../svg/CloseIcon"
import FilterIcon from "../../svg/FilterIcon"
import CategoryList from "../ModalWindows/CategoryList"

const Filter = () =>{

    const setCategoryList = HomeStore((state) => state.setCategoryList)

    return(
        <div className="w-1/2 m-0 m-auto flex justify-center items-end h-[70px]">
            <div className="flex justify-between w-full items-center relative">

                {/* Active category list*/}
                <div className="w-[85%] h-[30px] flex">


                    <div className="bg-[#D9D9D9] h-full py-1 pl-2 rounded-[10px] ml-1 flex justify-center items-center">
                        Category 1
                        <CloseIcon className={"h-[10px] mx-1"}/>
                    </div>
                    <div className="bg-[#D9D9D9] h-full py-1 pl-2 rounded-[10px] ml-1 flex justify-center items-center">
                        Category 2
                        <CloseIcon className={"h-[10px] mx-1"}/>
                    </div>
                    

                </div>

                {/* button open category list */}
                <div onClick={()=>setCategoryList(true)} className="flex justify-center items-center cursor-pointer">
                    <div className="text-[#686868]">
                        Sort By 
                    </div>
                    <FilterIcon className={"mx-1"}/>
                </div>

                {/* Modal windown to chose a category */}
                <CategoryList/>
            </div>
        </div>
    )
}
export default Filter