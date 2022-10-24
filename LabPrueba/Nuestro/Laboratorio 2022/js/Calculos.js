var rest = document.getElementById("id-gen").value;

function cargarDatos(){
    document.getElementById('t01').innerHTML=`
        <table id="t01" style="width: 600px;" >
        <tr>
            <th></th>
            <th></th> 
            <th>CALCULO 1</th>
            <th>CALCULO 2</th>
            <th>CALCULO 3</th>
            <th></th>
        </tr>   
        <tr>
            <th id="tf-1" value="0">Orden</th>
            <th>X<sub>n</sub></th> 
            <th>a * X<sub>n</sub></th>
            <th>CALCULO 1 + c</th>
            <th>CALCULO 2 mod m</th>
            <th>U<sub>i</sub></th>
        </tr>   
        </table>`

    /*Creamos variables para guardar los datos guardados, y asi generar la tabla con la serie de valores aleatorios */
    var a1 = document.getElementById("id-semilla").value;
    var a2 = document.getElementById("id-a").value;
    var a3 = document.getElementById("id-m").value;
    var a4 = document.getElementById("id-c").value;
    var semilla =parseInt(a1);
    var a = parseInt(a2);
    var m = parseInt(a3);
    var c = parseInt(a4);
    var stop = parseInt(rest);

    // console.log(`a: ${a} m: ${m} c: ${c}`);
    /*Si en algún input le falta rellenar valores, saltará un alerta para que no se genere la tabla*/
    if(a1 =="" || a2 =="" || a3=="" || a4==""){
        alert("Por favor llenar todos los campos");
        return;
    }
    carga(semilla, a, c, m, 1, stop,rest);

}


var datosUi = []; 

/*Carga de valores en la tabla */
function carga(semilla, varA, varC, varM, numeral, stop,rest){
    if(numeral==(stop+1)){
        return;
    }

    var calculo1 = semilla * varA;
    var calculo2 = calculo1 + varC;
    var calculo3 = mod(calculo2,varM);
    var ui = (calculo3/varM);
    var fila = `
    <tr>
        <td>${numeral++}</td>
        <td>${semilla}</td>
        <td>${calculo1}</td>
        <td>${calculo2}</td>
        <td>${calculo3}</td>
        <td>${ui}</td>
    </tr>`;

    document.getElementById('t01').innerHTML+=fila;

    datosUi.push(ui); //CARGAR ARRAY DE "Ui"
    


    carga(calculo3,varA,varC, varM, numeral, stop,rest);

    array.push(ui);
    console.log(array);
    calcularDistribuciones(array);

}

/*calculo del resto */
function mod(vC2, vM){
    if(vM > vC2)
        return vC2;
    do{
        vC2 = vC2 - vM;
    }while(vC2 > vM );

    return vC2;
}

var duracionVentas=0, cervezasArtesanales=0, tragos=0, bebidasSAlcohol=0;
var simulacionMes = 0, i=0;
var UiInsuficiente= false;
var grupoMenorA4=0, bebida;

function calcularDistribuciones(aleatorios){
    for(let c=0; c<30; c++) {
        if(datosUi[i] != null || datosUi[i+1] != null){
            Ui = aleatorios[i];
            i++;
        }

        duracionVentas = -7 * Math.log(Ui);
        
        let resultado1= document.getElementById('duracion');
        resultado1.innerHTML= duracionVentas;

        normal(aleatorios);

        bebida = 1;

        if(datosUi[i] != null || datosUi[i+1] != null){
            Ui = datosUi[i];
            i++;
        }

        if(bebida <= cantidadBebidasVendidas) {
<<<<<<< HEAD
            binomial(cantidad);
=======
            binomial();
>>>>>>> 00c23d127aebd5832ac89ec8b04609e6b10c110d
            bebida = bebida + 1;

        } else {
            geometrica();
        }
        simulacionMes = simulacionMes + 1;
    }
    impresionPorPantalla();
}

function normal(aleatorios) {
    var sum= 0;
    var i=1;
    for (i = 1; i <= 12; i++) {
<<<<<<< HEAD
        sum= sum + aleatorios[i] ; 
=======
        sum= sum + datosUi[i] ; 
>>>>>>> 00c23d127aebd5832ac89ec8b04609e6b10c110d
    }
    cantidadBebidasVendidas = 80*(sum-6)+300
    let resultado2= document.getElementById('total');
    resultado2.innerHTML= cantidadBebidasVendidas;
    binomial(cantidadBebidasVendidas);
}

<<<<<<< HEAD
function binomial( cantidadBebidas) {
    for (bebida = 1; bebida <= cantidadBebidas; bebida++) {
=======
function binomial() {
    for (bebida = 1; bebida <= cantidadBebidasVendidas; bebida++) {
>>>>>>> 00c23d127aebd5832ac89ec8b04609e6b10c110d
        if (datosUi[bebida]>=0.45) {
            cervezasArtesanales= cervezasArtesanales+1;
        }
        else {
            if (datosUi[bebida]>=0.30) {
                tragos= tragos+1;
            }
            else{
                bebidasSAlcohol= bebidasSAlcohol+1
            }
        }
    }
    let resultado2= document.getElementById('cervezas');
    resultado2.innerHTML= cervezasArtesanales;

    let resultado3= document.getElementById('tragos');
    resultado3.innerHTML= tragos;

    let resultado4= document.getElementById('bebidasSAlcohol');
    resultado4.innerHTML= bebidasSAlcohol;

}

function geometrica () {
    /*El bar cuenta con una barra para 10 personas, 10 mesas para 2 personas y 3 mesones para grupos de hasta 6 personas.
    La probabilidad de que ingrese un grupo de más de 4 personas es de 2 de cada 5 grupos que ingresan al bar. */
    /*Cantidad de grupos de menos de 4 personas que llegaron al bar hasta que ingresó un grupo conformado por más de 4 personas*/

    p = 0.4;
    let bandera = true;
    while(bandera == true){
        if(datosUi[i] != null || datosUi[i+1] != null){
            Ui = datosUi[i];
            i++; 
        }
        if(Ui <= p) {
            bandera = false;
        } else {
            grupoMenorA4 = grupoMenorA4 + 1;
        }
    }
}

<<<<<<< HEAD
/*function impresionPorPantalla() {
    let resultado1= document.getElementById('duracion');
    resultado1.innerHTML= duracionVentas;
    console.log(duracionVentas);

    let resultado2= document.getElementById('cervezas');
    resultado2.innerHTML= cervezasArtesanales;
    console.log(cervezasArtesanales);

    let resultado3= document.getElementById('tragos');
    resultado3.innerHTML= tragos;
    console.log(tragos);

    let resultado4= document.getElementById('bebidasSAlcohol');
    resultado4.innerHTML= bebidasSAlcohol;
    console.log(bebidasSAlcohol);

    let resultado5= document.getElementById('grupos');
    resultado5.innerHTML= grupoMenorA4;
    console.log(grupoMenorA4);
}
*/
=======
function impresionPorPantalla() {
>>>>>>> 00c23d127aebd5832ac89ec8b04609e6b10c110d

