# Favorite restaurant list
a favorite restaurant list for user to creat/read/update/delete items

##	Features
####  User can add new restaurant data by click "Create new" button. Restaurant's name is mandatory input
####  User can see all favorite restaurants with brief information in database, incluers:
- reataurant name
- restaurant photo
- category of the restaurant
- rating from people ever visited
####  User can see detail information by click diner's photo, name or detail button. There are:
- category of the restaurant
- address and telephone no. of the restaurant
- restaurant's photo and short description 
####  User can update restaurant information by click "Edit" button
####  User can delete restaurant information by click "Delete" button
####  User can search restaurant by name in the search box on the above of home
####  User can sort by restaurant name, category and rating through dropdown menu

##	Getting Started
git clone or download https://github.com/lothecode/AC3_Diner_CRUD-RESTful.git to your computer


###	Installing
- open terminal to the folder of this project
- install npm,and install Express.js, mongoose, body-parser, Express-Handlebars through npm

#### Mongodb and Robo 3T is required excuting this project
- Create new Database named DinerList via Robo 3T localhost
- Create new Cpllection named diners via Robo 3T in DinerList database
#### note:
- dinerSeeder.js in folder /models/seeds can be used to create more data from the source file : restaurant.json
- run "npm run dev" in command line, the project is listening on localhost:3000 via express.js
- open browser and go to localhost:3000, the favorite restaurant list is opened
- to break down and end the host, just back to terminal, and use Ctrl+c command


###  Built With
- Visual Studio Code v1.40.1
- Express v4.17.1
- Express-Handlebars v3.1.0
- method-override v3.0.0
- MongoDB Community Server v4.0.13
- Mongoose v5.7.10