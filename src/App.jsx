import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeaderRacing from "./components/LeaderRacing.jsx";
import Home from "./components/Home.jsx";
import './App.css'

function App() {

  return (
    <BrowserRouter basename="/LeagueOfLegend_match_image">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/leaderRacing/:roster/:position/:colors/:winner/:index/:constructor"  element={<LeaderRacing/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
