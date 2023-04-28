const d = document;



const $menuH = d.querySelector('.hamburger-menu'),
        $menuOculto = d.querySelector('.menuH'),
        $segundoMenu = d.querySelector('.menuH'),
        $menuCompleto = d.querySelector('.menu'),
        $imgHomeHeader = d.querySelector('.imagenes'),
        $btnR = d.querySelector('.btn-R'),
        $btnL = d.querySelector('.btn-L');
        
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








const carousel = d.querySelector('.carousel'); //  hace refer al container de img y btn 
const images = carousel.querySelectorAll('img'); // a img 


let currentImage = 0;

function showImage() {
  images.forEach((image) => {
    image.classList.remove('active');
  });
  images[currentImage].classList.add('active');
}

$btnL.addEventListener('click', () => {  // $btnR $btnL se declaran en al primera lineas
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage();
});

$btnR.addEventListener('click', () => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage();
});




// Evento DOMContentLoaded
d.addEventListener('DOMContentLoaded',(e)=>{
  console.log('Hola desde index')
  Menu()
  showImage();
})



// Evento click Option "Servicios"
const       $facial = d.getElementById('facial'),
$corporal = d.getElementById('corporal');

const routeServ =(e)=>{
  if(e.target.value === "Facial"){
    window.open('./assets/Components/Facial/Facial.html',"_self")
  }
  if(e.target.value === "Corporal"){
    window.open('./assets/Components/Corporal/Corporal.html',"_self")
  }
} 


d.addEventListener('click',(e)=>{
  routeServ(e)
  console.log(e.target.value)
})