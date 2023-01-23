/**
 * The function for getting the album art data
 * @param  {string} Artist The name of the artist
 * @param  {string} Album The name of the album
 */
// DONE: Make the function display the album artwork returned as <img> tags.
async function createAlbumArtDiv(artist, album) {
    albumArt( artist, {album: album, size: 'medium'} ).then( imgUrl => {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = imgUrl;
        div.append(img);
        document.body.append(div);
    });
}

var artistNameDiv =  document.getElementById("artistName");
var albumNameDiv =  document.getElementById("albumName");

document.getElementById("getImageButton").onclick = () => {
    if (artistNameDiv.value == "" || albumNameDiv.value == "") {
        alert("Enter the artist and album name in the input fields.");
        return;
    }

    createAlbumArtDiv(artistNameDiv.value, albumNameDiv.value);
}