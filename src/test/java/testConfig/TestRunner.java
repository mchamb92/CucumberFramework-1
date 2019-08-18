package testConfig;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= "UserStories", 
	    glue= {"stepDefinition"},
	    tags = {"@101"},
	    plugin = {"pretty", "html:target"},
		dryRun = false,
		monochrome = true,
		strict = true
				)

public class TestRunner {

}
