
import './App.css'
import MainIndex from './Main/MainIndex'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'
import Sign from './pages/Sign'
import Ladders from './components/Ladders'
import Cables from './components/Cables'
import All from './components/All'
import CCTV from './components/CCTV'
import Alarm from './components/Alarm'
import Fence from './components/Fence'
import Gate from './components/Gate'
function App() {
  const dev=[
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
     
    },
    
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
     
    },
    
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
     
    },
    
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
     
    },
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
     
    },
    
  ]

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainIndex/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/ladders' element={<Ladders dev={dev}/>} />
        <Route path='/cables' element={<Cables dev={dev}/>} />
        <Route path='/all' element={<All dev={dev}/>}/>
        <Route path='/cctv' element={<CCTV dev={dev}/>}/>
        <Route path='/alarm' element={<Alarm dev={dev}/>}/>
        <Route path='/fence' element={<Fence />}/>
        <Route path='/gate' element={<Gate dev={dev}/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
