<?php

class Usuario
{
  public $nome;
  public $nomeUsuario;
  public $senha;

  function set_nome($nome){
    $this->nome = $nome;
  }

  function get_nome(){
    return $this->nome;
  }

  
  function set_nomeUsuario($nomeUsuario){
    $this->nomeUsuario = $nomeUsuario;
  }

  function get_nome(){
    return $this->nomeUsuario;
  }

  
  function set_nome($senha){
    $this->senha = $senha;
  }

  function get_nome(){
    return $this->senha;
  }
}
