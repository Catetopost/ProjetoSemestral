

window.sr = ScrollReveal({ reset: false});

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('light')
    body.classList.toggle('light')

})


//ANIMATION/////////////////////////////////////////////////////////////////////////////////////////////////////////
sr.reveal('#logovaca', {
    duration: 3000,
    rotate: { x:60, y:0, z:10 },
    distance:'90px',

});

sr.reveal('#title', {
    duration: 1000,
    delay: 500,
    distance: '90px',
});

sr.reveal('.text', {
    duration: 1000,
    delay: 300, 
    distance: '90px',
});

sr.reveal('#pessoa', {
    duration: 2000,
    delay: 1000, 
    distance: '90px',
});

sr.reveal('.pdt', {
    duration: 1500,
    delay: 500,
    distance: '90px',
    
});

sr.reveal('#prod', {
    duration: 1000,
    delay: 500,
    distance: '90px',
});

sr.reveal('#pdt2', {
    duration: 1500,
    delay: 500,
    distance: '90px',
});

sr.reveal('#sac', {
    duration: 2000,
    delay: 1000,
    distance: '90px',
});

sr.reveal('#email', {
    duration: 2000,
    delay: 1300,
    distance: '90px',
});

sr.reveal('#loc', {
    duration: 2000,
    delay: 1600,
    distance: '90px',
});

sr.reveal('#tel', {
    duration: 2000,
    delay: 1900,
    distance: '90px',
});