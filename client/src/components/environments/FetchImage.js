// fetchImages.js
const FetchImage = (imageUrl) => {
  return fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .catch(error => {
      console.error('Error fetching the image:', error);
    });
};

export default FetchImage;
