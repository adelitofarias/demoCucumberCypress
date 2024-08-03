Feature: Geração de massas de dados para administradores

  @regression @massas @administrador @back @front
  Scenario: Gerar massas de dados para administradores
    Given que preciso gerar "5" perfis de administradores
    When eu gerar os perfis de administradores