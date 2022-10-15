import create from 'zustand'

export const useDateStore = create((set, get) => ({
  Data: null,
  armazenarData: (value) => {
    set({ Date: value})
  },
 
}))