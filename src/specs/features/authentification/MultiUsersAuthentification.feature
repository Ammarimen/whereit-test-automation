@multi-user-authentification
Feature: Authentification Multiple users - Whereit
  ETQ utilisateur je souhaite m'authentifier sur l'application Whereit avec plusieurs profils

  Background: 
    Given Je me connecte à l'application Whereit-test

  @outline-cnx
  Scenario Outline: outline scenario
    When je saisis l'identifiant "<username>"
    And je saisis le mot de passe "<password>"
    And je clique sur le bouton Valider

    Examples: 
      | username    | password     |
      | Superviseur | WeFind1204%= |
      | imen        | 3fq4w        |
      | yosra       | 1xqxb        |
