


<?php  // inicio code en php        ENVIO DE FORMULARIO 

if(isset($_POST)) {     // La variable "post" se crear cuadno enviamos datos , en este caso nostro enviamos datos mediante fetch

    error_reporting(0); // El erro_repoting sirve para que no me mande error al frond ya que solo ncesito que me mande los errores que yo programe
                       // al colocar "0" le digo que no me envie nung erro  

    $name = $_POST["name"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $comentario = $_POST["comentario"];

    $domain = $_SERVER["HTTP_HOST"]; // $_SERVER "HTTP_HOST" obtiene el dominio desde donde se esta ejecutando esta pag



// $to hace referncia hacia quien va a ser el destinatario del correo 
    $to = "f.v.oxygen@gmail.com";
// lo que mostrara como asunto 
    $subject = "Contacto desde el forumlario del sitio $domain: $asunto";
// mensaje 
$message = "
    <p>
    Datos enviados desde el fomrulario <b> $domain : $asunto </b>
    </p>
    <li>Nombre : <b> $name</b> </li>
    <li>Email : <b> $email </b> </li>
    <li> Asunto : $subject </li>
    <li> Comentario : $comentario </li>
    ";

  // defino el header para poder espesificar en que formato quiero que me lo envien   
   $header ="MIME-Version: 1.0\r\n "."Content-Type: text/html; charset=utf-8\r\n"."From: Envio automatico no responder <no-reply@$domain>";  // Vemos el tema de las MIME 
    // la ultima option de los header me permite que mis email no caigan en span


    // creo una function para ejecutar un email en php, recibe 4 paramtros, $to - a quien va || $subject  el asunto || $message El mensaje || $header las cabezeras  
    $send_mail = mail($to,$message,$subject,$header);    // mail me devolvera 2 valores true si el correo se envia y false si el correo no se nevio 

    // esto le mando a la peticion de fetcj em js 

    // si mail contiene cada uno de sus atributos, valida a true, de lo contrario es false 
    if($send_mail){
        $res= [
            "err" => false,
            "message" => "Tus datos han sido enviados exitosamentes"
        ];
    }else{
        $res= [
            "err" => true,
            "message" => "Erros al enviar tus datos intetna enviar nuevamente"
        ];
};

    header("Content-Type: application/json"); // espesifico como me lo deve de enviar 
    echo json_encode($res); // envio la respueta pero codificada a formato json 
    exit;

};