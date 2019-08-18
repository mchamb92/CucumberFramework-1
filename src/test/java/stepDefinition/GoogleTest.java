package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;

public class GoogleTest {

	static WebDriver driver;

	@Given("^User open browser to google homepage$")
	public static void openBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"/Users/Msalim92/eclipse-workspace/cucumber-sel/drivers/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://www.google.com");
	}

	@When("^User enter a search word$")
	public static void entersSearchWord() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.name("q")).sendKeys("apple");

	}

	@And("^User click the search button$")
	public static void clickSearchButton() {

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[1][@class= 'gNO89b']")).click();

	}

	@Then("^User click search link$")
	public static void clickSearchLink() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.partialLinkText("Apple")).click();
	}

	@And("^User on a new page$")
	public static void newPageCheck() {
		driver.manage().timeouts().pageLoadTimeout(45, TimeUnit.SECONDS);
		Assert.assertTrue(!driver.getTitle().contains("Google"));
	}

	@And("^User opens browser to google homepage$")
	public static void notOnANewPage() {
		Assert.assertTrue(driver.getTitle().contains("Google"));
	}
	@Then("^User close browser$")
	public static void closeBrowser() {
		driver.close();
	}
}