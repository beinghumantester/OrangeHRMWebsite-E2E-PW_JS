Feature: Login with valid credential
    Scenario Outline: Checking the login functionality with valid credential 
    Given the login page is opened on the browser 
    When user submit valid "<username>" and "<password>"
    Then they should be redirected to dashboard


    Examples:
    |username       | password    |
    |Admin          | admin123    |
    
    Scenario Outline: Checking the login functionality with invalid credential 
    Given the login page is opened on the browser 
    When user submit invalid "<username>" and "<password>"
    Then they should see error message


    Examples:
    |username       | password    |
    |Admin          | admin12345  |
    |Admin123       | admin123    |
    |Admin45        | admin12345  |

    