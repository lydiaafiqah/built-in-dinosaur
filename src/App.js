import { useState, useEffect } from 'react'
import './assets/css/App.css'

function App() {
  const [ dino, setDino ] = useState(null)
  const [ cactus, setCactus ] = useState(null)

  useEffect(()=>{
    const dino = document.getElementById('dino')
    setDino(dino)

    const cactus = document.getElementById('cactus')
    setCactus(cactus)
  }, [])
 

  const jump = () => {
    if (dino.classList !== 'jump') {
      dino.classList.add('jump')
  
      setTimeout(() => {
        dino.classList.remove('jump')
      }, 300)
    }
  }

  let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      alert('Game Over!')
    }
  }, 10)

  document.addEventListener('keydown', (e) => {
    if (dino) {
      jump()
    }
  })

  return (
    <div className='game'>
      <div className='dino' id='dino' />
      <div className='cactus' id='cactus' />
    </div>
  )
}

export default App;