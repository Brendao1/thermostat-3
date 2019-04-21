# Thermostat
TDD Thermostat web app

In this app we produce a web-based Thermostat. 

- Business logic in JavaScript. 
- We TDD'd the functionality of the app in ThermostatSpec.js
- We use jQuery to add interactivity the application.
- We use ```$(document).ready();``` to make sure that functions are called after the page is loaded.
- We use the Open Weather API to retrieve information about the current weather in London, and in a city of users choice (from list).

## Learning objectives for this project:

**JavaScript**

- I can read and write JavaScript syntax
- I understand the rules that govern the behaviour of the ```this``` keyword
- I can follow the flow of an Ajax request and response
- I can follow the flow of control through code that uses callbacks

**Transferring my existing skills**

- Can you encapsulate behaviour in JavaScript?
- Can you get visibility effectively in JavaScript?
- Can you TDD in JavaScript?
- Can you follow the flow of control over the whole web app cycle? e.g. the interface of a thermostat is displayed in HTML/CSS, the "increase temperature" button is clicked, a JavaScript click event fires, JavaScript code runs to handle the event, an Ajax request is made, a Sinatra controller POST action handler is run, a Thermostat Ruby model is updated, the new temperature is saved to a Postgres database, the new temperature is returned as JSON by the Ruby controller, JavaScript code runs to update the temperature in the web page.

## How to load the app

```
git clone git@github.com:Brendao1/thermostat-3.git

open index.html
```

## Next steps

- Allow user to type in any city in a form field
- Add styling CSS
- Add image icons next to the reported weather (TBC)