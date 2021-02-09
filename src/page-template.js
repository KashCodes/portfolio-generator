/* ////Explaination of Template Literals://// To make this function dynamic, we could add arguments to the function expression, then insert the data into the string using interpolation, which is the substitution of text for a variable we build into the string.

With ES6, we can use a feature called template literals to embed JavaScript expressions into the string. Template literals are enclosed by backticks (`) instead of double or single quotes.

Although backticks may look similar to single quotes ('), they operate differently, which we'll explain in the following section. With template literals, we can wrap the string in backticks and interpolate the variables with the '${<variable>}' syntax.

Initial Example Code: 'const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;'     */

/*  ////Multi-line Strings:////  Template literals allow us to do easily something that would be difficult with regular strings: multi-line text.

To do this, simply enter a keyboard return in the template literal wherever you want a line break to occur, just as you would do if you were entering a line break in a word processor.  */

      //--------Reference code/Not needed--------//
      // const generatePage = (userName, githubName) => {
      //   return `
      //     Name: ${userName}
      //     GitHub: ${githubName}
      //   `;
      // };
      //--------Reference code/Not needed--------//

// Modify the function commented out above so it actually generates HTML
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};


//-------------

// In order to use functions from one module inside another, we use the related statements module.exports and require. In the source file that has the functions we want to make available to other files, we use module.exports at its bottom. In the destination file(s) that we want to receive those exported functions, we put require at the top.
module.exports = generatePage;