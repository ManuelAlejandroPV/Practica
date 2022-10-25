var request = new XMLHttpRequest();
var url     = "../json/datos.json";
var tabla   =document.getElementById("tabla");

request.open("GET", url, true);
request.send(null);
request.onreadystatechange = (e) => {

    if(request.readyState === 4 && request.status === 200){
const DATOS = JSON.parse(request.responseText);
//console.log(DATOS);(muestra el arreglo)

let tabla_p = document.createElement("table");

tabla_p.setAttribute("border", "1");

let fila    = document.createElement("tr");
let titulos = ["ID", "NAME", "EMAIL"];

for(let i=0; i<titulos.length;i++){
    let c1  = document.createElement("th");
    let t1  = document.createTextNode(titulos[i]);
    c1.appendChild(t1);
    fila.appendChild(c1);
}//for
tabla_p.appendChild(fila);

//leer el JSON
for(let i=0; i<DATOS.datos.length; i++){
    let fila = document.createElement('tr');
    let contenido =[DATOS.datos[i].id,DATOS.datos[i].name,DATOS.datos[i].email];
for(let j=0; j<contenido.length; j++){
    let c1   =document.createElement('td');
    let t1 = document.createTextNode(contenido[j]);
    c1.appendChild(t1);
    fila.appendChild(c1);
    tabla_p.appendChild(fila);
}
    /*let c1   =document.createElement('td');
    let t1 = document.createTextNode(DATOS.datos[i].nombre);
    c1.appendChild(t1);
    fila.appendChild(c1);
    let c2 = document.createElement('td');
    let t2 = document.createTextNode(DATOS.datos[i].id);
    c2.appendChild(t2);
    fila.appendChild(c2);
    let c3 = document.createElement('td');
    let t3 = document.createTextNode(DATOS.datos[i].edad);
    c3.appendChild(t3);
    fila.appendChild(c3);
    tabla_p.appendChild(fila);*/
}

tabla.appendChild(tabla_p);
    }//if   

};
/*
1. 0 no se ha descargado el archivo(no lo ha leido)
2. 1 Cargando (lo esta leyendo)
3. 2 CARGADO (lo esta terminando de leer)
4. 3 actualizando
5. 4 Completo (ya se puede utilizar)


Status
100 informacion
200 ok (todo esta bien)
300 redireccionamiento
400 no encontrado
500 errores de programacion 
*/ 