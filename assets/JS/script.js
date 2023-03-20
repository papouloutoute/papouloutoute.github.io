
const myButton = document.getElementById("clickable")
const myPhoto = document.getElementById("photo")

myButton.addEventListener("click", function() {
      fetch("https://dog.ceo/api/breeds/image/random/2")
      .then(data => data.json())
      .then(data => {
      photo.src=data.message[0],photo2.src=data.message[1];
      })
});


//Change content of the button
function changeContent() {
      document.getElementById("btntxt").innerHTML = "<a> 2 MORE RANDOM PIC' ?</a>"
}



// const content = document.getElementById("content")
// content.style=""