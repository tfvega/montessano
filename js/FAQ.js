
const categorias = document.querySelector('.categorias');
const preguntas = document.querySelector('[data-preguntas="preguntas"]');
const body = document.querySelector('body')


let categoriaElegida;
// console.log(categorias)
// console.log(preguntas)



async  function imprimirCategorias(){
    const peticion = await fetch('js/categorias.json');
    const data = await peticion.json();
    data.forEach(categoria => {
        categorias.insertAdjacentHTML('beforeend',`
        
        <div class="categoria">
        <h1 class="nombre_categoria">${categoria.cveCategoria}</h1> 
        </div>
        `)
    });
    categoriaElegida = data[0]?.cveCategoria &&'TERAP';
    
    imprimirPreguntas();

}

async  function imprimirPreguntas(){
    if(!categoriaElegida)return;
    const peticion = await fetch('js/preguntas.json');
    const data = await peticion.json();
    while (preguntas.firstChild){
        preguntas.removeChild(preguntas.firstChild);
      };
    
    data.forEach((categoria,i) => {
        // console.log(i,categoria)
        if(categoriaElegida == categoria.cveCategoria)
        preguntas.insertAdjacentHTML('beforeend',`
        <div class="contenedor_pregunta" data-pregunta="${i}">
            <div class="contenedor_icon">
                <h1 class="pregunta">${categoria.pregunta}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg> 
            </div>
            <P class="respuesta">${categoria.respuesta}</P>
        </div>
        `);
    });
    // console.log(preguntas)
    
    

}





imprimirCategorias();
categorias.addEventListener('click', e =>{
    categoriaElegida = e.target.textContent
    console.log(categoriaElegida);
    imprimirPreguntas();

})

body.addEventListener('mouseover', e =>{
    const preguntas = document.querySelectorAll('[data-pregunta]')
    // console.log(preguntas)
    if(!e.target.closest('[data-pregunta]')){
        preguntas.forEach((pregunta)=>{
            // console.log(pregunta)
        pregunta.querySelector('.respuesta').style = "max-height: 0;opacity:0;"
        pregunta.querySelector('.icon').style = "transform:rotate(0deg);"
        })
        
        return;
    }

    const padre = e.target.closest('[data-pregunta]');
    // console.log(e.target.closest('[data-pregunta]'));
    padre.querySelector('.respuesta').style = "max-height: 500px;opacity:1;"
    padre.querySelector('.icon').style = "transform:rotate(180deg);stroke:var(--verde_primario);"
    // console.log(padre.querySelector('.respuesta'));
    
})

