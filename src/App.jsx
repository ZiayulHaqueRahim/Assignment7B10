
import './App.css'
import Banner from './components/banneer/Banner'
import Navbar from './components/navbar/Navbar'
import Section from './section/section'
import Newsteller from './newsteller/Newsteller'
import Footer from './assets/footer/Footer'
import { useState } from 'react'

function App() {
 
  const[coin,setCoin] =useState(0);
  const handleCoin =(value) =>{
      const addCoin =  coin + 1000000;
      setCoin(addCoin)
      alert('100000 coin added to balance')
  }

  
  const[isActive,setIsActive] = useState({
    Available: true,
    status: "active"
  })
 

const handleIsActive = (status) =>{
  if(status == "Available"){
     setIsActive({
       Available: true,
    status: ""
     })
  }else{
    setIsActive({
       Selected: true,
    status: ""
    })
  }
}

    const[selectedPlayer,setSelectedPlayer] = useState([]);
    
    const handleSelectedPlayer = (player) =>{
    const isexist = selectedPlayer.find((p) => p.id == player.id)
      if(isexist){
        alert('Already selected')
      }else{
        const newPlayer = [...selectedPlayer, player]
        setSelectedPlayer(newPlayer)
      
      }

    }
    
  

  return (
    <div>
        <Navbar coin={coin}></Navbar>
        <Banner handleCoin={handleCoin}></Banner>
        <Section selectedPlayer={selectedPlayer}  handleSelectedPlayer={handleSelectedPlayer} coin={coin} handleIsActive={handleIsActive} isActive={isActive}></Section>
        <Newsteller></Newsteller>
        <Footer></Footer>
    </div>
  )
}

export default App