function PresenteYo(word, temp, conj){    
    let tamanio = word.length;
    word = word.substring(0, tamanio - 2);
    
    if(conj == 'ar'){
        document.write('Yo ' + word + 'o.' + '<br>');
        PresenteTu(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Yo ' + word + 'o.' + '<br>');
        PresenteTu(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Yo ' + word + 'o.' + '<br>');
        PresenteTu(word, temp, conj);
    }
}

function PresenteTu(word, temp, conj){
    if(conj == 'ar'){
        document.write('Tu ' + word + 'as.' + '<br>');
        PresenteEl(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Tu ' + word + 'es.' + '<br>');
        PresenteEl(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Tu ' + word + 'es.' + '<br>');
        PresenteEl(word, temp, conj);
    }
}

function PresenteEl(word, temp, conj){
    if(conj == 'ar'){
        document.write('El ' + word + 'a.' + '<br>');
        PresenteNosotros(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('El ' + word + 'e.' + '<br>');
        PresenteNosotros(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('El ' + word + 'e.' + '<br>');
        PresenteNosotros(word, temp, conj);
    }
}

function PresenteNosotros(word, temp, conj){
    if(conj == 'ar'){
        document.write('Nosotros ' + word + 'amos.' + '<br>');
        PresenteVosotros(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Nosotros ' + word + 'emos.' + '<br>');
        PresenteVosotros(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Nosotros ' + word + 'imos.' + '<br>');
        PresenteVosotros(word, temp, conj);
    }
}

function PresenteVosotros(word, temp, conj){
    if(conj == 'ar'){
        document.write('Vosotros ' + word + 'ais.' + '<br>');
        PresenteEllos(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Vosotros ' + word + 'eis.' + '<br>');
        PresenteEllos(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Vosotros ' + word + 'is.' + '<br>');
        PresenteEllos(word, temp, conj);
    }
}

function PresenteEllos(word, temp, conj){
    if(conj == 'ar'){
        document.write('Ellos ' + word + 'an.' + '<br>');
    }
    if(conj == 'er'){
        document.write('Ellos ' + word + 'en.' + '<br>');
    }
    if(conj == 'ir'){
        document.write('Ellos ' + word + 'en.' + '<br>');
    }
}