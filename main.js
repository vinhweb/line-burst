function createBurst(){
  let animationContainer = document.querySelector('.animation-container')
  let burst = document.querySelector('.burst')
  let lines = document.querySelectorAll('.line')

  burst.style.top = Math.random() * innerHeight + "px"
  burst.style.left = Math.random() * innerWidth + "px"

  lines.forEach((line)=>{
    const colors = ["#ea5e55", "#34a854", "#4285f4", "#fbbc05", "#fdfdfd", "ocean"]

    const randomColor = colors[Math.floor(Math.random()*colors.length)]
    line.style.background = randomColor;
  })

  let burstClone = burst.cloneNode(true);
  animationContainer.appendChild(burstClone)

  setTimeout(()=>{
    burstClone.remove()
  }, 3000)
}

setInterval(createBurst, 400);