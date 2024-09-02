const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const loginPopup = document.getElementById('loginPopup');
const signUpPopup = document.getElementById('signUpPopup');
const loginCloseBtn = document.getElementById('loginCloseBtn');
const signUpCloseBtn = document.getElementById('signUpCloseBtn');
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToLogin = document.getElementById('switchToLogin');
const eventForm = document.getElementById('event-form');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
});
    
loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

signUpBtn.addEventListener('click', () => {
    signUpPopup.style.display = 'flex';
});

loginCloseBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

signUpCloseBtn.addEventListener('click', () => {
    signUpPopup.style.display = 'none';
});

switchToSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    loginPopup.style.display = 'none';
    signUpPopup.style.display = 'flex';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signUpPopup.style.display = 'none';
    loginPopup.style.display = 'flex';
});

eventForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventParticipants = document.getElementById('event-participants').value;

    console.log("Event Name:", eventName);
    console.log("Event Date:", eventDate);
    console.log("Event Time:", eventTime);
    console.log("Event Location:", eventLocation);
    console.log("Event Participants:", eventParticipants);

    eventForm.reset();
});