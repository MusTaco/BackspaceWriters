function showMenu() {
    let elem = document.getElementById('main-menu');
    // elem.style.display = "block";
    if (elem.style.display == "block") {
        elem.style.display = "none";
    }
    else {
        elem.style.display = "block";
    }
}


function linkClickMe() {
    elem = document.getElementsByClassName('call-to-action')[0]
    elem.href = 'https://mustaco.github.io/BackspaceDevelopers/pages/about-us.html'
    elem.innerText = 'Our Team'
}
linkClickMe()