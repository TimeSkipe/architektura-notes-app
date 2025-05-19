import HomeStore from "../../store/HomePageStore"

const CategoryList = () =>{

    // CategoryList is modal componens, that show a list of categories and button for create a new category

    //Zustand state
    const CategoryList = HomeStore((state) => state.CategoryList)
    const setCategoryList = HomeStore((state) => state.setCategoryList)
    const setCreateCategoryWindow = HomeStore((state) => state.setCreateCategoryWindow)
    const categories = HomeStore((state) => state.categories || [])
    const setActiveCategory = HomeStore((state) => state.setActiveCategory)


    return(
        <>
        <div onClick={() => setCategoryList(false)} className={` ${CategoryList ? "z-[10]": '-z-10'} fixed inset-0 h-[100vh] w-[100vw]`}></div>

        <div className={` ${CategoryList ? "" : "hidden"} p-2 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] min-w-[300px] absolute rounded-[10px] top-[30px] z-[9999] right-0`}>
            
            
            {/*create category button */}
            <div onClick={()=>{setCreateCategoryWindow(true); setCategoryList(false)}} className="bg-[#D8D8D8] hover:bg-[#A4A4A4] duration-300 ease-in-out cursor-pointer mb-4 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] min-h-[40px] flex justify-center items-center p-1 rounded-[10px]">
                Create a category
            </div>

            {/* Category list*/}
            <div>
                {!categories ? <div>Loading...</div> : (
                    categories.map(category => 
                    <div onClick={()=>setActiveCategory([{_id: category._id, name:category.name}])} key={category._id} style={{ borderColor: category.color }} className={` bg-[#F3F3F3] hover:bg-[#d4d4d4] ease-in-out duration-300 rounded-[10px] py-1 px-3 min-h-[40px] flex items-center border-l-[3px]  shadow-[2px_2px_4px_rgba(0,0,0,0.25)] mb-1 cursor-pointer`}>
                        {category.name}
                    </div>)
                )}
                
            </div>
        </div>
        </>
    )
}
export default CategoryList