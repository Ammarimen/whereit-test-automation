package com.e2eTests.whereitTest.authentification.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.whereitTest.authentification.pages.AuthentificationPage;
import com.e2eTests.whereitTest.utils.CommonMethods;
import com.e2eTests.whereitTest.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinitions {
	
	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthentificationStepDefinitions() {
		driver = Setup.driver;
		PageFactory.initElements(driver, AuthentificationPage.class);
	}
	
	@Given("^Je me connecte à l'application Whereit-test$")
	public void jeMeConnecteÀLApplicationWhereitTest() throws Throwable {
		commonMethods.openApplicationWithConfigFile("whereit-sante");	
	}

	@When("^Je saisis le username \"([^\"]*)\"$")
	public void jeSaisieLeUsername(String name) throws Throwable {
		authentificationPage.fillUserName(name);
	}

	@When("^Je saisis le password \"([^\"]*)\"$")
	public void jeSaisieLePassword(String password) throws Throwable {
		authentificationPage.fillpasseword(password);
	}

	@When("^je clique sur le bouton Valider$")
	public void jeCliqueSurLeBoutonValider() throws Throwable {
		authentificationPage.clickValiderButton();
		Thread.sleep(3000);
	}

	@Then("^Redirection vers le compte admin$")
	public void redirectionVersLeCompteAdmin() throws Throwable {
	    
	}
	
}
