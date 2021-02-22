# Apply for teacher training (prototype)

This prototype is based on the [GOV.UK prototype kit](https://github.com/alphagov/govuk-prototype-kit)

## Requirements

* Node.js - version 10.x.x

## Installation

* Clone this repository to a folder on your computer
* Open Terminal
* In Terminal, change the path to the repository
* Type `npm install` to install the dependencies

## Working locally

* In Terminal, change the path to the repository
* Type `npm start` to install the dependencies and start the application

If you want to skip installing dependencies each time, you can instead type `npm run s`.

If you want to also test the email notifications, you can get an API key for GOV.UK Notify and add it to a `.env` file after `NOTIFYAPIKEY=`.

## Available user journeys

### Creating an account

Start creating an account by following the journey the starts when you click ‘Start now’ on the start page (a mock up of the page seen on GOV.UK).

When you are asked to ‘Check your email’, instead click on the text which includes the email address you entered. This is a hidden link which will take you to the page that is shown once you have authenticated.

### Starting a new application

You can skip the account creation process by visiting <https://apply-beta-prototype.herokuapp.com/application/start>.

### Viewing an unsubmitted application

You can skip completing an application by visiting <https://apply-beta-prototype.herokuapp.com/application/12345>.

### Viewing an unsubmitted apply again application

You can skip creating an application for applying again by visiting <https://apply-beta-prototype.herokuapp.com/application/12346>.

### Viewing different application states

You can view the different application states by visiting <https://apply-beta-prototype.herokuapp.com/admin/states>

### Giving a reference

You can follow the referee journey by visiting <https://apply-beta-prototype.herokuapp.com/reference>.
