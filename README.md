# Recipe Pot Website

- This is a recipe website that users can use to find, save, and share recipes. Recipe Pot is a platform where users can search through a wide range of recipes
that they can view, and follow to re-create the same dish. Some of the main functionalities of this website are:
    - Search Bar.
    - Register option.
    - Login option.
    - Logout option.
    - Save recipes you like to your profile account.
    - Post recipes that you and other users of the website can use.
    - Contact form

 - A more detailed description of website functionalities can be found in the sections below.

## UX
- Strategy plane:
    - I aim to build an online recipe book platform that will give users a place where they can search, share, and save recipes of their favorite dish. 
 
    - As someone who is looking to find his next dish to cook, I want to use the website to find new recipes.
    - As a user of the Recipe Pot website, I want to be able to search for more recipes and go through them with ease. 
    - As a user of the Recipe Pot website, I want to have an insight into what ingredients different recipes will require me to have to re-create the same dish.
    - As a user of the Recipe Pot website, I want to be able to save my favorite recipes, for future use, to my profile account I have created on this platform.
    - As a user of the Recipe Pot website, I want to be able to share some of my favorite dish recipes on this website that other users can view.
    - As a user of the Recipe Pot website, I would like to contact the website admin in case I have any questions.
 
- Scope plane:
    - Users should be able to search for recipes using the search bar.
    - There should be detailed information about each recipe, displayed consistently so that information pattern can easily be recognized by the first time user. 
    - A form like structure should be used that will allow the user to input information about the dish he/she would like to share.
    - There should be a "Contact Us" page that can be used in case the user has any questions or would like to contact the admin of the page.
 
- Structure plane:
    - User Interface:
        - It should be simple to use, adhering to the 'rule of thumb' keeping everything on less than 3 clicks away.
        - Users can search for recipes, and food types using two input fields, select field, and a search bar.
        - Register service will provide the users with additional options, they will allow the user to personalize his use of the website by allowing him to share and save recipes. 
 
- Skeleton plane:
    - There should always be a menu or exit button available so that users can have the freedom to navigate between different pages.
    - Information content:
        - Recipes adhere to the same display format, each having the same pattern in which information is delivered.
        - Clear and easy to use a landing page.
 
