const inquirer = require('inquirer');


//-------------

/*         ~~~~~~~~~~~Don't need for now~~~~~~~~~ 
// in order to use the 'fs' module, we need the following statement at the top of the JavaScript file
const fs = require('fs');

//-------------

//So, because we added the module.exports statement at the end of the page-template.js file (with module.exports set to our generatePage() function), we can now use the require statement to include generatePage() at the top of the app.js file.
const generatePage = require('./src/page-template.js');
         ~~~~~~~~~~~Don't need for now~~~~~~~~~ */

//------------- No longer need this code/process.argv bc we will be using inquirer.----------//

      // /* ////process.argv Explaination://// In Node.js, process is a global object that represents everything going on with this particular app. You can compare it to document or window in the browser, as it's always present in the context of the runtime environment. If you console.log(process), you'll see that it's a gigantic object holding data providing context to where the app was executed. This includes your operating system, what command line you're using, and a ton more.

      // The argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. The first two indexes of process.argv simply represent Node.js and the file we executed, so we don't typically need to use them. But we do want to use whatever comes next.Let's use an array method to create a new array with everything that comes after 'process.argv[1]'.
      // -------------------------------------------

      // ////Slicing Explanation://// '.slice()' returns you a brand new array that doesn't manipulate the original 'process.argv'. To return the third index (i.e., index 2 in the zero-based array), and ending with the final index. 

      // could be Written: 'const profileDataArgs = process.argv.slice(2, process.argv.length);' 

      // It turns out '.slice()' returns everything from the first zero-based index we provide as the first argument up to but not including the zero-based index we provide as the second argument. So, to return through the last index in the array, we provide the length of the array as the second argument.

      // This way, you don't actually manipulate 'process.argv', but rather create a new array based on the values from the third index and on. */

      // // Array that holds the user command-line arguments
      // const profileDataArgs = process.argv.slice(2, process.argv.length);

      // //-------------

      // // Extracting the above arguments and storing them into distinct variables. One way is using th array index. 
      //       //--------Reference code/Not needed--------// 
      //       // const name = profileDataArgs[0];
      //       // const github = profileDataArgs[1];
      //       //--------Reference code/Not needed--------//
      // // Alternatively, we can use an ES6 feature called assignment destructuring. In basic terms, it assigns elements of an array to variable names in a single expression, as shown here:
      // const [name, github] = profileDataArgs;

      //       //--------Reference code/Not needed--------//
      //       /* ////Instructed to comment out all this code to use as reference, but no longer needed....////
      //       const printProfileData = profileDataArr => {
      //         // This...
      //         for (let i = 0; i < profileDataArr.length; i += 1) {
      //           console.log(profileDataArr[i]);
      //         }

      //         console.log('================');

      //         // Is the same as this... This is the exact same thing as using a for loop to iterate through an array, and using 'arrayName[i]' syntax to access the array at that iteration, except it's a lot cleaner and meant specifically for arrays.
      //         profileDataArr.forEach(profileItem => console.log(profileItem));
      //       };

      //       printProfileData(profileDataArgs);
      //       */
      //       //--------Reference code/Not needed--------//

      // /* ////Explaining this specific arrow function syntax://// This function returns a string. Parentheses are unnecessary in arrow functions when there is one parameter. In this function, which has no parameters, we need parentheses to hold the place where parameters would've been.This function returns a string. Parentheses are unnecessary in arrow functions when there is one parameter. In this function, which has no parameters, we need parentheses to hold the place where parameters would've been.

      // Also notice the conspicuous absence of the 'return' keyword. Normally, to 'return' something from a function, we'd need a 'return' statement to explicitly state the 'return' value; otherwise, 'undefined' would be returned. But in the special case when a function has only a single statement, the curly braces, {}, are unnecessary and the 'return' statement is implied. */

//-------------

/* ////File System Explaination://// The file system is considered a module in Node.js's core library. A module can be a function, a class, an object, or simple variables. Whatever its form, a module is a reusable piece of code that can be imported to anywhere it's needed. A function called 'fs.writeFile()' can create multiple file types, including TXT, PDF, HTML, JSON, and more. The 'fs.writeFile()' function definition has three arguments. The first argument is the name of the file that's being created. The next argument is the data that will write onto the file, in this case the HTML template literal. The last parameter is a callback function that will be used for error handling.   */

// fs module function to create HTML file. First arugement is  Named 'index.html' for output file, the second argument is  'generatePage()' function which display the data being written (the HTML string template), the third argument is the callback function that will handle any errrors as well as the success message (console.log).  ---- Additionally, When an arrow function has one argument, parentheses are optional. However, when there are no arguments—or more than one—parentheses are necessary.

/*         ~~~~~~~~~~~Don't need for now~~~~~~~~~
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
         ~~~~~~~~~~~Don't need for now~~~~~~~~~*/











/* Notice that inquirer's prompt method can receive an array of objects in its argument, known as the question object. The properties of the question object identify the type, name, and question message of this particular question. "Input" was chosen as the type of question because the answer will be a text reply. The answer object is returned as a Promise. */ 

// Start Inquirer prompts. In a function so that it can be invoked on demand within the flow of the application. Here we're calling a function that returns the result of inquire.prompt, which is a Promise.
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};

// Project related questions done using checkbox type, list of answers, and booleans
const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    // Once the data has been collected by inquirer, you need to add the project data to the projects array.
    .then(projectData => {
      // We use the array method push() to place the projectData from inquirer into the new projects array we just created.
      portfolioData.projects.push(projectData);
      // A if condition that will call the promptProject(portfolioData) function when confirmAddProject evaluates to true
      if (projectData.confirmAddProject) {
        // if true then re-run the 'promptProject => portfolioData {}' function/questions.
        return promptProject(portfolioData);
      } else {
        // if false then just 'return' the first project data from original entry. We have to return the portfolioData in the else statement explicitly so that the object is returned. This is a critical step to retrieving the user's answer and building an HTML template.
        return portfolioData;
      }
    });
};

// Just like fetch(), which we covered previously, the Promise will resolve with a .then() method. We therefore append the .then() method to the function call, since it returns a Promise, and we put into .then() whatever we wish to take place after the Promise is resolved.
promptUser()
  //Using Promises, we can chain the functions together using the then() method.
  then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
  




