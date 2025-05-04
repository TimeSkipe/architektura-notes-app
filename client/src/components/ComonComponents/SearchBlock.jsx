import SearchIcon from "../../svg/SearchIcon"

const SearchBlock = () => {
    return(
        <div className="h-[60px] w-[50%] bg-white rounded-[15px] absolute left-1/2 -translate-x-1/2 top-[170px] flex justify-between items-center px-5 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
            <input placeholder="Search by name" className="bg-transparent text-black outline-none h-1/2 w-3/4 text-xl"/>
            <SearchIcon/>
        </div>
    )
}
export default SearchBlock