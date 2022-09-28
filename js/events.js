import {
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive
} from './elements.js'
import Sound from "./sounds.js"

export default function Event({timer, backgroundSound}) {
    
  // botões de controle
  buttonPlay.addEventListener('click', function(){
    timer.countdown()
    Sound().pressButton()
  })

  buttonStop.addEventListener('click', function(){
    timer.stopRestart()
    Sound().pressButton()
  })

  buttonPlusFive.addEventListener('click', function(){
    timer.plusFiveMinutes()
    Sound().pressButton()
  })

  buttonMinusFive.addEventListener('click', function(){
    timer.minusFiveMinutes()
    Sound().pressButton()
  })

  // sons da floresta
  buttonForest.addEventListener('click', function () {
    backgroundSound.forestSound()
  })

  buttonRain.addEventListener('click', function () {
    backgroundSound.rainSound()
  })

  buttonCoffee.addEventListener('click', function () {
    backgroundSound.coffeeShopSound()
  })

  buttonFirePlace.addEventListener('click', function () {
    backgroundSound.firePlaceSound()
  })

}