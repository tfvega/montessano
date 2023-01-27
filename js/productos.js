const items = document.getElementById('insertar_productos');
let contenedorItems;
let cantidadActual =0;
let cantidadMaxima = 0;
let cantidadItem ;


document.addEventListener('load',consultar())

async function consultar(){

    try{
        const res = await fetch("js/productos.json");
        //const res = await fetch("js/productos.json", {mode: 'no-cors'});
        //const res = await fetch("js/productos.json", {mode: 'cors'});
        const data = await res.json();
        // console.log(res)
        // console.log(data);
        imprimirproductos(data);
    }catch(error){
        // console.log(error)
    }
}


function imprimirproductos(data){

    data.forEach((producto,i) =>{
            // console.log(producto);
        try{
            items.insertAdjacentHTML('beforeend',`
            <div class="card_body data-idProducto:"${i}"> 
            <div class="card_img" style="background-image: url(img/prod/${producto.foto})"></div>
                <div class="card_info">
                        <h5 class="card_nombre">${producto.nombre}</h5>
                        
                        <p class="card_descripcion">${producto.descripcion}</p>

                        

                      
                     

                </div>
            </div>        
            `);
            
        }catch(e){
            console.log(e, 'error');
        }
    })
}

const seleccion = function(e){
    contenedorItems = e.target.closest(".card_contenedor_cantidad");
    cantidadItem =contenedorItems.querySelector('.card_cantidad');
    cantidadActual = parseInt(cantidadItem.textContent);
    cantidadMaxima =parseInt( e.target.closest(".card_info").querySelector('.card_cantidadMaxima').textContent);
}

const restar = function(e) {
    seleccion(e)
    contenedorItems.querySelector('.mas').classList.remove('opacidadMedia')
    contenedorItems.querySelector('.mas').classList.add('giro_icon')
    if(cantidadActual <1)return;
    cantidadItem.textContent = --cantidadActual;
    cantidadActual <= 0 && contenedorItems.querySelector('.menos').classList.add('opacidadMedia');
    cantidadActual <= 0 && contenedorItems.querySelector('.menos').classList.remove('giro_icon');
}
const sumar = function(e) {
    seleccion(e);
    contenedorItems.querySelector('.menos').classList.remove('opacidadMedia')
    contenedorItems.querySelector('.menos').classList.add('giro_icon')
    if(cantidadActual >= cantidadMaxima) return;
    cantidadItem.textContent = ++cantidadActual;
    cantidadActual >= cantidadMaxima && contenedorItems.querySelector('.mas').classList.add('opacidadMedia');
    cantidadActual >= cantidadMaxima && contenedorItems.querySelector('.mas').classList.remove('giro_icon');
}

items.addEventListener('click', e =>{
    if(e.target.classList.contains('menos'))restar(e);
    if(e.target.classList.contains('mas'))sumar(e);
})