- Structure plane:
    - The color theme for this project will be generated using the following color palette generator [Coolors](https://coolors.co).
    - The design should be kept simple, clear, and easy to understand. It should not be overcrowded with unnecessary information as this can confuse the first time user. 
    - Animations should be used where necessary making the website more interactive and more appealing to the user's eye.

- All wireframes used for this project can be found on my GitHub at [Manojlovic1998](https://github.com/Manojlovic1998/Milestone_Project_3/tree/master/wireFrame).

## Features

- Overview:
    - [Implemented] Create User Account
    - [Implemented] Create New Recipe
    - [Implemented] Search for Recipes
    - [Implemented] Edit Your Recipe
    - [Implemented] Delete Your Recipe
    - [Implemented] User Session

- Main feature:
    - One of the main features of this project is the search bar that allows the user to input text that is used to search, query, and display recipes to the user.
    Search functionality is created using JavaScript ajax method to send and receive data, Flask's view function URL that receives the data, and Mongo DB aggregate search pipeline functionality that retrieves the data from the database.
    - The second feature of this project is the login system, that together with the help of Mongo DB allows the user to create, view, edit, or delete recipes.
    Once the user has created his account he/she can then click the "Add Recipe" button, which triggers a function that takes the user to the recipe form.
    Once the user has filled in and submitted the form, the recipe will be added to the database. User will then be able to view the recipe on the profile page or find it using the search bar.

-  Other features:

    - EmailJS:
        - The website has a contact form available, where users can use the form to send us an email. This feature was set using [EmailJS](https://www.emailjs.com/) service.
        The user gets to fill 3 input fields, "Full Name", "Email", and "Message". Once all the input fields have been filled, the user can click the send button which takes the data and uses the EmailJS service to send us an email using the template that I have set on Emailjs to format the data accordingly. 

### Features Left to Implement
   - [ ] Better user interface on the profile page, so that users can interact with their user data, like changing password, or name.
   - [ ] Ability for the user to upload a profile picture.
   - [ ] Further developing systems that will allow users to create group folders with his recipes.
   - [ ] Creating functionality that will allow the user to save other people's recipes to his page.

## Technologies Used

- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to provide a responsive toolkit for building the base of the website.
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
    - The project uses **Flask** framework to provide developer with tools, libraries and technologies that allow faster build of the web application.
- [Fontawesome](https://fontawesome.com/)
    - The project uses **Fontawesome** in order to use icons for the website.
- [Fonts Google](https://fonts.google.com/)
    - The project uses **Google Fonts** for changing the font family.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [EmaiJS](https://www.emailjs.com/)
    - The project uses **EmailJS** to provide service for sending emails from the website.
- [MongoDB-Atlas](https://www.mongodb.com/)
    - The project uses **MongoDB Atlas** to store data used on this web site.
- [Heroku](https://www.heroku.com)
    - The project uses **Heroku** to deploy finished project.
- [Python](https://www.python.com)
    - The project uses **Python** for routing and CRUD functionality.
- [Github](https://www.GitHub.com)
    - The project uses **GitHub** for version control.

## Information Architecture

- The data structure of two data sets, recipes and user_login_system looks like this:

    - **To store the Recipe Information**

    ```
    {
        _id : ObjectId()
        user_id : String,
        recipe_name : String,
        img_url : String,
        ingredient_name : Array,
        ingredient_amout : Array,
        unit : Array,
        step_description : Array
    }
    ```

    -  **To store the User information**

    ```
    {
        _id : ObjectId()
        name : String,
        email : String,
        password : String
    }
    ```

## Testing

- Defensive Design

    - All of the forms in this project have a validation system. 
    - Submission with blank input is not allowed popup messages are displayed to inform users which necessary input sections are empty.
    - Misuse of the URL is prevented by using sessions and decorator functions, to decide if the user is logged in or logged out.
    - If URL to the page that is not supposed to be present when logged in or logged out is manually inputed then:

    - The route decorator functions will redirect the user to the starting page.

- Sign up functionality:

    - If the session is non-existent, the sign-up page will be rendered.
    - If the session is created accessing the sign-up page will not be allowed. Users will get redirected to their profile page.
    - If there is no user in the database with the same email, the user account does not exist yet.
    - if there is a user in the database with the same email, the user account has already been created.
    - If an email was not used before to create an account, sign-up will be allowed.
    - If an email was used already to create an account, sign-up will not be allowed.
    - If the criteria are not met, the appropriate status code will be returned, an error message will be displayed to the user.
    - If all criteria are satisfied the app will create user session and user will be logged in.

- The login functionality:
  
  - If there is no session, no one is logged in.
  - If session is true, user has logged in.
  - If the email and password are correct, then user session is started and relevant user information is stored to the session.
  - If the criteria are not met, the appropriate status code will be returned, an error message will be displayed to the user.
  - If all criteria are satisfied the app will create user session and user will be logged in.

- The profile functionality:
    - The profile page is only accesible if the session was created, if the user has logged in.
    - The profile page will display only the recipes that user has created before. It does this by matching the user '_id' and recipe 'user_id' key.
    - If the criteria are not met, the appropriate status code will be returned, an error message will be displayed to the user.
    - If the the criteria are satisfied app will display user's recipes and display buttons that will allow user to use CRUD functionality.

- The add recipe functionality:
    - If the user is logged in the 'add recipe' button will be presented.
    The button will allow for recipes to be created by targeting the URL of view function that renders the add recipe form page.
    - If the user is not logged in decorator function will prevent the user from getting access to this page manually.

- The edit recipe functionality:
    - If the user is logged in and his session['_id'] key matches the 'user_id' key from the recipe, then the edit button will be shown in the drop down section of the recipe card.
    The button will allow for recipes to be edited by targeting the URL of view function that renders the edit recipe form page.
    - If the user is not logged in decorator function will prevent the user from getting access to this page manually.

- The delete recipe functionality:
    - If the user is logged in and his session['_id'] ket matches the 'user_id' key from the recipe, then the delete button will be shown in the drop-down section of the recipe card.
    The button will allow for recipes to be deleted by targeting the URL of view function that deletes the recipe form the page and database.
    - The button will activate the modal to ensure that the user wants to delete the recipe, this way any misclick won't lead to accidental deletion of the recipe.
    - If the user is not logged in decorator function will prevent the user from getting access to this page manually.

- The search recipe functionality:
    - If the user enters an empty input field, display all recipes.
    - If the user searches for a recipe that does not exist, return the appropriate status code, and show an error message to the user.
    - If a user searches for a recipe and there are multiple results found, the first result will always be the one with the highest search score.
    - While waiting for search results there is loading animation before data is injected.

- The error handling functionality:
    - Most form requests on this website are done through ajax call.
    - Ajax allows me to 'POST' form input data to the view function.
    - Functions will receive data and run a set of commands after which I can return the results through JSON format and also return a status code based on its result.


- All of the code written was tested and re-tested.
- Defensive Design was tested by manually adding URL endpoints.
- Login system was tested using bogus emails and passwords.
- Sign-up system was tested using same emails.
- Login system was tested using correct emails and passwords.
- Sign-up system was tested using different emails.
- Search bar was tested by: using bogus input values, searching for the value that does not exist in the database, searching for the value that exists, inputting symbols, and numbers.

- HTML was validated using [validator.w3](https://validator.w3.org/)
  - I used HTML of deployed website inside the validator, so that I can bypass the Jinja templating syntax.
- CSS was validated with [jigsaw.w3](https://jigsaw.w3.org/css-validator/)
- CSS vendor prefixes were added using [autoprefixer](https://autoprefixer.github.io/)

## Deployment

For this project, I used [Github](https://github.com/) platform, where I created [repository](https://github.com/Manojlovic1998/Milestone_Project_3) using a template provided to me by [Code Institute](https://codeinstitute.net/).
Once the repository was created, I have used browser IDE addon for GitHub called [GitPod](https://www.gitpod.io/), to open the repository.
This online IDE that allowed me to access repository as, ["Gitpod knows where you are coming from and beams you into the right context."](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en).
Using this IDE I was able to make my commits and push all of my code to the [Github](https://github.com/). After project was complited it was hosted and deployed through [Heroku](https://www.heroku.com).

- Deployment step by step process:
1. Go to [repository](https://github.com/Manojlovic1998/Milestone_Project_3).
2. Open [repository](https://github.com/Manojlovic1998/Milestone_Project_3) using [GitPod](https://www.gitpod.io/) IDE.
3. In terminal run "pip3 freeze --local > requirements.txt" command to create a .txt file with all of the dependencies used that [Heroku](https://www.heroku.com) needs to know what dependencies app uses.
4. In the terminal run the "echo web: python app.py > Procfile" command to create Procfile that [Heroku](https://www.heroku.com) needs to know what file runs the app.
5. Check the files that you have created, if Procfile has a blank line under the first line, delete the blank line.
6. Go to [Heroku](https://www.heroku.com) and log in.
7. Once logged in, and in your dashboard, click on "Create New App".
8. Under "Create New App" click on the input field called "App Name".
9. Give your app a unique name using a dash or minus instead of spaces.
10. Select the region closes to your location.
11. Click "create app".
12. To connect the app, we are gonna set up automatic deployment by clicking on the "Github" icon inside of the "Deployment Method" section.
13. Under the "Deployment Method" section there will be a new section called "Connect to GitHub", make sure that your GitHub profile is displayed inside it.
14. Insert repo-name inside the "Connect to Github" section input. This input can be found to the right of where your profile is displayed.
15. Click Search.
16. Once it finds your repo, click the "connect" button.
17. Before clicking the "Enable Automatic Deployment" button, click on the settings tab in the top part of the page.
18. Click on "Reveal Config Var".
19. Here you can tell Heroku which variables are required, do not include quotes for the key or the value.
20. Variables inserted (IP, PORT, MONGO_URI, MONGODB_NAME, SECRET_KEY).
21. Go back to GitPod IDE and make sure that you have pushed your requirements.txt and Procfile to the repo.
22. Head back to Heroku and click on "Enable Automatic Deployment".
23. Select your branch. Branch selected (master).
24. Click "Deploy Branch"
25. It will take some time for Heroku to build the app.
26. Once the site is deployed click "View" to launch the new app.

- Local Deployment:
 1. To run the code locally you can go to [Github repository](https://github.com/Manojlovic1998/Milestone_Project_3).
 2. There you can download a zip file that includes all of the files used to create this website. 
 3. Once you have downloaded the files you can use IDE such as [VScode](https://code.visualstudio.com/) to open them.
 4. From there you use any addon that allows you to run the server locally. 
 5. In order to have a functional app, you will have to create your own MongoDB collection and inserted your "MONGO_URI" insted of the one used in the project.

## Differences between the currently deployed site and the development version at this time

- In the deployed version, image jpg files have been downsized so that they get loaded faster.
- SECRET_KEY has been changed for the deployed version.

## Credits


### Content

- The text content of the two recipes presented on the website is not my creation. Recipes were created solely for educational purposes to showcase my programing logic.
They will be deleted.

### Media
- The photos used in this site were obtained from [Unsplash.com](https://unsplash.com/).
- UI design idea and some of the style for wireframe was obtained from [startbootstrap.com](https://startbootstrap.com/themes/grayscale).

### Acknowledgements

- I received inspiration for this project from Code Institute school lessons.
- My mentor Aaron