// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById('error-modal');
  const likeHeart = document.querySelector('.like-heart');

  // Initial setup: hide error modal
  errorModal.classList.add('hidden');

  // Event listener for clicking on the heart
  likeHeart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Server request succeeded
        likeHeart.innerText = '❤️'; // Change heart to full
        likeHeart.classList.add('activated-heart'); // Add activated class
      })
      .catch(error => {
        // Server request failed
        errorModal.innerText = error.message; // Display error message
        errorModal.classList.remove('hidden'); // Remove hidden class

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });

  // Additional event listener for clicking on a full heart to revert
  likeHeart.addEventListener('dblclick', () => {
    likeHeart.innerText = '♡'; // Change heart back to empty
    likeHeart.classList.remove('activated-heart'); // Remove activated class
  });

  // Function to simulate server call
  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      // Simulate a server call
      const success = Math.random() > 0.5; // Simulate success or failure
      setTimeout(() => {
        if (success) {
          resolve();
        } else {
          reject({ message: 'Server error!' });
        }
      }, 1000); // Simulate a delay
    });
  }
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
