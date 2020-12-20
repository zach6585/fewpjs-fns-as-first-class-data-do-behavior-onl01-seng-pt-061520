/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  if (parseInt(time.split(":")[0]) < 12) {
    return "Good Morning";
  }

  else if (12 <= parseInt(time.split(":")[0]) && parseInt(time.split(":")[0]) <= 17) {
    return "Good Afternoon";
  }

  else if (parseInt(time.split(":")[0]) > 17) {
    return "Good Evening";

  
  }
  else {
    return time;
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
    let header = document.getElementById("greeting");
    header.innerHTML = message;
}