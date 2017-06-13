

<?php
	function __autoload($class_name){
		require_once 'classes/' . $class_name . '.php'; //Concatenando
	}
	
	
	$controle = $_GET['controlador'];
	$acao = $_GET['acao'];
	
	switch($controle){
		case 'usuarios':
			$usuarios = new Usuarios();
			echo json_encode($usuarios->findAll());
			break;
	}