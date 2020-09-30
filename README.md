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


- All wireframes used for this project can be found on my GitHub at [Manojlovic1998]().

## Features

- Overview:
    - [Implemented] Create User Account
    - [Implemented] Create New Recipe
    - [Implemented] Search for Recipes
    - [Implemented] Edit Your Recipe
    - [Implemented] Delete Your Recipe


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

### Existing Features


### Features Left to Implement


## Technologies Used

- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to provide a responsive toolkit for building the base of the website.
- [Fontawesome](https://fontawesome.com/)
    - The project uses **Fontawesome** in order to use icons for the website.
- [Fonts Google](https://fonts.google.com/)
    - The project uses **Google Fonts** for changing the font family.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [EmaiJS](https://www.emailjs.com/)
    - The project uses **EmailJS** to provide service for sending emails from the website.

## Testing


## Deployment


## Credits


### Content


### Media
- The photos used in this site were obtained from [Unsplash.com](https://unsplash.com/).

### Acknowledgements
