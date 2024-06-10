const apiDance = "https://api.waifu.pics/sfw/wink";
const apiNSFW = "https://api.waifu.pics/nsfw/blowjob";
const waifuPics = document.getElementById("waifu-pics");
const nsfwButton = document.getElementById("nsfw-pics");
const sfwButton = document.getElementById("sfw-pics");
let generatedPic;
var clicked = false;

//have a parameter of urls to change api urls depending on the buttons clicked
async function fetchPictures(urlUsed) {

    try {
        const response = await fetch(urlUsed);
        const data = await response.json(); // await the promise here
        console.log(data); // This will log the resolved data
        generatedPic = data.url;
        changePic();
    } catch (error) {
        console.error('Error fetching the pictures:', error);
    }

    waifuPics.style.display = "block";
}

//Changes the picture
function changePic() {
    waifuPics.src = generatedPic;
}

nsfwButton.addEventListener('click', function() {
    fetchPictures(apiNSFW);
    console.log("Not  Safe For Work Bro")
});

sfwButton.addEventListener('click', function() {
    fetchPictures(apiDance);
    console.log("Safe For Work Bro")
});
// nsfwButton.onclick = fetchPictures(apiNSFW);
// sfwButton.onclick = fetchPictures(apiDance);
// console.log(clicked);

