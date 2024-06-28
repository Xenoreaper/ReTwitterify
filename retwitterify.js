setInterval(check, 100);

function check() {
    if(document.title.search(/X$/) != -1) {
        console.log("Check returns: " + document.title.search(/X$/));
        update();
    } // there could be an else here for debugging
}

function update() {
    //Title
    document.title = document.title.replace("/ X", "/ Twitter");

    //FavIcon
    document.querySelector("link[rel~='icon']").setAttribute("href", "https://abs.twimg.com/favicons/twitter-pip.2.ico");

    //Logo
    // let logo = document.getElementsByClassName("r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp")[0];
    if(document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk")[0] != undefined) {
        document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk")[0].getElementsByTagName("path")[0].outerHTML = '<path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65, 65 0 0 1 630, 425 Z" fill="#3BA9EE"></path>';
        document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk")[0].setAttribute("viewBox", "328 355 335 276");
    } // there could be an else here for debugging

    //Loading Logo 
    // this will stay dead code unless I find a way to change the logo while twitter is loading, as of right now it either loads too fast or I keep it from loading (in which case it does work)
    if(document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-lrvibr r-m6rgpd r-1p0dtai r-1nao33i r-wy61xf r-zchlnj r-1d2f490 r-ywje51 r-u8s1d r-ipm5af r-1blnp2b")[0] != undefined) {
        document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-lrvibr r-m6rgpd r-1p0dtai r-1nao33i r-wy61xf r-zchlnj r-1d2f490 r-ywje51 r-u8s1d r-ipm5af r-1blnp2b")[0].setAttribute("viewBox", "328 355 335 276");
        document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-lrvibr r-m6rgpd r-1p0dtai r-1nao33i r-wy61xf r-zchlnj r-1d2f490 r-ywje51 r-u8s1d r-ipm5af r-1blnp2b")[0].getElementsByTagName("path")[0].outerHTML = '<path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65, 65 0 0 1 630, 425 Z"></path>';
    } // there could be an else here for debugging

    //Login Logo
    if(document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr")[0] != undefined) {
        document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr")[0].setAttribute("viewBox", "328 355 335 276");
        document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr")[0].getElementsByTagName("path")[0].outerHTML = '<path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65, 65 0 0 1 630, 425 Z"></path>';
    } // there could be an else here for debugging

}