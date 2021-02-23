package com.e2eTests.whereitTest.authentification.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class MultiUsersAuthentificationPage {
	
	public WebDriver driver;
	
	/*Locators*/
	final static String ERROR_MSG = "//i[contains(text(),'Identifiant ou mot de passe incorrect')]";
	
	/*FindBy*/
	@FindBy(how = How.XPATH, using = ERROR_MSG)
	public static WebElement errorMessage;
	
	/*Methods*/
	

}
