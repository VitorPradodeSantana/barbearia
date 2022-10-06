<?php

class Login
{
  public $nomeUsuario;
  public $senha;

  function set_nomeUsuario($nomeUsuario)
  {
    $this->nomeUsuario = $nomeUsuario;
  }

  function get_nomeUsuario()
  {
    return $this->nomeUsuario;
  }

  function set_senha($senha)
  {
    $this->senha = $senha;
  }

  function get_senha()
  {
    return $this->senha;
  }
}
