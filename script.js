const CALCULAR= document.getElementById("calcular");
const ERROR= document.getElementById("error");
const VOLUMEN= document.getElementById("vol");
const SUPERFICIECORPORAL= document.getElementById("sc1");
const SUPERFICIECORPORALE= document.getElementById("sc2");
const MANTENIMIENTO= document.getElementById("man");
const MANTENMEDIO= document.getElementById("mm2");
const MÉT1= document.getElementById("mét1");
const MÉT2= document.getElementById("mét2");
const CONTENIDO2= document.getElementById("2");
const SEGAR= document.getElementById("1");

    CALCULAR.addEventListener("click", ()=>{
        const DATO=parseInt(document.getElementById("peso").value)
        if(DATO>0){
        ERROR.style.display= "none"
        let resultados=calcularVolumen(DATO);
        VOLUMEN.innerHTML= resultados.volumenDiario + "cc";
        MANTENIMIENTO.innerHTML= resultados.mantenimiento + " cc/hr";
        MANTENMEDIO.innerHTML= resultados.mm2 + " m+m/2";
        VOLUMEN.style.display="block";
        MANTENIMIENTO.style.display="block";
        MANTENMEDIO.style.display="block";
        MÉT1.style.display="block";
        SEGAR.style.display="block";
        CONTENIDO2.style.display="none";
        
        }else{ 
        ERROR.style.display="block";
        VOLUMEN.style.display="none";
        MANTENIMIENTO.style.display="none";
        MANTENMEDIO.style.display="none";
        MÉT1.style.display="none";
        CONTENIDO2.style.display="none";
        SEGAR.style.display="none";

        }
        
        
    
        })
        
    
        function calcularVolumen(peso){
        if(peso<=30){
        let volumenDiario= 0;
        volumenDiario+= Math.min(peso, 10)*100;
        if(peso>10){
        volumenDiario+= Math.min(peso-10, 10)*50;
        }
        if(peso>20){
        volumenDiario+= Math.min(peso-20,10)*20;    
        }
        let mantenimiento= volumenDiario/24;
        let mm2= mantenimiento*1.5;
        return {
        volumenDiario: Math.round(volumenDiario),
        mantenimiento: Math.round(mantenimiento),
        mm2: Math.round(mm2)};
        }else{ 
        let superficieCorporal = ((peso * 4) + 7)/(peso+90);
        let Diario1= superficieCorporal*1500;
        let Diario2= superficieCorporal*2000;
        
        return {
        Diario1:Math.round(Diario1),
        Diario2:Math.round(Diario2)};
        }}

        // console.log(resultados.volumenDiario);
        // console.log(resultados.mantenimiento);
        // console.log(resultados.mm2);
        // console.log(resultad.volumenDiario1);
        // console.log(resultad.volumenDiario2);
        

    CALCULAR.addEventListener("click", ()=>{
        const DATO=parseInt(document.getElementById("peso").value)
        if(DATO>30){       
        let resultad= calcularVolumen(DATO);
        SUPERFICIECORPORAL.innerHTML=resultad.Diario1 + "cc";
        SUPERFICIECORPORALE.innerHTML=resultad.Diario2 + "cc";
        SUPERFICIECORPORAL.style.display="block"
        SUPERFICIECORPORALE.style.display="block"
        MÉT2.style.display="block";
        VOLUMEN.style.display="none";
        MANTENIMIENTO.style.display="none";
        MANTENMEDIO.style.display="none";
        MÉT1.style.display="none";
        CONTENIDO2.style.display="block";
        SEGAR.style.display="none";
        }else{
        SUPERFICIECORPORAL.style.display="none"
        SUPERFICIECORPORALE.style.display="none"
        MÉT2.style.display="none";
     
        }})
  










