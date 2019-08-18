@101
Feature: User is able to do a Search on Google 

@positive 
Scenario: Positive Test Case 
	Given User open browser to google homepage 
	When User enter a search word 
	And User click the search button 
	Then User click search link 
	And User on a new page 
	And User close browser 
	
	
@negative 
Scenario: Negative Test Case 
	Given User open browser to google homepage 
	When User enter a search word 
	And User click the search button 
	Then User click search link
	And User on a new page
	Then User close browser