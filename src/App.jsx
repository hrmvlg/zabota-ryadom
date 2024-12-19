import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Auth from "./components/Auth/Auth"
import Profile from './components/Profile/Profile';
import Catalog from './components/Catalog/Catalog';
import RequestPage from './components/RequestPage/RequestPage';

function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/request-page" element={<RequestPage />} />
        </Routes>
      </Layout>
  )
}

export default App
