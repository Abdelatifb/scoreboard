
let homescoreEL = document.getElementById('homescore')
let homescore = 0

function incrementbutton1() {
    homescore += 1
 homescoreEL.innerText = homescore
}
function incrementbutton2() {
    homescore += 2
 homescoreEL.innerText = homescore
}
function incrementbutton3() {
    homescore += 3
 homescoreEL.innerText = homescore
}


let guestscoreEL = document.getElementById('guestscore')
let guestscore = 0

function incrementbutton01() {
    guestscore += 1
 guestscoreEL.innerText = guestscore
}
function incrementbutton02() {
    guestscore += 2
 guestscoreEL.innerText = guestscore
}
function incrementbutton03() {
    guestscore += 3
 guestscoreEL.innerText = guestscore
}



if (guestscore>homescore) {

} else if(homescore>guestscore) {
    
}else {

}

