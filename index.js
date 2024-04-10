const dogImageContainer = document.getElementById('dog-image-container');
const dogBreedsList = document.getElementById('dog-breeds');
const breedDropdown = document.getElementById('breed-dropdown');

// Challenge 1: Fetch and display random dog images
function fetchRandomDogImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const imageUrls = data.message;
      imageUrls.forEach(imageUrl => {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        dogImageContainer.appendChild(imageElement);
      });
    })
    .catch(error => console.error('Error fetching dog images:', error));
}

// Challenge 2: Fetch and display all dog breeds
function fetchDogBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const breedItem = document.createElement('li');
        breedItem.textContent = breed;
        dogBreedsList.appendChild(breedItem);
      });
    })
    .catch(error => console.error('Error fetching dog breeds:', error));
}

// Challenge 3: Change list item color on click
function handleBreedClick(event) {
  event.target.style.color = 'blue'; // Change to your preferred color
}

// Challenge 4: Filter breeds by starting letter
function filterBreeds() {
  const selectedLetter = breedDropdown.value;
  const breedItems = dogBreedsList.querySelectorAll('li');

  breedItems.forEach(item => {
    const breedName = item.textContent;
    if (breedName.charAt(0).toLowerCase() === selectedLetter) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Event listeners
breedDropdown.addEventListener('change', filterBreeds);
dogBreedsList.addEventListener('click', handleBreedClick);

// Call functions on page load (ensure DOM is loaded)
window.addEventListener('DOMContentLoaded', () => {
  fetchRandomDogImages();
  fetchDogBreeds();
});
