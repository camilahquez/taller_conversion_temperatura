

function convertirTemperatura() {
    let temperatura = document.getElementById("temperatura");
    let temC = parseFloat(temperatura.value);
    let temF;
    let temK;
    let temp = [];
    const listatemp = document.getElementById("listaTemp");
    listatemp.innerHTML = "";
     
    if (isNaN(temC) === false &&  temC >= -273.15) {
            
            temF = (temC *(9/5))+32;
            temK = temC + 273.15;
            let tempKText ="la temperatura de " + temC + "ºC" + " en Kelvin es : " + temK + "K";
            let tempFTexT = "la temperatura de " + temC + "ºC" + " en fahrenheit es : " + temF + "ºF";
            temp.push(tempFTexT);
            temp.push(tempKText);
            console.log("la temperatura de " + temC + "ºC" + " en Kelvin es : " + temK + "K");
            console.log("la temperatura de " + temC + "ºC" + " en fahrenheit es : " + temF + "ºF");
            mostrarTemperatura();
            const p = document.getElementById("error")
            p.textContent= "";
        }else {
        const p = document.getElementById("error")
        p.textContent= "ingreso un valor no valido, recuerda, no extisten temperaturas por debajo de -273.15ºC. ingrese otro valor (Valores numericos)";
        temperatura.value = "";
        console.log("error")
    }  
    
       

    
     function mostrarTemperatura() {
        for (let i = 0; i < temp.length; i++){
            const li =document.createElement("li");
            li.textContent = temp[i];
            listatemp.appendChild(li);
            temperatura.value = "";
        }
        
     }
    }
            
           


