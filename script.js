// "Join Now" tugmasi
document.querySelector('.hero button').addEventListener('click', function () {
    alert('Welcome to CodeStar Academy! Let\'s start your web development journey.');
});

// "Learn More" tugmalari
const learnMoreButtons = document.querySelectorAll('.courses .course button');
learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const courseNames = [
            'Web Development Bootcamp: Learn how to build websites from scratch.',
            'Advanced CSS & Design: Master animations, Flexbox, Grid and more!'
        ];
        alert(courseNames[index]);
    });
});

// "Contact Us" tugmasi
document.querySelector('.contact button').addEventListener('click', function () {
    alert('You can contact us at: asiloke797@gmail.com');
});
