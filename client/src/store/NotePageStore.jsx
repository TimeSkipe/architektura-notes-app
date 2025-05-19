import { create } from "zustand";

const NotePageStore = create((set)=>({

    // NotePagesStore its Zustand store, which use only in NotePage

    Note:[],
    setNote:(note)=>set({note, Note:note}),

    OpenSetting:false,
    setOpenSetting:(active)=>set({OpenSetting:active}),

    DeleteWindow:false,
    setDeleteWindow:(active)=>set({DeleteWindow:active}),

    EditNoteWindow:false,
    setEditNoteWindow:(active)=>set({EditNoteWindow:active}),

    CreatePasswordWindow:false,
    setCreatePasswordWindow:(active)=>set({CreatePasswordWindow:active}),

    NewPasswordWindow:false,
    setNewPasswordWindow:(active)=>set({NewPasswordWindow:active}),

    ReminderData:false,
    setReminderData:(active)=>set({ReminderData:active}),

    OpenCategoryList:false,
    setOpenCategoryList:(active) => set({ OpenCategoryList:active }),
    
}))
export default NotePageStore