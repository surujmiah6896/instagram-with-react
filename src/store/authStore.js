
import { create } from 'zustand'

const UseAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user-info')),
    login: (user) => set({user}),
    logout: () => set({user:null}),
    setUser: (user) => set({user})
}));

export default UseAuthStore;

