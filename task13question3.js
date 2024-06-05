import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class WikipediaSearch {
    public static void main(String[] args) {
        // Set the path to ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver.exe");

        // Create a Chrome driver instance
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized"); // Maximize browser window
        WebDriver driver = new ChromeDriver(options);

        // Navigate to Wikipedia
        driver.get("https://en.wikipedia.org");

        // Find the search input field and enter the query
        WebElement searchInput = driver.findElement(By.id("searchInput"));
        searchInput.sendKeys("Artificial Intelligence");

        // Click on the search button
        WebElement searchButton = driver.findElement(By.xpath("//button[@type='submit']"));
        searchButton.click();

        // Wait for search results to load
        try {
            Thread.sleep(2000); // Wait for 2 seconds (you may need to adjust this)
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Click on the "History" section link
        WebElement historyLink = driver.findElement(By.linkText("History"));
        historyLink.click();

        // Get and print the title of the history section
        WebElement historySectionTitle = driver.findElement(By.xpath("//span[@id='History']"));
        System.out.println("History Section Title: " + historySectionTitle.getText());

        // Close the browser
        driver.quit();
    }
}
