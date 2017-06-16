//array of objects with existing users and passwords
var users = [
  {
    user: "victoria",
    password: "password1"
  },
  {
    user: "elmer",
    password: "password2"
  },
  {
    user:"mauiandzeus",
    password: "password3"
  }
]

//function to get the submitted user name and password
function login(){
  //stores the tag with id="username" in var username
  var username = document.getElementById("username")
  //store the tag with id="password" in var password
  var password = document.getElementById("password")
  //store the tag with id = "results" in var results
  var results = document.getElementById("results")

  console.log(username, password, results)
  console.log("username value is: " + username.value)
  console.log("password value is: " + password.value)

//loop through existing users array one item at a tie
for(i = 0; i < users.length; i = i + 1){
  //check each user as you loop through the array of objects
  console.log(users[i])
  if(username.value === users[i].user && password.value === users[i].password){
  //check to see if the IF statement executed
  console.log("if statement ran, so we have a match!")
  //chance class of results to let the user know it worked
  results.className = "success"
  //update the text of the results element to display a success message
  results.textContent = " Welcome " + username.value + "!"
  // stop the function from running any furter cause we got a match!!!
  return
  }
}


//run if failure if username and password does not match
console.log("no match was found")
//change class of results to let user know it failed
results.className = "failure"
//update text of the results element to display a failure message
results.textContent = "!! username or password does not match"
}
