
const botones = document.querySelectorAll('.btn_smooth_scroll');
const secciones = document.querySelectorAll('.seccion_smooth_scroll');

secciones[0].scrollIntoView({behavior: 'smooth'});


// console.log(secciones[0])
// console.log(document.querySelector('.seccion_smooth_scroll[data-scroll="1"]'))

function navegar(boton){
    if(boton == secciones.length)boton=0;
    document.querySelector(`.seccion_smooth_scroll[data-scroll="${boton+1}"]`).scrollIntoView({behavior: 'smooth'})
}

botones.forEach( function(boton){
boton.addEventListener('click', function(e){
    navegar(parseInt(e.target.id.slice(-1)))
})
})


