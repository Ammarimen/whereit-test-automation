package com.e2eTests.whereitTest.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CommonMethods {

	public static WebDriver driver;
	public static Properties prop;
	public CommonMethods() {
		driver = Setup.driver;
	}

	public void buttonScrollBottom() {
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,400)", "");
	}

	public void openApplicationWithConfigFile(String url) throws IOException {
		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/resources/configs/config.properties");
		prop.load(fis);
		driver.get(prop.getProperty(url));
	}
	
	public void clickElementWithJavascriptExecutor(WebElement web_element) {
		WebElement element = web_element;
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", element);
	}

}
