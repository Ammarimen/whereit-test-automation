@connexion
Feature: Authentification - Whereit
  ETQ utilisateur je souhaite m'authentifier sur l application Whereit

  @valid-cnx
  Scenario: Authentification - Whereit
    Given Je me connecte à l'application Whereit-test
    When Je saisis le username "Superviseur"
    And Je saisis le password "WeFind1204%="
    And je clique sur le bouton Valider
    Then Redirection vers le compte admin

  @invalid-username
  Scenario: Authentification - Whereit
    Given Je me connecte à l'application Whereit-test
    When Je saisis le username "IVALIDUSERNAME"
    And Je saisis le password "WeFind1204%="
    And je clique sur le bouton Valider
    Then Je verifie le message d'erreur "Identifiant ou mot de passe incorrect"

  @invalid-password
  Scenario: Authentification - Whereit
    Given Je me connecte à l'application Whereit-test
    When Je saisis le username "Superviseur"
    And Je saisis le password "INVALIDPASSWORD"
    And je clique sur le bouton Valider
    Then Je verifie le message d'erreur "Identifiant ou mot de passe incorrect"

  @ivalid-pw-and-invalid-username
  Scenario: Authentification - Whereit
    Given Je me connecte à l'application Whereit-test
    When Je saisis le username "INVALIDUSERNAME"
    And Je saisis le password ",INVALIDPASSWORD"
    And je clique sur le bouton Valider
    Then Je verifie le message d'erreur "Identifiant ou mot de passe incorrect"
