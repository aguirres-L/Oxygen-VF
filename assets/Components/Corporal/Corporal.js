

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
  
  
  
  // Card Dinamicas 

  
  const Data =[
    Peeling ={
      title:"Peeling",
      info:"El tratamiento de peeling consiste en la aplicación de una solución química sobre la piel con el objetivo de exfoliarla y eliminar las células muertas, impurezas y manchas superficiales, así como estimular la producción de colágeno y elastina para mejorar su apariencia y textura.",
      img:"../../img/imgCorporal/peeling.jpg",
      url:"../ServDetail/serCorporal/Peeling.html"
    },
    Acido_Hialuronico ={
      title:"Acido Hialuronico",
      info:"El ácido hialurónico es un componente natural del cuerpo humano que se encuentra en la piel, las articulaciones y los tejidos conectivos. El mismo se utiliza como un relleno dérmico inyectable para mejorar la apariencia de la piel y restaurar el volumen facial perdido debido al envejecimiento.",
      img:"../../img/imgCorporal/acido_hialuronico.jpeg",
      url:"../ServDetail/serCorporal/Acido.html"
    },
    Long_Lasting ={
      title:"Long Lasting",
      info:"El tratamiento Long Lasting es una técnica de maquillaje semipermanente que puede mejorar la apariencia de las cejas, los ojos y los labios. El pigmento se aplica en la capa superior de la piel, creando una apariencia de maquillaje de larga duración. El tratamiento puede durar de 1 a 3 años y puede ahorrar tiempo y esfuerzo en la aplicación diaria del maquillaje.",
      img:"../../img/imgCorporal/long_lasting.webp",
      url:"../ServDetail/serCorporal/Long.html"
    },
    Masoterapia ={
      title:"Masoterapia",
      info:"La masoterapia es un tratamiento terapéutico que utiliza técnicas de masaje para aliviar el dolor, la tensión y la rigidez muscular. Se utiliza para tratar una variedad de dolencias, como dolores de cabeza, dolor de espalda, lesiones deportivas y estrés. El masaje puede mejorar la circulación sanguínea, reducir la inflamación y mejorar la función del sistema nervioso. Es importante buscar un profesional capacitado que se adapte a sus necesidades individuales.",
      img:"../../img/imgCorporal/Masoterapia.jpg",
      url:"../ServDetail/serCorporal/Masoterapia.html"
    },
    Carboxiterapia ={
      title:"Carboxiterapia",
      info:"La carboxiterapia es un tratamiento estético no invasivo que consiste en la aplicación de dióxido de carbono (CO2) en áreas específicas del cuerpo. El CO2 ayuda a mejorar la circulación sanguínea, estimula la producción de colágeno y elastina, y puede reducir la apariencia de celulitis, estrías y arrugas. También se ha utilizado para tratar la alopecia y mejorar la apariencia de las ojeras y las bolsas debajo de los ojos.",
      img:"../../img/imgCorporal/carboxiterapia.webp",
      url:"../ServDetail/serCorporal/Carboxiterapia.html"
    },
    Mela_Laser ={
      title:"Mela Laser",
      info:"El tratamiento Mela Laser es un procedimiento estético que utiliza un láser especializado para tratar manchas oscuras en la piel, como el melasma. El láser emite una luz intensa que se dirige a las células pigmentadas en la piel, rompiendo las manchas oscuras en partículas más pequeñas.",
      img:"../../img/imgCorporal/mela_laser.webp",
      url:"../ServDetail/serCorporal/MelaLaser.html"
    },
    Plasma  ={
      title:"Plasma rico en Plaquetas",
      info:"El tratamiento de plasma rico en plaquetas es un procedimiento estético que utiliza la propia sangre del paciente para estimular la regeneración de la piel. La sangre se centrifuga para separar las plaquetas, que contienen proteínas y factores de crecimiento que ayudan a regenerar y reparar las células de la piel. El plasma se inyecta en las áreas específicas del cuerpo para tratar arrugas, cicatrices, manchas y para mejorar la apariencia general de la piel.",
      img:"../../img/imgCorporal/plasma.jpg",
      url:"../ServDetail/serCorporal/Plasma.html"
    },
    Manchas ={
      title:"Manchas",
      info:"El tratamiento de manchas es un procedimiento estético que puede mejorar la apariencia de las manchas oscuras en la piel. Hay varios tratamientos disponibles, como peelings químicos, láser, crioterapia y terapia fotodinámica, dependiendo de la causa y la gravedad de las manchas. Es importante buscar un profesional capacitado para realizar el tratamiento y seguir adecuadamente las instrucciones de cuidado de la piel después del tratamiento. ",
      img:"../../img/imgCorporal/manchas.png",
      url:"../ServDetail/serCorporal/Manchas.html"
    },
    Fotoenvejacimineto ={
      title:"Fotoenvejacimineto",
      info:"El tratamiento de fotoenvejecimiento es un procedimiento estético que utiliza tecnología láser o de luz para tratar los efectos del envejecimiento en la piel causados por la exposición al sol, como arrugas, manchas, venas faciales y textura desigual de la piel. El láser o la luz se dirigen a las capas más profundas de la piel, estimulando la producción de colágeno y elastina, lo que ayuda a reducir la apariencia de las arrugas y mejorar la textura de la piel.",
      img:"../../img/imgCorporal/fotoenvejecimento.jpg",
      url:"../ServDetail/serCorporal/Foto.html"
    },
    Bioestimulo ={
      title:"Bioestimulación",
      info:"El tratamiento de bioestimulación es un procedimiento estético que utiliza inyecciones de sustancias naturales, como ácido hialurónico o vitaminas, para estimular la producción de colágeno y elastina en la piel. El tratamiento ayuda a mejorar la apariencia de la piel y puede utilizarse para tratar líneas finas, arrugas, cicatrices y otros problemas de la piel. ",
      img:"../../img/imgCorporal/bioestimulo.avif",
      url:"../ServDetail/serCorporal/Bio.html"
    },
    Celulitis ={
      title:"Celulitis",
      info:"El tratamiento de celulitis es un procedimiento estético que puede ayudar a reducir la apariencia de la celulitis en el cuerpo. Hay varios tratamientos disponibles, como masajes, drenaje linfático, radiofrecuencia, cavitación y mesoterapia, dependiendo de la causa y la gravedad de la celulitis. El tratamiento puede ayudar a mejorar la circulación sanguínea y linfática, reducir la grasa acumulada y aumentar la elasticidad de la piel.",
      img:"../../img/imgCorporal/celulitis.png",
      url:"../ServDetail/serCorporal/Celulitis.html"
    },
    Adiposidad_Localizada ={
      title:"Adiposidad Localizada",
      info:"El tratamiento de adiposidad localizada es un procedimiento estético que puede ayudar a reducir la grasa localizada en áreas específicas del cuerpo, como el abdomen, las caderas o los muslos. Hay varios tratamientos disponibles, como la cavitación, la criolipólisis y la lipoláser, que utilizan diferentes tecnologías para destruir las células grasas y mejorar la apariencia de la zona tratada. Es importante buscar un profesional capacitado para realizar el tratamiento.",
      img:"../../img/imgCorporal/adipoLocalizada.jpg",
      url:"../ServDetail/serCorporal/Adiposidad.html"
    }
    
  ]
  
  const ver =()=>{
    Data.forEach((el)=>{
      console.log(el)
    })
  }
  
  ver()
  // Ver de crear un array con obj dentro para poder comletar la card dinaicamente con toda la info 
  
  
  const $frag = document.createDocumentFragment()
  const $servicios = document.querySelector('.servicios')
  
  const Card =()=>{
    console.log($servicios)
    
    Data.forEach((el)=>{
          const $card = document.createElement('div'),
                $cardInfo = document.createElement('div'),
                $img = document.createElement('img');
                
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
                                      <a href="${el.url}" class="info-serv" >Ver mas</a>
                                      `
             $card.appendChild($img)
             $card.appendChild($cardInfo)
             
             $frag.append($card)
        })
        
      $servicios.appendChild($frag)
        
      }
      
      // Eventos 
      
      document.addEventListener('DOMContentLoaded',(e)=>{
        Menu()
        Card()
  })
  
  document.addEventListener('click',(e)=>{
    routeServ(e)
    console.log(e.target.value)
  })