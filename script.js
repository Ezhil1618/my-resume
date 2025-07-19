const name = 'Your Name';
const title = 'Your Title';

let i = 0;
let j = 0;

function typeName() {
    if (i < name.length) {
        document.getElementById('name').innerHTML += name.charAt(i);
        i++;
        setTimeout(typeName, 150);
    }
}

function typeTitle() {
    if (j < title.length) {
        document.getElementById('title').innerHTML += title.charAt(j);
        j++;
        setTimeout(typeTitle, 150);
    }
}

window.onload = function() {
    typeName();
    setTimeout(typeTitle, 2000);
}

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            section.classList.add('visible');
        }
    });
});
