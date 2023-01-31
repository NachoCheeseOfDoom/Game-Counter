const scorHome = document.getElementById('scoreHome');
const scoreGuest = document.getElementById('scoreGuest');
const houseName = document.getElementById('home-name');
const guestName = document.getElementById('guest-name');
const equalEl = document.getElementById('equal-el');

let pointsHome = 0;
let pointsGuest = 0;

function plus1Home() {
  pointsHome += 1;
  scorHome.innerHTML = pointsHome;
  if (pointsHome > pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = 'none';
    equalEl.style.visibility = ' hidden';
  }
  else if (pointsHome == pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = '2px dotted yellow';
    equalEl.style.visibility = ' visible';
  }
}

function plus2Home() {
  scorHome.innerHTML = pointsHome += 2;
  if (pointsHome > pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = 'none';
    equalEl.style.visibility = ' hidden';
  }
  else if (pointsHome == pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = '2px dotted yellow';
    equalEl.style.visibility = ' visible';
  }
}

function plus3Home() {
  scorHome.innerHTML = pointsHome += 3;
  if (pointsHome > pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = 'none';
    equalEl.style.visibility = ' hidden';
  }
  else if (pointsHome == pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = '2px dotted yellow';
    equalEl.style.visibility = ' visible';
  }
}

// =============================================================
// =============================================================

function plus1Guest() {
  scoreGuest.innerHTML = pointsGuest += 1;
  if (pointsGuest > pointsHome) {
    guestName.style.border = '2px dotted yellow';
    houseName.style.border = 'none';
    equalEl.style.visibility = ' hidden';
  }
  else if (pointsHome == pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = '2px dotted yellow';
    equalEl.style.visibility = ' visible';
  }
}

function plus2Guest() {
  scoreGuest.innerHTML = pointsGuest += 2;
  if (pointsGuest > pointsHome) {
    guestName.style.border = '2px dotted yellow';
    houseName.style.border = 'none';
    equalEl.style.visibility = ' hidden';
  }
  else if (pointsHome == pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = '2px dotted yellow';
    equalEl.style.visibility = ' visible';
  }
}

function plus3Guest() {
  scoreGuest.innerHTML = pointsGuest += 3;
  if (pointsGuest > pointsHome) {
    guestName.style.border = '2px dotted yellow';
    houseName.style.border = 'none';
    equalEl.style.visibility = ' hidden';
  }
  else if (pointsHome == pointsGuest) {
    houseName.style.border = '2px dotted yellow';
    guestName.style.border = '2px dotted yellow';
    equalEl.style.visibility = ' visible';
  }
}


function restPoints() {
  scorHome.innerHTML = pointsHome = 0;
  scoreGuest.innerHTML = pointsGuest = 0;
  houseName.style.border = 'none';
  guestName.style.border = 'none';
  equalEl.style.visibility = ' hidden';
}



