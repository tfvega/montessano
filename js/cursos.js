const cursos = document.querySelector('.contenedor_cursos');


const url_actual = window.location.search;
let path = "js/cursos.json"


if(url_actual.indexOf('seminarios')!=-1) path = "js/seminarios.json";
// console.log(url_actual);


document.addEventListener('load',consultar())



async function consultar(){

    try{
        const res = await fetch(path);
        const data = await res.json();
        // console.log(res)
        // console.log(data);
        imprimirproductos(data);
    }catch(error){
        // console.log(error)
    }
}


function imprimirproductos(data){

    data.forEach((curso,i) =>{
            // console.log(curso);
        try{

            
            cursos.insertAdjacentHTML('beforeend',`
            <div class="curso" data-curso="${i}">
                    <div class="img_curso" style="
                    background-image: url(${curso.url_img});
                    background-size: ${curso.curso =='LA COCINA DE EVA.'?'30':'50'}%;
                    "></div>
                    <div class="nombre_curso">
                    <h1 >${curso.curso}</h1>
                    </div>
          </div> 
          

            `);
            
        }catch(e){
            // console.log(e, 'error');
        }
    })
}

