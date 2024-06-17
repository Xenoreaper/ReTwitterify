setInterval(update, 1000);

function update() {
    //Logo
    // let logo = document.getElementsByClassName("r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp")[0];
    document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk")[0].getElementsByTagName("path")[0].outerHTML = '<path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65, 65 0 0 1 630, 425 Z" fill="#3BA9EE"></path>';
    document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk")[0].setAttribute("viewBox", "328 355 335 276");

    //Title
    document.querySelector('title').textContent = document.querySelector('title').text.replace("/ X", "/ Twitter");

    //FavIcon
    document.querySelector("link[rel~='icon']").setAttribute("href", "https://abs.twimg.com/favicons/twitter-pip.2.ico");
}