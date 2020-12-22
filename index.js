/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let intval = parseInt(time.split(":")[0])
  
  if (intval < 12) {
    return "Good Morning";
  }

  else if (intval > 17) {
    return "Good Evening";

  
  }

  else {
    return "Good Afternoon";
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
    let header = document.getElementById("greeting");
    header.innerText = message;
}

