import CreateButton from "../components/ComonComponents/CreateButton"
import Filter from "../components/ComonComponents/Filter"
import NoteBlock from "../components/ComonComponents/NoteBlock"
import SearchBlock from "../components/ComonComponents/SearchBlock"
import CheckPassword from "../components/ModalWindows/CheckPassword"
import CreateCategory from "../components/ModalWindows/CreateCategory"
import CreateNote from "../components/ModalWindows/CreateNote"
import HomeStore from "../store/HomePageStore"
import axios from 'axios'
import { useEffect } from 'react'

const HomePage = () =>{

    // The main page of app, this com contain modal windows and component that show list of notes, and filter com


    // Zustand state
    const setNotes = HomeStore((state) => state.setNotes)
    const setCategories = HomeStore((state) => state.setCategories)
    const filteredNotes = HomeStore(state => state.filteredNotes);
    const setCreateNoteWindow = HomeStore((state) => state.setCreateNoteWindow)

    // Get request on server, that get all notes
    const GetNotes = async () =>{
        try {
            const response = await axios.get('http://localhost:3500/api/notes')
            setNotes(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    // Get request on server, that get all categories
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


    return(
        <>
        <div className="relative w-full">
            <div className="text-[24px] h-[200px] bg-[#1C68DA] tracking-[10px] text-white w-full flex justify-center items-center">
                Personal Journaling App
            </div>

            {/* SearchBlock component, for search note */}
            <SearchBlock/>

            {/* Filter component, filter by categories and title */}
            <Filter/>

            {/* List of Notes */}
            <div className="m-auto m-0 w-1/2 mt-4">
                {!filteredNotes ? <div>Loading...</div> : (
                    filteredNotes.map(note => <NoteBlock key={note._id} data={note}/>)
                )}
            </div>

            
            {/* CreateNote modal component */}
            <CreateNote/>

            {/* CreateCategory modal component */}
            <CreateCategory/>

            {/* CheckPassword modal component */}
            <CheckPassword/>

        </div>
            {/* button for create note */}
            <CreateButton onClick={()=> setCreateNoteWindow(true)}/>
        </>
    )
}
export default HomePage