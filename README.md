# Event Registration Web App

This is a demo sample that shows how to build  Event Registration Web App using Node, express, Cosmos DB, Functions and SendGrid.


## Overview
This demo sample has the following functionality

- Has basic UI to capture few fields such as email, name etc
- Integrates with Azure Active Directory B2C for authentication using Social IDPs
- Stores application data in Cosmos DB using Mongo DB API
- Has backend Azure Function which listens for Cosmos DB change feed and send emails to registered email submitted      using the UI
- SendGrid is used the SMTP relay to send email to the email id

## Prerequisites
- Azure Active Directory B2C created and configured with social logins. 
- Sendgrid account
- Cosmos DB database with Mongo API provisioned
- Azure Function App created and integrated with Cosmos DB as input trigger

## Quick Start



Updated Azure Active Directory B2C tenant ID and application in config.*.js

Update Sendemail API key in run.csx and upload to Function App

Getting started with the sample is easy. It is configured to run out of the box with minimal setup.

    #git clone
    cd WebApp
    #start application
    node app.js


### You're done!

You will have a server successfully running on `http://localhost:3000` or `https://localhost:3443/`



### Acknowledgements

We would like to acknowledge the folks who own/contribute to the following projects for their support of Azure Active Directory and their libraries that were used to build this sample. In places where we forked these libraries to add additional functionality, we ensured that the chain of forking remains intact so you can navigate back to the original package. Working with such great partners in the open source community clearly illustrates what open collaboration can accomplish. Thank you!


## About The Code

Code hosted on GitHub under MIT license
