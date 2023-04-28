
//import s from "../ServDetail/serFacial/Radiesse.html"

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


// Card Serv 
  
const Data = [
  Rino_model={
    title:"Rino Modelacion",
    info:"La rinomodelación es un procedimiento no quirúrgico que se utiliza para corregir imperfecciones menores en la nariz, sin la necesidad de someterse a una cirugía invasiva. El tratamiento consiste en la inyección de ácido hialurónico o rellenos dérmicos en ciertas áreas de la nariz para mejorar su apariencia.",
    img:"../../img/imgfacial/rinoModelacion.jpg",
    url:"../ServDetail/serFacial/Rino.html"
  },
  Recupe_Capilar ={
    title:"Recuperación Capilar",
    info:"El tratamiento de recuperación capilar es un conjunto de técnicas y procedimientos médicos que se utilizan para mejorar la salud del cabello y recuperar la densidad capilar en personas con problemas de pérdida de cabello o alopecia. ",
    img:"../../img/imgFacial/recuperacionCapilar.jpg",
    url:"../ServDetail/serFacial/Capilar.html"
  },
  Peeling={
    title:"Peeling",
    info:"El tratamiento de peeling consiste en la aplicación de una solución química sobre la piel con el objetivo de exfoliarla y eliminar las células muertas, impurezas y manchas superficiales, así como estimular la producción de colágeno y elastina para mejorar su apariencia y textura.",
    img:"../../img/imgFacial/peeling.jpg",
    url:"../ServDetail/serFacial/Peeling.html"
  },
  Radiesse={
    title:"Radiesse",
    info:"El tratamiento de peeling consiste en la aplicación de una solución química sobre la piel con el objetivo de exfoliarla y eliminar las células muertas, impurezas y manchas superficiales, así como estimular la producción de colágeno y elastina para mejorar su apariencia y textura.",
    img:"../../img/imgFacial/radiesse.jpg",
    url:"../ServDetail/serFacial/Radiesse.html"
  },
  ProfHilo={
    title:"ProfHilo",
    info:"Profhilo es un tratamiento estético no quirúrgico que se utiliza para hidratar y rejuvenecer la piel, mejorando su apariencia, firmeza y elasticidad. Se trata de un gel de ácido hialurónico de alta pureza y baja reticulación que se inyecta en la piel, donde actúa como estimulador biológico y promueve la producción natural de colágeno y elastina.",
    img:"../../img/imgFacial/porfHilo.jpg",
    url:"../ServDetail/serFacial/ProfHilo.html"
  },
  Long_Lasting={
    title:"Long Lasting",
    info:"El tratamiento Long Lasting es una técnica de maquillaje semipermanente que puede mejorar la apariencia de las cejas, los ojos y los labios. El pigmento se aplica en la capa superior de la piel, creando una apariencia de maquillaje de larga duración. El tratamiento puede durar de 1 a 3 años y puede ahorrar tiempo y esfuerzo en la aplicación diaria del maquillaje.",
    img:"../../img/imgFacial/long_lasting.webp",
    url:"../ServDetail/serFacial/Long.html"
  },
  AcidoHi ={
    title:"Acido Hialuronico",
    info:"El ácido hialurónico es un componente natural del cuerpo humano que se encuentra en la piel, las articulaciones y los tejidos conectivos. El mismo se utiliza como un relleno dérmico inyectable para mejorar la apariencia de la piel y restaurar el volumen facial perdido debido al envejecimiento.",
    img:"../../img/imgFacial/acido_hialuronico.jpeg",
    url:"../ServDetail/serFacial/Acido.html"
  },
  Sculptra={
    title:"Sculptra",
    info:"Sculptra es un tratamiento estético no quirúrgico que se utiliza para restaurar el volumen facial y mejorar la apariencia de la piel en personas que experimentan signos visibles del envejecimiento. Se trata de un relleno dérmico inyectable que contiene ácido poliláctico, un compuesto biodegradable y sintético que se utiliza en productos médicos y estéticos desde hace décadas.",
    img:"../../img/imgFacial/sculptra.jpg",
    url:"../ServDetail/serFacial/Sculptra.html"
  },
  ToxinaButo={
    title:"Toxina Butolinica",
    info:"El tratamiento con Toxina Botulínica, comúnmente conocido como Botox, es un procedimiento médico estético no quirúrgico que se utiliza para reducir la apariencia de las líneas de expresión y arrugas faciales. Se utiliza comúnmente en la frente, entre las cejas y alrededor de los ojos (patas de gallo).",
    img:"../../img/imgFacial/toxina_butolinica.jpg",
    url:"../ServDetail/serFacial/ToxinaButolinica.html"
  },
  Mela_Lase={
    title:"Mela Laser",
    info:"El tratamiento Mela Laser es un procedimiento estético que se utiliza para tratar manchas en la piel causadas por el exceso de melanina, como las manchas solares, las manchas de la edad o el melasma. Este tratamiento utiliza un láser especializado para dirigirse a las células que producen melanina en la piel y reducir su producción, lo que ayuda a disminuir la apariencia de las manchas oscuras.",
    img:"../../img/imgFacial/mela_laser.jpg",
    url:"../ServDetail/serFacial/MelaLaser.html"
  },
  Fotoen={
    title:"Fotoenvejecimiento",
    info:"El tratamiento de fotoenvejecimiento es un procedimiento estético que se utiliza para reducir los signos del envejecimiento en la piel causados por la exposición al sol y otros factores ambientales. Estos signos incluyen manchas de la edad, arrugas finas, poros dilatados, textura de la piel irregular y tono de piel desigual.",
    img:"../../img/imgFacial/Fotoenvejecimiento.jpg",
    url:"../ServDetail/serFacial/Foto.html"
  },
  BioEsti={
    title:"Bioestimulo",
    info:"El tratamiento de bioestimulación es un procedimiento estético no quirúrgico que se utiliza para estimular la producción de colágeno y elastina en la piel, lo que ayuda a mejorar su textura, firmeza y elasticidad. Este tratamiento utiliza inyecciones de sustancias bioestimulantes, como el ácido poliláctico o el ácido hialurónico, para estimular la producción de colágeno y elastina en las capas profundas de la piel.",
    img:"../../img/imgFacial/bioestimulo.avif",
    url:"../ServDetail/serFacial/Bio.html"
  },
  Skin_Booster={
    title:"SkinBooster",
    info:"El tratamiento Skin Booster es un procedimiento estético no invasivo que se utiliza para mejorar la apariencia de la piel, hidratarla y darle un aspecto más saludable y juvenil. Este tratamiento implica la inyección de un gel de ácido hialurónico de alta calidad en la piel, que ayuda a reponer la hidratación y la elasticidad de la piel.",
    img:"../../img/imgFacial/skinbooster.jpg",
    url:"../ServDetail/serFacial/SkinBooster.html"
  },
  PDO_Tensore={
    title:"Hilos PDO y Tensores",
    info:"Los hilos PDO y tensores son un tipo de tratamiento estético no quirúrgico que se utiliza para tensar y levantar la piel flácida en diferentes partes del cuerpo, como el rostro, el cuello, los brazos y las piernas.",
    img:"../../img/imgFacial/pdo_tensores.jpeg",
    url:"../ServDetail/serFacial/PDO.html"
  },
  LunaVerruga={
    title:"Lunare y Verrugas",
    info:"El tratamiento Lunare y Verrugar es un procedimiento estético que se utiliza para eliminar verrugas, lunares y otras lesiones benignas de la piel. Este tratamiento implica la aplicación de una pequeña cantidad de corriente eléctrica de alta frecuencia sobre la lesión, lo que destruye las células de la piel que la componen.",
    img:"../../img/imgFacial/lunares_verrugas.jpg",
    url:"../ServDetail/serFacial/LunaresyV.html"
  },
  Manchas={
    title:"Manchas",
    info:"El tratamiento de manchas en la piel es un procedimiento estético que se utiliza para reducir o eliminar las manchas oscuras o pigmentadas en la piel. Estas manchas pueden ser causadas por varios factores, como la exposición al sol, la edad, el acné, las hormonas y algunas condiciones médicas.",
    img:"../../img/imgFacial/manchas.png",
    url:"../ServDetail/serFacial/Manchas.html"
  },
  Flacidez={
    title:"Flacidez",
    info:"El tratamiento de flacidez es un procedimiento estético que se utiliza para mejorar la apariencia de la piel suelta o flácida en diferentes partes del cuerpo, como el rostro, el cuello, los brazos, el abdomen y los muslos. La flacidez puede ser causada por varios factores, como la edad, la pérdida de peso, la falta de ejercicio y el embarazo.",
    img:"../../img/imgFacial/flacidez.jpg",
    url:"../ServDetail/serFacial/Flacidez.html"
  },
  Acne={
    title:"Acne",
    info:"El tratamiento del acné activo y sus secuelas es un procedimiento estético que se utiliza para mejorar la apariencia de la piel afectada por el acné. El acné activo se refiere a los brotes de acné en curso, mientras que las secuelas del acné se refieren a las cicatrices y marcas que quedan después de que el acné se haya curado.",
    img:"../../img/imgFacial/acne.jpg",
    url:"../ServDetail/serFacial/Acne.html"
  },
  ReestrFacial={
    title:"Reestructuracion Facial",
    info:"La reestructuración facial es un procedimiento estético que se utiliza para mejorar la apariencia de la piel del rostro y reducir los signos visibles del envejecimiento. Este tratamiento implica la aplicación de técnicas y productos para mejorar la textura, la firmeza y la hidratación de la piel del rostro, cuello y escote.",
    img:"../../img/imgFacial/radiesse.jpg",
    url:"../ServDetail/serFacial/ReestrFacial.html"
  },
  RelloLabios={
    title:"Rellenos de Labios",
    info:"El tratamiento de relleno de labios es un procedimiento estético que se utiliza para aumentar el volumen y mejorar la forma de los labios. Este tratamiento implica la inyección de una sustancia, como el ácido hialurónico, en los labios para darles una apariencia más completa y definida.",
    img:"../../img/imgFacial/rellenos_labios.jpg",
    url:"../ServDetail/serFacial/Labios.html"
  }
]

