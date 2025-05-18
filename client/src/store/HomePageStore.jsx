
import {create} from "zustand"

const HomeStore = create((set)=>({
    
    CreateNoteWindow: false,
    CategoryList:false,
    CreateCategoryWindow: false,
    OpenCategoryList:false,
    notes:[],
    categories:[],
    ActiveCategory:[],
    filteredNotes: [],
  

    setCreateNoteWindow: (active) => set({ CreateNoteWindow: active }),
    setCategoryList:(active) => set({ CategoryList: active }),
    setCreateCategoryWindow:(active) => set({ CreateCategoryWindow: active }),
    setOpenCategoryList:(active) => set({ OpenCategoryList:active }),
    setNotes:(notes) => set({notes, filteredNotes:notes}),
    setCategories:(data) => set({categories:data}),
    setActiveCategory: (newCategories) => set((state) => {
      const existingIds = new Set(state.ActiveCategory.map(cat => cat._id));
      const filteredNew = newCategories.filter(cat => !existingIds.has(cat._id));
      return {
        ActiveCategory: [...state.ActiveCategory, ...filteredNew]
      };
    }),
    removeActiveCategory: (idToRemove) => set((state) => ({
      ActiveCategory: state.ActiveCategory.filter(cat => cat._id !== idToRemove)
    } )),
    setFilteredNotes: (notes) => set({ filteredNotes: notes }),
}))

export default HomeStore