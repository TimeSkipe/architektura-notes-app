
import {create} from "zustand"

const HomeStore = create((set)=>({
    SearchText: "",
    CreateNoteWindow: false,
    CategoryList:false,
    CreateCategoryWindow: false,
    notes:[],

    setCreateNoteWindow: (active) => set({ CreateNoteWindow: active }),
    setCategoryList:(active) => set({ CategoryList: active }),
    setCreateCategoryWindow:(active) => set({ CreateCategoryWindow: active }),
    setNotes:(data) => set({notes:data})
}))

export default HomeStore