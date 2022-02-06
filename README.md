# Inch-by-inch-FrontEnd
This Repo is the Front-end of my Capstone project. For this project, I will be coding the Front and Back-End to an application of my choice. I will be using Angular and bootstrap to build my FrontEnd and Java and SpringBoot to build my RestApi. This is the first application I have ever built! period! So this was definitely a learning experience, as was it exciting. Coming from working in a hospital this time last year, to developing my own application this year is something to be proud of (Even if it's not running as expected). Hope you enjoy reading about this process as much as I am enjoying my learning process! [Repo for the BackEnd](https://github.com/Cecilierenee/Inch-by-inch-BE)

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> </p>

## Purpose
After doing the “Big Chop”, it didn’t take me long to realize; that it was going to be a long, strategic and possibly expensive process to find the products that work with my hair. To simplify this process, I’m creating an app to keep track of the various products and hair routines I follow.

## MVP
Users will be able to create a hair routine, where they can add, delete, and edit their list.


## WireFrame
![wireframe](https://user-images.githubusercontent.com/89564513/151693998-2d9c013f-c95e-461f-b852-e3fa4f6661a9.png)


## User Stories;
  -A user can create a hair routine<br>
  -A user can edit their hair routines<br>
  -A user can delete their old hair routines<br>
  -A user can create a new routine<br>
  -A user can add products to their routine.<br>
  -A user can edit the products in their routine<br>
  -A user can delete products from their routine.<br>

## ERD
![Inch-by-inch](https://lucid.app/lucidchart/c6f823b3-187b-47ec-a060-35ffda717158/edit?invitationId=inv_a0c68bb6-6eb4-474b-86c3-02d45abb3cc0)

## End Points

| Request Type  | Url  |
|---------------|------|
|Get   | http://localhost:9193/routine/{id}|
|Get   | http://localhost:9193/routine/all|
|Post  | http://localhost:9193/routine/add|
|Put   | http://localhost:9193/routine/update/{id}|
|Delete| http://localhost:9193/routine/delete/{id}|

## My Process

[Project Tracker](https://github.com/users/Cecilierenee/projects/1/views/1)

### Day 1 :pencil2: :notebook_with_decorative_cover:
-Determined what MVP is for this project<br>
-Developed my user stories<br>
-Created an ERD<br>
-Determined Endpoints<br>
**Project Approval**<br>
-Gathered appropriate resources<br>
-Started on backend structure


### Day 2 :computer:
-Began building backend(API)<br>
  -Started with creating my models<br>
  -created crontroller with endpoints<br>
  -created my service class for business logic<br>
-Gathered resources for auth services 

### Day 3 :computer:
-Build user controller and services classes<br>
-Attempted to run the application<br>
-I ran into issues with 'Circle Dependency' due to my web security and authorization manager that were injected into different aspects of my app. I found that using the    '@Lazy' notation on my dependencies helped to recognize which bean to create first. [Stack Over Flow](https://stackoverflow.com/questions/39823865/spring-boot-application-fails-to-start-due-to-a-circular-dependency-between-1-be)
-Test Endpoints<br>

**Backend Running without bugs**(over the weekend) :dancer: :tada: <br>

### Day 4 :sweat_smile:
  -User Login and registration errors<br>
  -Began working on Front End wireframe

### Day 5 :trollface:
  -Front end is coming together<br>
  -Still having issues with authorization, decided to scrap it.<br>
  -Hurdle: Going to broad, and maybe challenging myself too much

### Day 6 :rage:
  -Was trying to make a sepreate component for me navigation and my frontend ended up a complete mess.<br>
  -Hurdle REFACOTRING CODE THE NIGHT BEFORE! 

## Learning Points
  - Got my database to work<br>
  - Worked with bootstrap<br>
  - form validation in my Angular code<br>
  - Got endpoints to test properly<br>

*********************************************************************************************************************************************************************************
### Beyond The BootCamp :rainbow:

*02/05/2022*

Today Marks the day after the Java bootcamp I had the pleasure to participate in over the past 12 weeks. And while I worked very hard on my capstone project, I'm still left obsessing over the functionality of my web application. I find myself with a bit of an empty schedule at the moment, so to fill that void, I will keep my skills sharp by completing my application and documenting the process.

A few things I would like to focus on at the moment;<br>
  -Completing the functionality of my app (add, edit and delete funtions)<br>
  -Working with Bootstrp and my Css to ensure my app looks great!<br>
  -Unit testing<br>
  -Deplyoment<br>
  
  ## The Process
  
  ### Day 8 :sun_with_face:
  -Adding my delete, and update funtionality.<br>
  -Getting my form to post new routines

*What I actually accomplished:*
  1. Just because it was really bugging me, I went in and stylized my 'add' 'edit' and 'delete' buttons. 
  2. While *attempting* to add my button functionality, I discovered that my 'updateRoutine' and 'deleteRoutine' methods were both showing a 505 error on Postman. I messed            around trying to figure out what was wrong with the code, but will revisit another day.
  3. Not mentioned in things I wanted to get done today, however I was able to get my search bar to work. 
  4. My addRoutine Modal that was showing is now hidden, I just have to figure out how to get my button click to trigger it.

### Day 9: Self-Care Sunday :tropical_drink:
