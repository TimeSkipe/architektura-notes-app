import HomeStore from "../../store/HomePageStore"
import CloseIcon from "../../svg/CloseIcon"
import FilterIcon from "../../svg/FilterIcon"
import CategoryList from "../ModalWindows/CategoryList"

const Filter = () =>{

    // Filter component, that show active category below search block, that component contain, category list, button for create a category, and list of active category


    // zustand state
    const setCategoryList = HomeStore((state) => state.setCategoryList)
    const ActiveCategory = HomeStore((state) => state.ActiveCategory || [])
    const removeActiveCategory = HomeStore((state) => state.removeActiveCategory)



    return(
        <div className="w-1/2 m-0 m-auto flex justify-center items-end h-[70px]">
            <div className="flex justify-between w-full items-center relative">



                {/* Active category list*/}
                <div className="w-[85%] h-[30px] flex">
                    {ActiveCategory.length === 0 ? null : (
                        ActiveCategory.map(category => (
                            <div
                            key={category._id}
                            className="bg-[#D9D9D9] h-full py-1 pl-2 rounded-[10px] ml-1 flex justify-center items-center"
                            >
                            {category.name}
                            <CloseIcon
                                onClick={() => removeActiveCategory(category._id)}
                                className="h-[10px] mx-1 cursor-pointer"
                            />
                            </div>
                        ))
                        )}
                    

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