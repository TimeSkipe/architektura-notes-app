import CreateButton from "../components/ComonComponents/CreateButton"
import Filter from "../components/ComonComponents/Filter"
import NoteBlock from "../components/ComonComponents/NoteBlock"
import SearchBlock from "../components/ComonComponents/SearchBlock"
import CreateCategory from "../components/ModalWindows/CreateCategory"
import CreateNote from "../components/ModalWindows/CreateNote"
import HomeStore from "../store/HomePageStore"
import axios from 'axios'
import { useEffect } from 'react'

const HomePage = () =>{

    const setNotes = HomeStore((state) => state.setNotes)
    const notes = HomeStore((state) => state.notes || [])
    const setCategories = HomeStore((state) => state.setCategories)
    const filteredNotes = HomeStore(state => state.filteredNotes);

    const GetNotes = async () =>{
        try {
            const response = await axios.get('http://localhost:3500/api/notes')
            setNotes(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    const GetCategory = async ()=>{
        try {
            const response = await axios.get("http://localhost:3500/api/notes/category")
            setCategories(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        GetNotes()
        GetCategory()
    }, [])

    const setCreateNoteWindow = HomeStore((state) => state.setCreateNoteWindow)

    return(
        <>
        <div className="relative">
            <div className="text-[24px] h-[200px] bg-[#1C68DA] tracking-[10px] text-white w-full flex justify-center items-center">
                Personal Journaling App
            </div>
            <SearchBlock/>

            <Filter/>

            {/* List of Notes */}
            <div className="m-auto m-0 w-1/2 mt-4">
                {!filteredNotes ? <div>Loading...</div> : (
                    filteredNotes.map(note => <NoteBlock key={note._id} data={note}/>)
                )}
            </div>

            
            
            <CreateNote/>
            <CreateCategory/>
        </div>
            {/* button for create note */}

            <CreateButton onClick={()=> setCreateNoteWindow(true)}/>
        </>
    )
}
export default HomePage