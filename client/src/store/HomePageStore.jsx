
import {create} from "zustand"

const HomeStore = create((set)=>({
    
    //HomeStore it zustand store, which only use in HomePage

    CreateNoteWindow: false,
    setCreateNoteWindow: (active) => set({ CreateNoteWindow: active }),

    CategoryList:false,
    setCategoryList:(active) => set({ CategoryList: active }),

    CreateCategoryWindow: false,
    setCreateCategoryWindow:(active) => set({ CreateCategoryWindow: active }),

    OpenCategoryList:false,
    setOpenCategoryList:(active) => set({ OpenCategoryList:active }),

    notes:[],
    setNotes:(notes) => set({notes, filteredNotes:notes}),

    categories:[],
    setCategories:(data) => set({categories:data}),

    ActiveCategory:[],
    setActiveCategory: (newCategories) => set((state) => {
      const existingIds = new Set(state.ActiveCategory.map(cat => cat._id));
      const filteredNew = newCategories.filter(cat => !existingIds.has(cat._id));
      return {
        ActiveCategory: [...state.ActiveCategory, ...filteredNew]
      };
    }),

    filteredNotes: [],
    removeActiveCategory: (idToRemove) => set((state) => ({
      ActiveCategory: state.ActiveCategory.filter(cat => cat._id !== idToRemove)
    } )),
    setFilteredNotes: (notes) => set({ filteredNotes: notes }),

    activeNoteId: null,
    setActiveNoteId: (id) => set({ activeNoteId: id }),
}))

export default HomeStore