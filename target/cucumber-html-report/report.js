$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - Whereit",
  "description": "ETQ utilisateur je souhaite m\u0027authentifier sur l application Whereit",
  "id": "authentification---whereit",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 5795863300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - Whereit",
  "description": "",
  "id": "authentification---whereit;authentification---whereit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@valid-cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte à l\u0027application Whereit-test",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisis le username \"Superviseur\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisis le password \"WeFind1204%\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je clique sur le bouton Valider",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeMeConnecteÀLApplicationWhereitTest()"
});
formatter.result({
  "duration": 23862073600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Superviseur",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 131443800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WeFind1204%\u003d",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLePassword(String)"
});
formatter.result({
  "duration": 127133200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeCliqueSurLeBoutonValider()"
});
formatter.result({
  "duration": 3104511700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinitions.redirectionVersLeCompteAdmin()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.after({
  "duration": 679213800,
  "status": "passed"
});
formatter.before({
  "duration": 5515964800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Authentification - Whereit",
  "description": "",
  "id": "authentification---whereit;authentification---whereit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@invalid-username"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Je me connecte à l\u0027application Whereit-test",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Je saisis le username \"IVALIDUSERNAME\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Je saisis le password \"WeFind1204%\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "je clique sur le bouton Valider",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je verifie le message d\u0027erreur \"Identifiant ou mot de passe incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeMeConnecteÀLApplicationWhereitTest()"
});
formatter.result({
  "duration": 15748161600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IVALIDUSERNAME",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 151385200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WeFind1204%\u003d",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLePassword(String)"
});
formatter.result({
  "duration": 123598700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeCliqueSurLeBoutonValider()"
});
formatter.result({
  "duration": 3100124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Identifiant ou mot de passe incorrect",
      "offset": 32
    }
  ],
  "location": "MultiUsersAuthentificationStepDefinition.je_verifie_le_message_d_erreur(String)"
});
formatter.result({
  "duration": 46906100,
  "status": "passed"
});
formatter.after({
  "duration": 681494100,
  "status": "passed"
});
formatter.before({
  "duration": 5282344700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Authentification - Whereit",
  "description": "",
  "id": "authentification---whereit;authentification---whereit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@invalid-password"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Je me connecte à l\u0027application Whereit-test",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Je saisis le username \"Superviseur\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Je saisis le password \"INVALIDPASSWORD\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "je clique sur le bouton Valider",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Je verifie le message d\u0027erreur \"Identifiant ou mot de passe incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeMeConnecteÀLApplicationWhereitTest()"
});
formatter.result({
  "duration": 17930107700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Superviseur",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 128833200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INVALIDPASSWORD",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLePassword(String)"
});
formatter.result({
  "duration": 125310100,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeCliqueSurLeBoutonValider()"
});
formatter.result({
  "duration": 3074570800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Identifiant ou mot de passe incorrect",
      "offset": 32
    }
  ],
  "location": "MultiUsersAuthentificationStepDefinition.je_verifie_le_message_d_erreur(String)"
});
formatter.result({
  "duration": 47985800,
  "status": "passed"
});
formatter.after({
  "duration": 709750400,
  "status": "passed"
});
formatter.before({
  "duration": 5673068000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Authentification - Whereit",
  "description": "",
  "id": "authentification---whereit;authentification---whereit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@ivalid-pw-and-invalid-username"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Je me connecte à l\u0027application Whereit-test",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Je saisis le username \"INVALIDUSERNAME\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Je saisis le password \",INVALIDPASSWORD\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je clique sur le bouton Valider",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Je verifie le message d\u0027erreur \"Identifiant ou mot de passe incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeMeConnecteÀLApplicationWhereitTest()"
});
formatter.result({
  "duration": 21863726700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INVALIDUSERNAME",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 185778700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ",INVALIDPASSWORD",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinitions.jeSaisieLePassword(String)"
});
formatter.result({
  "duration": 174827300,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinitions.jeCliqueSurLeBoutonValider()"
});
formatter.result({
  "duration": 3115148900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Identifiant ou mot de passe incorrect",
      "offset": 32
    }
  ],
  "location": "MultiUsersAuthentificationStepDefinition.je_verifie_le_message_d_erreur(String)"
});
formatter.result({
  "duration": 58054000,
  "status": "passed"
});
formatter.after({
  "duration": 715699100,
  "status": "passed"
});
});