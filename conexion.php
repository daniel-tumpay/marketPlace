<?php
function conectar(){
    $user="epiz_29671182";
    $pass="";
    $server="127.0.0.1";
    $db="BaseAdmi";
    $conn=new mysqli($server,$user,$pass,$db);
    if($conn->connect_error){
        die("Error de conexion: " . mysqli_connect_error());
    }else{
        return $conn;
    }
}
?>