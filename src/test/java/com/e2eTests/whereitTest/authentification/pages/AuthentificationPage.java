package com.e2eTests.whereitTest.authentification.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthentificationPage {
	
	public WebDriver driver;
	
	/*Locators*/
	final static String USERNAME_XPATH = "//input[contains(@autocomplete,'username')]";
	final static String PASSEWORD_XPATH = "//input[contains(@formcontrolname,'password')]";
	final static String BUTTON_VALIDER_XPATH = "//button[contains(text(), 'Valider')]";
	final static String PARAMETERS_ID = "Administration_group";
	/*FindBy*/
	@FindBy(how = How.XPATH, using = USERNAME_XPATH)
	public static WebElement userNameXpath;
	@FindBy(how = How.XPATH, using = PASSEWORD_XPATH)
	public static WebElement passewordXpath;
	@FindBy(how = How.XPATH, using = BUTTON_VALIDER_XPATH)
	public static WebElement validerButtonXpath;
	@FindBy(how = How.ID, using = PARAMETERS_ID)
	public static WebElement parametersBtn;
	
	/*Methods*/
	public void fillUserName(String name) {
		userNameXpath.sendKeys(name);
	}
	
	public void fillpasseword(String password) {
		passewordXpath.sendKeys(password);
	}
	
	public void clickValiderButton() {
		validerButtonXpath.click();
	}
	
}
