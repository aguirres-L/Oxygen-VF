function contacFormulario(){
    const $inputs = document.querySelectorAll('.form-oxygen [required]'), //  hago referncias a todos los input que tengan el dara "required"
        $form = document.querySelector('.form-oxygen');  // hago referencia a el formulario en si 
        
    //console.log($inputs)
    //console.log($inputs[0].pattern)  de esta fomra puedo ver los patter que contien el elemtno 1 = ^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$
 
 // Este forEach se ejecuto a todo los input que tengan el atributo " required " -------------------
    $inputs.forEach(input=>{
        const $span = document.createElement('span'); // por cada input que contenga $inputs creare un spna en donde se colocaron los mensaje 
        $span.id = input.name;  // le doy el valor de id igual que el name de los input de HTML 
        $span.textContent = input.title  // el mensaje de erro se mostrara dinamicamente al utilizar el tilte que se le otorgo al input en HTML 
        $span.classList.add('form-oxygen-error','none')
        //  aca le aplico el style de "erro" y al ponele una -", "coma- puedo añadir mas styles 


        input.insertAdjacentElement('afterend', $span)  // con "insertadjacentelement" coloco cada "$span" debajo del elemtno que genero el forEach , osea que queda debajo de cada elemteno en el que se ejectue el forEach 
                                                        // " insertadjacentelement " recibe 2 paramtro el primero es para la posicion, y el sgundo para el elemto que se quiere insertar 

    });

    // el evvento que genero es para la tecla depues que se preciona                                                 

    document.addEventListener('keyup', e =>{
        if(e.target.matches('.form-oxygen [required]')){ // le indico que le vento se inicia cuando sea un input con el atributo "required"
          //  console.log(e.target.dataset.pattern,e.target.pattern)
           
              // con patter hago referencia al patter de cada inpit, OJO que los texArea no tiene patter, por eso se le da un data-atribute  
                const patter = e.target.pattern || e.target.dataset.pattern// por eso aca uso un || corta sircuito para que valide tanto para input como para "texArea"
               // para poder obtener los pattern y el dataset.pattern es necesario sacarlos desde el mismo evento osae des e.target 
                // --- si solo paso e.targe.pattern a la hora de validar teAerea me dara com null , de esta forma "variable-patter" puede validar tanto input o texArea 
                //  -- me devolvera null ya que los texArea no contiene pattron .Por eso es necesario crear un data-atribute 
                
               // console.log(e.target.value)
                //console.log(patter)
                
                if(patter && e.target.value !==""){ //  aca indico que si el pattern es true y que e.target.value sea distinto a "nada" osea un strin basio  recien se puede inicar el "if "
                 // console.log('Tiene patron ')  
                  let regex = new RegExp(patter)
                  
                  // aca le digo que si la expr que esta guardad en regex no valida el valor del evento osea. el valor que contiene el input 
                  // osea que si lo que se coloca en el input no es compatoible con la expr regular que se genero en regex => patter , se le debe aggregar la calss is.active 
                  
                  //e.target.name hace refernecia al id que se consedio al span en el ForEach anteriormente 
                  return !regex.exec(e.target.value)?document.getElementById(e.target.name).classList.add('is-active')
                  // cuando la expreRegular no se cumple se ejecuta ? , osea se añade la el style para mostrar el error

                  :document.getElementById(e.target.name).classList.remove('is-active')
                    //  pero si la expreRegula se cumple . se ejecuta : y se le remueve el style de activeError 
                }

                    // En este if, valida a los elemto que no tiene patter. en este caso el input "asutno" no tiene pattren
                    //  indico que si e.target.value es igual que un string vacio se agrega la cassl "is-active"
                    //      pero si el valor de e.target.value tiene un string se removera la class "is-active" 
                if(!patter  ){
                return e.target.value === "" ?document.getElementById(e.target.name).classList.add('is-active')
                                              :document.getElementById(e.target.name).classList.remove('is-active')                     
                }
        }
    })
    
    let confir = "The form was submitted successfully."

    document.addEventListener('submit',e=>{
       e.preventDefault()
       // alert('hshas')
        const $img = document.querySelector('.form-oxygen-espera'),
        $mensaje = document.querySelector('.form-oxygen-concat');
        $img.classList.remove('none');
  
        //      Importante Si utilizo fetch , necesario colocar ajax enla url 
        fetch("https://formsubmit.co/ajax/f.v.oxygen@gmail.com",{ // le paso la url y metod y body que necesita para trabjaar 
            method:"POST",
            body: new FormData(e.target)
        }).then(res => res.ok? res.json(): Promise.reject(res) )// con Promise.reject le indico que si no es "ok" me mande al catch
        .then(json =>{ 
            console.log(json) // lo que me devuelve el json 
            $img.classList.add('none');
            $mensaje.classList.remove('none');
            
            if(!json.message)
            $mensaje.innerHTML = `<p>Mensaje Enviado</p>` // mando el mensaje que me devuelve el json 
            $form.reset()

        }).catch(err=>{console.log(err), console.log(e.target)})
        .finally(()=>{
            setTimeout(()=>{
                $mensaje.classList.add('none')
            },2000)
        })
  
  
  
        /*      $img.classList.remove('none');
       setTimeout(() => {
            $mensaje.classList.remove('none');
            setTimeout(() => {
                $mensaje.classList.add('none')
             
            }, 3000);    
        }, 3000);
*/
    })



};


//----------------------- 




document.addEventListener('DOMContentLoaded',e=>{
    contacFormulario();
    
})