# TS-Auth-React
Authentication in React with Typescript
# Auth0 with google 
# For more information on what we are using
https://developer.auth0.com/resources/guides/spa/react/basic-authentication
💡 You can find more information about Auth0 here.

Resource: https://auth0.com/docs

Setting up Auth0 
Let’s set up our Auth0 environment so that we can add some easy authentication for our React Application:

You will need to create an account and a project on the Auth0 website: https://auth0.com/ 

Use your GitHub account to create an Auth0 account
Select you will be the one coding
Select you don't need to chat with anyone or do the advanced settings
Once you're logged into Auth0 

Click on the blue create application button
Give it a name of ReactAuth0
Choose single page web applications
Make sure under the Connections tab thatgoogle-oauth2is checked
Go to the settings tab
Look for "Allowed Callback URLs" 
Enter http://localhost:5173/callback inside 
Save the application
Callback URLs are endpoints where Auth0 redirects users after they log in.  We will be making this later.
CHECK: Make sure the port number and protocol (http/https) match up with your React server 
Stay on the settings tab
Look for "Allowed Logout URLs" 
Enter http://localhost:5173 inside 
Save the application
Logout URLs are endpoints where Auth0 redirects users after they log out.  We will be sending the user back to the home page
CHECK: Make sure the port number and protocol (http/https) match up with your React server 
Keep this page open, we will be referring to it later