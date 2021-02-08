/* ////process.argv Explaination://// In Node.js, process is a global object that represents everything going on with this particular app. You can compare it to document or window in the browser, as it's always present in the context of the runtime environment. If you console.log(process), you'll see that it's a gigantic object holding data providing context to where the app was executed. This includes your operating system, what command line you're using, and a ton more.

The argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. The first two indexes of process.argv simply represent Node.js and the file we executed, so we don't typically need to use them. But we do want to use whatever comes next.Let's use an array method to create a new array with everything that comes after 'process.argv[1]'.
-------------------------------------------

////Slicing Explanation://// '.slice()' returns you a brand new array that doesn't manipulate the original 'process.argv'. To return the third index (i.e., index 2 in the zero-based array), and ending with the final index. 

could be Written: 'const profileDataArgs = process.argv.slice(2, process.argv.length);' 

It turns out '.slice()' returns everything from the first zero-based index we provide as the first argument up to but not including the zero-based index we provide as the second argument. So, to return through the last index in the array, we provide the length of the array as the second argument.

This way, you don't actually manipulate 'process.argv', but rather create a new array based on the values from the third index and on. */


const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this... This is the exact same thing as using a for loop to iterate through an array, and using 'arrayName[i]' syntax to access the array at that iteration, except it's a lot cleaner and meant specifically for arrays.
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
