# WorkDay-Planner
## Description:
   WorkDay-Planner is a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Contents:
   This app is built using HTML, CSS with bootstrap framework, day.js to manipulate date values from APIs,       script.js uses day.js to display current date and time in the browser, it gets current hour value from dayjs compares with the application hour and sets class attribute past, present and future ,these attributes are styled in style.css. It also has a function when users add a event  and saves it ,it helps to store the event in local storage and delete all the events from the localstorage when the user clicks clear event button in the browser.

## Demo :

   ![demo1](./assets/images/Demo-1.gif)   

   * The above demo shows current date and time displayed in the browser, below that a clear-event button and all the hour elements highlighted with colour codes based on past hour, current hour or future hour and each hour element with a save icon button.
   
   * When the user add a event in the hour element and reloads the page without saving the event it gets disappeard and nothing gets displayed in the web page after refreshing .

   * When the user add a event to a hour element and saves it by clicking the button the event gets stored in the local storage and when the user reloads the webpage it keeps displaying.

   ![demo2](./assets/images/Demo-2.gif)
    
    * The above demo describes when the user runs the application, the application is displayed with all events that are stored previously in local storage.

    * When the user clicks the clear-event button all the events are cleared from the localstorage and the application is displayed with no events added in the hour element.


   




   