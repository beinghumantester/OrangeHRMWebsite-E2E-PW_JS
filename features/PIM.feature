Feature: Add , Edit & Delete Employee on PIM
   Scenario: Navigate to PIM Dashboard 
   Given User successfully login and landed on dashboard
   When User search PIM in search bar and click on PIM in suggestions
   Then User landed on the PIM Dashboard 


   Scenario: New user can be successfully added
   Given User click on the Add button on the PIM Dashboard 
   When User enter all the valid details in all the input fields and submit 
   Then New User is successfully created


   Scenario: User can be successfully searched with employee name and employee id
   Given New User is successfully created 
   When User enter employee name and employee id of new users and submit 
   Then Recently created user is visible in the search result 

   Scenario: User detail can be successfully edited and saved
   Given Recently added user detail page is visible 
   When User changes existing details and submit new details 
   Then New detail is successfully changed. 


   Scenario: User can be successfully deleted
   Given Employee to be deleted is visible in the search result 
   When User click on the delete icon and confirm 
   Then The particular user is deleted