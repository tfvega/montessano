const slicers = document.querySelectorAll('.carrusel_slicer');
const flechas = document.querySelectorAll('.flechas');
const contenedor_puntos = document.querySelector('.contenedor_puntos_slicer')
let current_position=0;






const inicializar  = function (){
    acomodar();
    Crear_puntos();
    setTimeout(()=>{
        slicers.forEach(s =>{
            s.style.transition = 'transform ease-in-out 0.4s';
            punto_activo();
        })
    }, 0)
}

const Crear_puntos = function(){
    slicers.forEach((s,i) =>{
        contenedor_puntos.insertAdjacentHTML('beforeend',`<div class="punto_slicer" data-slicer="${i}"></div>`);
    })

}

const punto_activo = function(){
    document.querySelectorAll('.punto_slicer').forEach((s,i)=>{
        s.classList.remove('punto_slicer--activo')
    })
    document.querySelector(`.punto_slicer[data-slicer="${current_position}"]`).classList.add('punto_slicer--activo')
}

const acomodar = function (){
    // console.log(current_position, "acomodar")
    slicers.forEach(function(s,i) {
        s.style.transform = `translateX(${(i-current_position)*100}%)`
    })   
    document.querySelector(`.punto_slicer[data-slicer="${current_position}"]`) &&  punto_activo();
    
}

const derecha = function(){
    current_position++;
    if(current_position>slicers.length-1)current_position=0;
    acomodar();
    
}

const izquierda = function(){
    current_position--;
    if(current_position<0)current_position=slicers.length-1;
    acomodar();
   
}


// seteando los elementos donde deben de ir y creando los circulos de abajo
inicializar()

// leyendo que flecha se presiona
flechas[0].addEventListener('click',izquierda)
flechas[1].addEventListener('click',derecha)

// creando el carrusel con las flechas del teclado
document.addEventListener('keydown', e =>{
    if(e.key === 'ArrowLeft')izquierda();
    if(e.key === 'ArrowRight')derecha();

})

//respondiendo a los circulos de abajo 
contenedor_puntos.addEventListener('click', e =>{
    // console.log(e.target.dataset.slicer)
    
    if(e.target.dataset.slicer){
        current_position = e.target.dataset.slicer;
    acomodar();
    
    }
})




