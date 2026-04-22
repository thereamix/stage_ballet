import { Route, Routes } from "react-router-dom"
import './App.css'
import Layout from "./components/Layout.tsx"
import About from "./pages/About.tsx"
import HomePage from "./pages/HomePage.tsx"
import Team from "./pages/Team.tsx"
import Courses from "./pages/Courses.tsx"
import FAQ from "./pages/Faq.tsx"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="courses" element={<Courses />} />
                <Route path="team" element={<Team />} />
                <Route path="about" element={<About />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App