import { startTransition, useEffect, useState } from "react"
import SearchIcon from "../../svg/SearchIcon"
import HomeStore from "../../store/HomePageStore"

const SearchBlock = () => {

    //Search Block component,which works as a filter to find the right note

    //Zustand state
    const notes = HomeStore((state) => state.notes || [])
    const setFilteredNotes = HomeStore(state => state.setFilteredNotes);
    const ActiveCategory = HomeStore((state) => state.ActiveCategory || [])

    // react useStates
    const [searchText, setSearchText] = useState('')


    //Filter fun
    const Filter = (e) => {
        setSearchText(e.toLowerCase());
    }

    //UseEffect use Transition for smooth filtration
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