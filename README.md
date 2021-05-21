# Dishadmin
A Dish admin page which performs CRUD operations using react and redux
# Initial Setup
Let’s start by creating a folder for our project called BookCards.
cd into BookCards from command line, run npm init , and hit enter through all the prompts.
Open the BookCards project folder in a code editor of choice (I am using notepad++).
# Install Dependencies
Let’s install react and react-dom:
 * #### npm install --save react
* #### npm install --save react-dom
Then, we need to install the core Redux library:
 * #### npm install --save redux
We also need to install another library when using Redux with React:
 * #### npm install --save react-redux
For this project, these will be all of our dependencies. Our package.json file should currently look like this:
** {
  * ####  "name": "",
  * ####  "version": "1.0.0",
 * ####  "description": "",
 * ####  "main": "index.js",
 * ####  "scripts": {
     * #### "test": "echo \"Error: no test specified\" && exit 1"
 * #### },
  * #### "author": "",
  * #### "license": "ISC",
   * #### "dependencies": {
   * ####   "react": "^15.6.1",
   * ####   "react-dom": "^15.6.1",
   * ####   "react-redux": "^5.0.5",
   * ####  "redux": "^3.7.1"
   * ####  }
 * ####  } **
# Installing devDependencies
For our devDependencies, we need to install Babel stuff to use ES6 features in React, Webpack to apply the Babel preprocessing, and Webpack Dev Server to host our application.
Here’s all of it in one installation:
 * #### npm install --save-dev babel-loader babel-core babel-preset-env babel-preset-react webpack webpack-dev-server html-webpack-plugin
 *  #### npm start
