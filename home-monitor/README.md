<img width="600" alt="IoT" src="https://user-images.githubusercontent.com/13503539/135908415-66835c59-b35f-40cb-8d97-21950ed5ca05.png">

## Introduction
The objective of this project were to make a IoT system that measures indoor temperature and humidity and controls home lighting.
Current temperature and humidity is displayed in the web application. The lights can also be turned on or off using the app.

## Objectives
The idea for the project was based on the consideration of is it possible to make a web app with which you can control Sonoff LED bulbs connected to wifi. The same app should also show the home temperature and humidity so that you get a good picture of the situation at the home from the one application.
One object was also to learn how to transfer information between different hardware and software so that the end result is software in which the information obtained from the IoT devices is presented as user-friendly a manner as possible. 

## Methods
Temperature and humidity measuring is technically implemented with an Arduino microcontroller and connected DHT11 sensor. The Arduino is connected to a Raspberry Pi, which sends the data collected from the sensors to the MongoDB cloud database.
Self-developed Node.js Express backend were created and the backend has API from which the application can retrieve information from the database. The backend also has an API for controlling lights.
Web app were created with React to view information. The app is hosted in the Heroku and can be accessed with any modern web browser. 


## Results
The system worked as planned.
The app displays temperature and humidity information virtually real time. The lights can be turned on and off successfully from the app.
Since the application is accessible from the public internet (https://kotona.herokuapp.com), security had to be taken into account when making the application. You must log in to the application with a username and password before any data is displayed.

## Conclusions
Several different techniques were used in the system and the project was great learning experience.
No major problems of any kind occurred during the project.
The application can be easily expanded in the future for example adding wifi connected power switches and other IoT devices to the app. More sensors could also be added.
There are plenty of similar commercial products available like this system, but I think it is cheaper to build your own system and you can make the system just right for you.

## References
Project code repository
Github: https://github.com/joonaskinnunen/IoT-Project

eWeLink API for controlling lights
Github: https://github.com/skydiver/ewelink-api

DHT11 temperature-humidity sensor datasheet: https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf 

ReactJS documentation: https://reactjs.org/docs/getting-started.html

MongoDB documentation:
https://docs.mongodb.com/
