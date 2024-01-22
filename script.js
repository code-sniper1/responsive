const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navbar.classList.toggle('v-class');
    navList.classList.toggle('v-class');
});

function showBuyNowNotice() {
    alert("Thank you for your purchase! Your order will be processed shortly.");
}
