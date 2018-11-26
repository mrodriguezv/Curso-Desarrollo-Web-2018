<?php

// Definición de rutas de la Aplicación Web

$app->get('/', ['App\Controladores\inicioControlador', 'paginaInicio'])->setName('inicio');