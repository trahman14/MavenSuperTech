package RunnerPack;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

	@CucumberOptions (
			features = "src/test/resources/Features",
			glue= "stepPack",
			monochrome = true,
			tags= {"@validTransfer, @declinedTransfer"},
			plugin = {"pretty", "html:testReport"} 
			
			)
	
public class TestRunner extends AbstractTestNGCucumberTests {
		
	}

