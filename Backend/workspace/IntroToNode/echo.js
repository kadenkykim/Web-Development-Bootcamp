// NODE EXERCISE

// Using the command line, create a file "echo.js"
// Inside the file, write a function named echo that takes 2 arguments: a string and a number
// It should print out the string, number number of times.

function echo(string, number) {
  for (var i = 0; i < number; ++i) {
    console.log(string);
  }
}

echo("Echo!!!", 10) // should print "Echo!!!" 10 times
echo("Tater Tots", 3) // should print "Tater Tots" 3 times

// Add the above 2 examples to the end of your file
// Lastly, run the contents of "echo.js" using node