const $frag = document.createDocumentFragment()

const $servicios = document.querySelector('.servicios')

const Card =()=>{
console.log($servicios)

Data.forEach((el)=>{
      const $card = document.createElement('div'),
            $cardInfo = document.createElement('div'),
            $img =document.createElement("img");
            
            $card.setAttribute('class','card');
            $cardInfo.setAttribute('class','card-info');
            $img.setAttribute('src',`${el.img}`);
            
            // para poder cargar las img devo de crear un elemnt img y con un forEach colcarle el src y despues pasalo como insertElemento ?
            
            
          $cardInfo.innerHTML = ` 
                                  <hr class="hrCard">
                                  <h2>${el.title}</h2>
                                  <br>
                                  <p>${el.info}</p>
                                  <br>
                                  <a href="${el.url}" class="info-serv">Ver mas</a>
                                `
         $card.appendChild($img)
         $card.appendChild($cardInfo)
         
         $frag.append($card)
    })
    
  $servicios.appendChild($frag)
    
  }


   
document.addEventListener('DOMContentLoaded',(e)=>{
  Menu()
  Card()
})



// Evento click Option "Servicios"
const       $facial = document.getElementById('facial'),
$corporal = document.getElementById('corporal');

const routeServ =(e)=>{
  if(e.target.value === "Facial"){
    window.open('../Facial/Facial.html',"_self")
  }
  if(e.target.value === "Corporal"){
    window.open('../Corporal/Corporal.html',"_self")
  }
} 


document.addEventListener('click',(e)=>{
  routeServ(e)
})