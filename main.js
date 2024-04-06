// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const likeButtons = document.querySelectorAll(".like");

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", async (event) => {
      const heart =likeButton.querySelector(".like-glyph");

      errorModal.classList.add("hidden");

      const isLiked = heart.innerText === FULL_HEART;

      try {
        await mimicServerCall();
        
        if (isLiked) {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        } else {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
        }
      } catch (error) {
        modalMessage.innerText = error;
        errorModal.classList.remove("hidden");

        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      }
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
