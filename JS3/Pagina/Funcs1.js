

do{
    let verbo = prompt('ingrese verbo', '');
    let tiempo = prompt('ingrese tiempo', '');

    tiempo = tiempo.toLocaleUpperCase();

    document.write(verbo + ' ' + tiempo + '<br>');

    for(let i = 0; i <= verbo.length; i++){
        if(verbo.charAt(i) == 'a' && verbo.charAt(i+1) == 'r'){
            verboFind(verbo, tiempo, 'ar');
        }
        if(verbo.charAt(i) == 'e' && verbo.charAt(i+1) == 'r'){
            verboFind(verbo, tiempo, 'er');
        }
        if(verbo.charAt(i) == 'i' && verbo.charAt(i+1) == 'r'){
            verboFind(verbo, tiempo, 'ir');
        }
    }
}
while(tiempo != 'T');

function verboFind(word, temp, conj){
    if(temp == 'A'){
        PresenteYo(word, temp, conj);
    }
    if(temp == 'P'){
        PasadoYo(word, temp, conj);
    }
    if(temp == 'F'){
        FuturoYo(word, temp, conj);
    }
}

