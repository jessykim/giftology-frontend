// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import WishlistIndex from './pages/WishlistIndex/WishlistIndex'
import NewWishlist from './pages/NewWishlist/NewWishlist'
import WishlistDetails from './pages/WishlistDetails/WishlistDetails'
import EditWishlist from './pages/EditWishlist/EditWishlist'
import NewItem from './pages/NewItem/NewItem'
import EditItem from './pages/EditItem/EditItem'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists"
          element={
            <ProtectedRoute user={user}>
              <WishlistIndex />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/1"
          element={
            <ProtectedRoute user={user}>
              <WishlistDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/new"
          element={
            <ProtectedRoute user={user}>
              <NewWishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/1/new"
          element={
            <ProtectedRoute user={user}>
              <NewItem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/1/edit"
          element={
            <ProtectedRoute user={user}>
              <EditWishlist />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/wishlists/1/edit-item"
          element={
            <ProtectedRoute user={user}>
              <EditItem />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
