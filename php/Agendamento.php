<?php

class Agendamento
{
  public $data;
  public $hora;

  function set_data($data)
  {
    $this->data = $data;
  }

  function get_data()
  {
    return $this->data;
  }

  function set_hora($hora)
  {
    $this->hora = $hora;
  }

  function get_hora()
  {
    return $this->hora;
  }
}
