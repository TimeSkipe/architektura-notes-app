import { startTransition, useEffect, useState } from "react"
import SearchIcon from "../../svg/SearchIcon"
import HomeStore from "../../store/HomePageStore"

const SearchBlock = () => {
    const notes = HomeStore((state) => state.notes || [])
    const setFilteredNotes = HomeStore(state => state.setFilteredNotes);
    const ActiveCategory = HomeStore((state) => state.ActiveCategory || [])

    const [searchText, setSearchText] = useState('')

    const Filter = (e) => {
    setSearchText(e.toLowerCase());
    }

    useEffect(() => {
        startTransition(() => {
            const result = notes
            .filter(note =>
                ActiveCategory.length === 0 ||
                ActiveCategory.some(cat => cat._id === note.category)
            )
            .filter(note =>
                note.title.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredNotes(result);
        });
        }, [notes, ActiveCategory, searchText]);

    return(
        <div className="h-[60px] w-[50%] bg-white rounded-[15px] absolute left-1/2 -translate-x-1/2 top-[170px] flex justify-between items-center px-5 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
            <input value={searchText} onChange={(e)=>Filter(e.target.value)} placeholder="Search by name" className="bg-transparent text-black outline-none h-1/2 w-3/4 text-xl"/>
            <SearchIcon/>
        </div>
    )
}
export default SearchBlock