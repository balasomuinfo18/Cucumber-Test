Feature: Login Action

Scenario: Successful Login with Valid Credentials

	Given User is on Login Page
	Given User enters UserName 
	Given User enters Password 
	When user click on the login button
	Then Message displayed Login Successfully

Scenario:  Login with invalid username and valid password

	Given User is on Login Page
	Given User enters invalid username 
	Given User enters valid password 
	When user click on the login button
    Then Message displayed Invalid UserName or Password

Scenario:  Login with valid username and invalid password
	Given User is on Login Page
	Given User enters valid username 
	Given User enters invalid password
	When user click on the login button
    Then Message displayed Invalid UserName or Password
	
Scenario:  Login with invalid username and invalid password	
	
	Given User is on Login Page
	Given User enters invalid username 
	Given User enters invalid password
	When user click on the login button
    Then Message displayed Invalid UserName or Password

Scenario: signin with Facebook	
    Given User is on Login Page
    Given User signup with Facebook
	When User Navigate to Facebook signin Page
	And User enters UserName and Password
	Then Message displayed Login Successfully

Scenario: signin with Google	
    Given User is on Login Page
    Given User signup with Google
	When User Navigate to Google signin Page
	And User enters UserName and Password
	Then Message displayed Login Successfully

Scenario:Stay signin Functionality
  Given User is on Login Page
  Given User click the Stay Signed In checkbox

Scenario:Stay signin Functionality
Given User is on Login Page

Scenario:Verify Broken links on the home page
Given User is on Login Page

Scenario:Forgot Password
Given User is on Login Page

Scenario:Terms & Conditions
Given User is on Login Page
