function PasadoYo(word, temp, conj){    
    let tamanio = word.length;
    word = word.substring(0, tamanio - 2);
    
    if(conj == 'ar'){
        document.write('Yo ' + input + 'o.' + '<br>');
        PasadoTu(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Yo ' + input + 'o.' + '<br>');
        PasadoTu(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Yo ' + input + 'o.' + '<br>');
        PasadoTu(word, temp, conj);
    }
}

function PasadoTu(word, temp, conj){
    if(conj == 'ar'){
        document.write('Tu ' + input + 'as.' + '<br>');
        PasadoEl(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Tu ' + input + 'es.' + '<br>');
        PasadoEl(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Tu ' + input + 'es.' + '<br>');
        PasadoEl(word, temp, conj);
    }
}

function PasadoEl(word, temp, conj){
    if(conj == 'ar'){
        document.write('El ' + input + 'a.' + '<br>');
        PasadoNosotros(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('El ' + input + 'e.' + '<br>');
        PasadoNosotros(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('El ' + input + 'e.' + '<br>');
        PasadoNosotros(word, temp, conj);
    }
}

function PasadoNosotros(word, temp, conj){
    if(conj == 'ar'){
        document.write('Nosotros ' + input + 'amos.' + '<br>');
        PasadoVosotros(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Nosotros ' + input + 'emos.' + '<br>');
        PasadoVosotros(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Nosotros ' + input + 'imos.' + '<br>');
        PasadoVosotros(word, temp, conj);
    }
}

function PasadoVosotros(word, temp, conj){
    if(conj == 'ar'){
        document.write('Vosotros ' + input + 'ais.' + '<br>');
        PasadoEllos(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Vosotros ' + input + 'eis.' + '<br>');
        PasadoEllos(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Vosotros ' + input + 'is.' + '<br>');
        PasadoEllos(word, temp, conj);
    }
}

function PasadoEllos(word, temp, conj){
    if(conj == 'ar'){
        document.write('Ellos ' + input + 'an.' + '<br>');
    }
    if(conj == 'er'){
        document.write('Ellos ' + input + 'en.' + '<br>');
    }
    if(conj == 'ir'){
        document.write('Ellos ' + input + 'en.' + '<br>');
    }
}