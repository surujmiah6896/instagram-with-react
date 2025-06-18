import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"
import UseAuthStore from "./store/authStore"

function App() {  
  const authUser = useAuthState(auth);
  console.log("app auth:" ,authUser);
  

  return (
    <>
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? (<HomePage/>) : <Navigate to={"/auth"}/>} />
        <Route path='/auth' element={!authUser ? (<AuthPage/>) : (<Navigate to={'/'}/>) } />
        <Route path='/:username' element={<ProfilePage/>} />
      </Routes>
    </PageLayout>
    </>
  )
}

export default App
