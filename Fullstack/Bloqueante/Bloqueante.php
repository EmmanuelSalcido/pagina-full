<?php
printf("Abriendo Archivo");
$archivo_url= fopen("Archivo.txt","r");

$texto="";

while($fragmento = fgets($archivo_url)){
    $texto .= $fragmento;
}

printf($texto);
printf("<br>Haciendo Otra Cosa");

?>