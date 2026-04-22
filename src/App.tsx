import {Route, Routes } from "react-router-dom"
import './App.css'
import Layout from "./components/Layout.tsx";
import About from "./pages/About.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path={"/courses"}/>
          <Route path={"/team"} />
          <Route path={"/about"} element={<About/>}/>
          <Route path={"faq"}/>
          <Route path={"*"}/>
        </Route>
      </Routes>
  )
}

export default App
