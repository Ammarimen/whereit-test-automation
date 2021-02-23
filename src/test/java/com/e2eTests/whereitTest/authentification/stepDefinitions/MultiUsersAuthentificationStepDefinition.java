package com.e2eTests.whereitTest.authentification.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.whereitTest.authentification.pages.AuthentificationPage;
import com.e2eTests.whereitTest.authentification.pages.MultiUsersAuthentificationPage;
import com.e2eTests.whereitTest.utils.CommonMethods;
import com.e2eTests.whereitTest.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MultiUsersAuthentificationStepDefinition {

	public WebDriver driver;
	private AuthentificationPage authMultiUserOutlinePage = new AuthentificationPage();
	private CommonMethods commonMethods = new CommonMethods();
	public MultiUsersAuthentificationStepDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, MultiUsersAuthentificationPage.class);
	}

	@When("^je saisis l'identifiant \"([^\"]*)\"$")
	public void je_saisie_l_identifiant(String username) throws Throwable {
		authMultiUserOutlinePage.fillUserName(username);
	}

	@When("^je saisis le mot de passe \"([^\"]*)\"$")
	public void je_saisie_le_mot_de_passe(String password) throws Throwable {
		authMultiUserOutlinePage.fillpasseword(password);
		
	}
	
	@Then("^Je verifie le message d'erreur \"([^\"]*)\"$")
	public void je_verifie_le_message_d_erreur(String msg) throws Throwable {
		String messageDerreur = MultiUsersAuthentificationPage.errorMessage.getText();
		Assert.assertTrue(messageDerreur.contains(msg));
	   
	}

}
