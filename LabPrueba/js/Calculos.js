
var datosUi = []; //VALOR GLOBAL DE ARRAY

var totalValoresDeN =[];
var seguirGenerando = true;
var numeroNMenorM = false;

function generarTabla(){
    let semilla = document.getElementById("semilla").value;
    let numeroN = document.getElementById("numeroN").value;
    let numFilas = document.getElementById("totalValores").value;
    let contenedorTabla = document.getElementById("contenedorTabla");
    let orden = 0;
    let mcuadrado, longitud, n ,U_i;
    datosUi = []; // RESETEAR ARRAY DE VALORES PARA QUE NO SE ACMULEN CON CADA ENTRADA...
    totalValoresDeN =[];
    seguirGenerando = true;

    contenedorTabla.innerHTML ="";
    let tabla = "<tbody>";
    
    for(let filas=1; filas<=numFilas; filas++){
        tabla+="<tr>";
        for(let columns=1; columns<=6; columns++){
            if(seguirGenerando == true){
                
                if(columns == 1){
                    orden ++;
                    tabla+="<td>" + orden + "</td>";
                }

                if(columns == 2 && filas==1){
                    tabla+="<td>" + semilla + "</td>";
                }else{
                    if(columns == 2){
                        
                        let copioN = n;
                        tabla+="<td>" + copioN + "</td>";
                    }
                }

                if(columns == 3 && filas ==1){
                    mcuadrado= Math.pow(semilla, 2);
                    tabla+="<td>" + mcuadrado + "</td>";
                }else{
                    if(columns==3){
                        mcuadrado= Math.pow(n, 2);                        
                        longitud = mcuadrado.toString().length;
                        // si la long es impar y n es par
                        if(longitud % 2 == 1 && numeroN % 2 == 0){
                            tabla+="<td>" + mcuadrado +"'0'"+ "</td>";
                        }else{
                            if(longitud % 2 == 0 && numeroN % 2 == 1){
                                tabla+="<td>" + mcuadrado +"'0'"+ "</td>";
                            }else{
                                tabla+="<td>" + mcuadrado + "</td>";
                            }
                            
                        }

                    }
                }

                if(columns ==4){
                    longitud = mcuadrado.toString().length;
                    tabla+="<td>" + longitud + "</td>";
                }

                if(columns == 5){
                    let inicio;
                    let fin;
                    // inicio = Math.round((longitud/2)-2);
                    
                    if(longitud >= parseInt(numeroN,10)){

                        if(parseInt(numeroN,10) == 2){
                            inicio = Math.round((longitud/2)-1);
                        }   
                        if(parseInt(numeroN,10) == 3){
                            if(longitud % 2 == 1){
                                inicio = Math.round((longitud/2)-2);
                            }else{
                                inicio = Math.round((longitud/2)-1);
                            }
                        }
                        if(parseInt(numeroN,10) == 4){
                            inicio = Math.round((longitud/2)-2);
                        }
                        if(parseInt(numeroN,10) == 5){
                            if(longitud % 2 == 1){
                                inicio = Math.round((longitud/2)-3);
                            }else{
                                inicio = Math.round((longitud/2)-2);
                            }
                        }
                        if(parseInt(numeroN,10) == 6){
                            inicio = Math.round((longitud/2)-3);
                        }
                        if(parseInt(numeroN,10) == 7){
                            if(longitud % 2 == 1){
                                inicio = Math.round((longitud/2)-4);
                            }else{
                                inicio = Math.round((longitud/2)-3);
                            }
                            
                        }
                        if(parseInt(numeroN,10) == 8){
                            inicio = Math.round((longitud/2)-4);
                        }
                        if(parseInt(numeroN,10) == 9){
                            if(longitud % 2 == 1){
                                inicio = Math.round((longitud/2)-5);
                            }else{
                                inicio = Math.round((longitud/2)-4);
                            }
                        }

                        // if(longitud % 2 == 1 && numeroN % 2 == 1){
                        //     inicio = Math.round((longitud/2)-3);
                        // }else{
                        //     inicio = Math.round((longitud/2)-2);
                        // }
                        fin = parseInt(numeroN, 10) + inicio;


                    
                        // if(seguirGenerando == true){
                        n = (mcuadrado.toString()).substring(inicio,fin);
                        totalValoresDeN.push(parseInt(n,10));
                        tabla+="<td>" + n + "</td>";
                        // }    
                    }else{
                        numeroNMenorM= true;
                        seguirGenerando= false;
                    }             

                }

                if(columns == 6){
                    U_i = parseFloat("0."+n);
                    tabla+="<td>" + U_i+ "</td>";

                    datosUi.push(U_i); //CARGAR ARRAY DE "Ui"
                    // agregarElementoAlArray(U_i);//CARGAR ARRAY DE "Ui"
                    //si este ultimo valor se encuentra dentro del array deja de iterar..
                    for(let i=0;i<totalValoresDeN.length -1 ;i++){
                        if(n == totalValoresDeN[i]){
                            seguirGenerando = false;
                        }
                    }
                }

            }else{
                if(columns==1 && filas ==  totalValoresDeN.length +1 ){
                    tabla+="<td class='text-danger'>"+"<strong> Semilla " + "'"+ n +"' se repite </strong>" +"</td>";
                    
                }else{
                    if(filas ==  totalValoresDeN.length +1 && (columns == 2 || columns == 3 || columns == 4 || columns == 5 || columns == 6)){
                        tabla+="<td class='text-danger'>" + "---" + "</td>";
                    }
                }
            }

        }
        tabla+="</tr>";
        
    }
    tabla += "</tbody>";
    contenedorTabla.innerHTML = tabla;

    generacionLimitada.innerHTML = "";
    if((numFilas != datosUi.length) && (datosUi.length != 0)){
        generacionLimitada.innerHTML= "Solamente se generaron '"+ datosUi.length+ "' valores válidos. ¿Realizar prueba únicamente con esos valores? " ;
    }
    contenedorTablaUi.innerHTML= "";
}






