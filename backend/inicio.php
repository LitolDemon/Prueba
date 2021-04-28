<?php
header('Content-type:application/json');
header('Access-Control-Allow-Origin:*');
    $clientes=array(
        array(
            "nombres"=>"roberto",
            "apellidos"=>"concha",
            "genero"=>"otro",
            "pais"=>"chile",
            "ciudad"=>"los andes"
        ),
        array(
            "nombres"=>"jorge",
            "apellidos"=>"vershae",
            "genero"=>"masculino",
            "pais"=>"chile",
            "ciudad"=>"rancagua"
        ),
        array(
            "nombres"=>"alicia",
            "apellidos"=>"alicia",
            "genero"=>"femenino",
            "pais"=>"chile",
            "ciudad"=>"calama"
        )
    );
    $json = json_encode($clientes);


?>