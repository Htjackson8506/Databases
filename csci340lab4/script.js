let isDuck = true;

async function fetchDuckImage() {
    try {
        const response = await fetch('https://random-d.uk/api');
        const data = await response.json();
        document.getElementById('currentImage').src = data.url;
    } catch (error) {
        console.error("Error fetching duck image:", error);
    }
    isDuck=true;
}

function fetchBearImage() {
    document.getElementById('currentImage').src = 'https://placebear.com/200/300';
    isDuck = false;
}

function switchImage() {
    if (isDuck) {
        fetchBearImage();
    } else {
        fetchDuckImage();
    }

}

window.onload = fetchDuckImage;