var x, piezasDefectuosas = 0 , juguetesEnsamblados = 0, cantC10 = 0, cantC5 = 0, TPromEmsamble;
var tiempoEnsambleTotal =0, tiempoEnsamble = 0, linea1 = 0 , linea2 = 0;
var Ui, i=0, p, UiInsuficiente= false;


function imprimir(){
    let resultados = document.getElementById("resultados");
    let valores;
    resultados.innerHTML = ""
}


function calcularDistribuciones(){
    UiInsuficiente = false;
    i=0;
    piezasDefectuosas = 0; 
    juguetesEnsamblados = 0;
    cantC10 = 0;
    cantC5 = 0;
    tiempoEnsamble = 0;
    tiempoEnsambleTotal = 0;
    linea1 = 0;
    linea2 = 0;
    
    
    let resultados = document.getElementById("resultados");
    let valor = document.getElementById("valor");

    for(let c=0; c<40; c++){
        let tiempo = 0;

        if(UiInsuficiente == false){

        while(tiempo<600){ // Teniendo en cuenta que son segundos

            if(datosUi[i] != null || datosUi[i+1] != null){
                Ui = datosUi[i];
                i++; 
                
            }else{
                UiInsuficiente = true;
            }

            x = -2 * Math.log(Ui);

            timpo = tiempo + x;
            geometrica();


            if(datosUi[i] != null || datosUi[i+1] != null){
                Ui = datosUi[i];
                i++; 
                
            }else{
                UiInsuficiente = true;
            }


            if(Ui < 0.25){
              tiempoEnsamble = 5;
            }
            if(Ui > 0.25 && Ui <= 0.45){
              tiempoEnsamble = 10;
            }else{
              tiempoEnsamble = 15;
            }

            tiempoEnsambleTotal = tiempoEnsambleTotal + tiempoEnsamble;
            console.log(tiempoEnsambleTotal);

            if(datosUi[i] != null || datosUi[i+1] != null){
                Ui = datosUi[i];
                i++; 
                
            }else{
                UiInsuficiente = true;
            }



            if(Ui < 0.5){
              linea1 = linea1 +1;
              if(linea1 == 10){
                cantC10 = cantC10 +1;
                linea1 = 0;
              }
            }
            else{
              linea2 = linea2 +1;
              if(linea2 == 5){
                cantC5 = cantC5 +1;
                linea2 = 0;
              }
            }
            juguetesEnsamblados = juguetesEnsamblados + 1;
            tiempo = tiempo + tiempoEnsamble;
        }
           
        }
        c = c + 1
    }
    TPromEmsamble = (tiempoEnsambleTotal/juguetesEnsamblados);
    resultados.innerHTML = ""

    if(UiInsuficiente == true){
        result = "CANTIDAD DE 'UI' INSUFICIENTE PARA COMPLETAR LA SIMULACIÓN.";
    }else{
        result = "<li>Cantidad de piezas defecuosas: "+ piezasDefectuosas +" </li>";
        result += "<li>Cantidad Total de juguetes ensamblados: "+ juguetesEnsamblados +" </li>";
        result += "<li>Cantidad de cajas con 10 juguetes: "+ cantC10 +" </li>";
        result += "<li>Cantidad de cajas con 5 juguetes: "+ cantC5 +" </li>";
        result += "<li>Tiempo promedio de emsamble: "+ TPromEmsamble.toString().substring(0,6) +" seg </li>";
    }
    resultados.innerHTML = result;




}

function geometrica(){
    if(UiInsuficiente == false){
        p= (1- 0.03);
        let bandera = true;
        while(bandera == true){
            if(datosUi[i] != null || datosUi[i+1] != null){
                Ui = datosUi[i];
                i++; 
            }else{
                UiInsuficiente = true;
            }
            if(Ui <= p){ 
                bandera = false;
            }else{
                piezasDefectuosas = piezasDefectuosas + 1;
            }
        }

        p= (1- 0.1);
        bandera = true;
        while(bandera == true){
            if(datosUi[i] != null || datosUi[i+1] != null){
                Ui = datosUi[i];
                i++; 
            }else{
                UiInsuficiente = true;
            }
            if(Ui <= p){
                bandera = false;
            }else{
                piezasDefectuosas = piezasDefectuosas + 1;
            }
        }

        p= (1 - 0.05);
        bandera = true;
        while(bandera == true){
            if(datosUi[i] != null || datosUi[i+1] != null){
                Ui = datosUi[i];
                i++; 
            }else{
                UiInsuficiente = true;
            }
            if(Ui <= p){
                bandera = false;
            }else{
                piezasDefectuosas = piezasDefectuosas + 1;
            }
        }
    }
}



function OcultarMostrarTablaGenerada(){
    let seleccion = document.getElementById('tipoCategoria');
    let contenidoTabla = document.getElementById('contenidoTabla');
    if(seleccion.checked == true && seleccion.value == "Oculta"){
        contenidoTabla.style.display = "none"
    }else{
        contenidoTabla.style.display = "flex"
    }
}