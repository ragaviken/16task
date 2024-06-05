import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SeleniumExample {
    public static void main(String[] args) {
        // Set the path to the GeckoDriver (Firefox Driver)
        System.setProperty("webdriver.gecko.driver", "path/to/geckodriver");

        // Create a new instance of the Firefox driver
        WebDriver driver = new FirefoxDriver();

        // Maximize the browser window
        driver.manage().window().maximize();

        // Navigate to Google
        driver.get("http://google.com");

        // Print the URL of the current page
        System.out.println("Current URL: " + driver.getCurrentUrl());

        // Reload the page
        driver.navigate().refresh();

        // Close the browser
        driver.quit();
    }
}
