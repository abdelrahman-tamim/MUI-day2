import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import MyNav from './Components/MyNav'
import UNav from './Components/UNav';
import MainImg from './Components/MainImg';
import Catagories from './Components/Catagories';
import TopGrid from './Components/TopGrid';

function App() {
 

  return (
    <>
     <MyNav/>
     <UNav/>
     <MainImg/>
     <Catagories/>
     <TopGrid/>
    </>
  )
}

export default App
