import create from 'zustand'

export const useUserStore = create((set, get) => ({
  estaLogado: false,
  fazerLogin: () => {
    set({ estaLogado: true})
  },
  sair: () => {
    set({ estaLogado: false})
  }
}))