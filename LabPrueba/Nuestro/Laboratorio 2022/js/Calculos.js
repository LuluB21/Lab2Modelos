var rest = document.getElementById("id-gen").value;
var array = [];

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








/*DISTRIBUCIONES DE PROBABILIDAD */
var duracionVentas=0, cervezasArtesanales=0, tragos=0, bebidasSAlcohol=0;
var simulacionMes = 0, i=0;
var UiInsuficiente= false;
var grupoMenorA4=0, bebida;
var cantidadBebidasVendidas;

function calcularDistribuciones(){
    for (simulacionMes=0; simulacionMes<30; simulacionMes++) {
        if(datosUi[i] != null || datosUi[i+1] != null){
            Ui = datosUi[i];
            i++;
        }

        x = -(1/7) * Math.log(Ui); /*Coloco 1/7 porque en una noche los clientes tienen 7 horas para solicitar alguna bebida*/
                                                /*VERIFICAR QUE VA*/

        /*duracionVentas = duracionVentas + x;*//*ACUMULA TODOS LOS VALORES */
        
        normal();

        bebida = 1;

        if(datosUi[i] != null || datosUi[i+1] != null){
            Ui = datosUi[i];
            i++;
        }

        if(bebida <= cantidadBebidasVendidas) {
            for (bebida = 1; bebida <= cantidadBebidasVendidas; bebida++) {
                binomial();
                bebida = bebida + 1;
            }
        } else {
            geometrica();
        }
        simulacionMes = simulacionMes + 1;
    }
    impresionPorPantalla();
}

var sum= 0;

function normal() {
    for (var a = 1; a <= 12; a++) {
        sum= sum + datosUi[a]; 
    }
    cantidadBebidasVendidas = 80 * (sum - 6) + 300
}

function binomial() {
        /*if(datosUi[bebida]< 0.25) {
            bebidasSAlcohol= bebidasSAlcohol+1;
        }
        if(datosUi[bebida] > 0.25 && datosUi[bebida] <=0.45){
            cervezasArtesanales = cervezasArtesanales + 1;
        } else {
            tragos= tragos+1;
        }*/

        /*if (datosUi[bebida]>=0.45) {
            cervezasArtesanales= cervezasArtesanales+1;
        }
        if (datosUi[bebida]>=0.30) {
                tragos= tragos+1;
        } else{
            bebidasSAlcohol= bebidasSAlcohol+1
        }*/

        if(datosUi[bebida]< 0.25) {
            bebidasSAlcohol= bebidasSAlcohol+1;
        }
        if(datosUi[bebida] >= 0.30){
            tragos= tragos+1;
        } 
        if(datosUi[bebida] >= 0.45) {
            cervezasArtesanales = cervezasArtesanales + 1;
        }
}


function geometrica () {
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

var resultado1, resultado2, resultado3, resultado4, resultado5, resultado6;

function impresionPorPantalla() {
    resultado1= document.getElementById('duracion');
    resultado1.innerHTML= duracionVentas;

    resultado2= document.getElementById('total');
    resultado2.innerHTML= cantidadBebidasVendidas;

    resultado3= document.getElementById('cervezas');
    resultado3.innerHTML= cervezasArtesanales;

    resultado4= document.getElementById('tragos');
    resultado4.innerHTML= tragos;

    resultado5= document.getElementById('bebidas');
    resultado5.innerHTML= bebidasSAlcohol;

    resultado6= document.getElementById('grupos');
    resultado6.innerHTML= grupoMenorA4;
}
