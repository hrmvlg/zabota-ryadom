import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Auth from "./components/Auth/Auth"
import Profile from './components/Profile/Profile';
import Catalog from './components/Catalog/Catalog';
import RequestPage from './components/RequestPage/RequestPage';
import { useState } from "react";

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <Layout>
      <Routes>
        {isAuth ?
          <Route path="/" element={<Profile />} />
          :
          <Route path="/" element={<Auth />} />
        }
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/request-page" element={<RequestPage />} />
      </Routes>
    </Layout>
  )
}

export default App
