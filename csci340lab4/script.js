let isDuck = true;  // Start with the random duck

async function fetchDuckImage() {
    try {
        const response = await fetch('https://random-d.uk/api');
        const data = await response.json();
        document.getElementById('currentImage').src = data.url;
    } catch (error) {
        console.error("Error fetching duck image:", error);
    }
}

function fetchBearImage() {
    document.getElementById('currentImage').src = 'https://placebear.com/200/300';
}

function switchImage() {
    if (isDuck) {
        fetchBearImage();
    } else {
        fetchDuckImage();
    }
    isDuck = !isDuck; // Toggle the flag
}

// Fetch the duck image initially when the page loads
window.onload = fetchDuckImage;
