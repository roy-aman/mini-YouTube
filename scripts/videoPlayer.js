

let player = document.querySelector("#videoPlayer");


let link = JSON.parse(localStorage.getItem("localVideo"));

let iframe = document.createElement('iframe');
iframe.src = link;
iframe.style.width = "100%";
iframe.style.height ="100%";
iframe.allow = 'fullscreen';

player.append(iframe);

// appendToPlayer(iframe);
// const appendToPlayer = (iframe) => {
//     console.log("noe you are in player")
//     player.append(iframe);
// }
