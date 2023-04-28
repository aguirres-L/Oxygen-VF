
const $menuH = document.querySelector('.hamburger-menu'),
        $menuOculto = document.querySelector('.menuH'),
        $segundoMenu = document.querySelector('.menuH'),
        $menuCompleto = document.querySelector('.menu');
        
let isVisible = false
        
const Menu =()=>{ // En menu modifico el valor de none para hacer visible o no el segudno menu 

    $menuH.addEventListener('click',(e)=>{
        console.log(e.target)
        if(isVisible == true){
        //    $menuOculto.style.display = "none"
            $menuOculto.style.marginLeft = "-9rem"
        
            isVisible = false
            console.log(isVisible)
            return
        }
        if(isVisible == false){
        //    $menuOculto.style.display = "block"
            $menuOculto.style.marginLeft = "0rem"
            isVisible = true
            console.log(isVisible)
            return
        }
        
        
    })
}




// Evento DOMContenLoaded 



document.addEventListener('DOMContentLoaded',(e)=>{
    console.log('Hola desde index')
    Menu()
    
})


// Evento click Option "Servicios"
const       $facial = document.getElementById('facial'),
$corporal = document.getElementById('corporal');

const routeServ =(e)=>{
  if(e.target.value === "Facial"){
   window.open('../../Facial/Facial.html',"_self")
  }
  if(e.target.value === "Corporal"){
    window.open('../../Corporal/Corporal.html',"_self")
  }
} 


document.addEventListener('click',(e)=>{
  routeServ(e)
  console.log(e.target.value)
})

