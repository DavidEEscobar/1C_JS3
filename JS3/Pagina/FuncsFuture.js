function FuturoYo(word, temp, conj){    
    let tamanio = word.length;
    word = word.substring(0, tamanio - 2);
    
    if(conj == 'ar'){
        document.write('Yo ' + input + 'o.' + '<br>');
        FuturoTu(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Yo ' + input + 'o.' + '<br>');
        FuturoTu(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Yo ' + input + 'o.' + '<br>');
        FuturoTu(word, temp, conj);
    }
}

function FuturoTu(word, temp, conj){
    if(conj == 'ar'){
        document.write('Tu ' + input + 'as.' + '<br>');
        FuturoEl(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Tu ' + input + 'es.' + '<br>');
        FuturoEl(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Tu ' + input + 'es.' + '<br>');
        FuturoEl(word, temp, conj);
    }
}

function FuturoEl(word, temp, conj){
    if(conj == 'ar'){
        document.write('El ' + input + 'a.' + '<br>');
        FuturoNosotros(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('El ' + input + 'e.' + '<br>');
        FuturoNosotros(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('El ' + input + 'e.' + '<br>');
        FuturoNosotros(word, temp, conj);
    }
}

function FuturoNosotros(word, temp, conj){
    if(conj == 'ar'){
        document.write('Nosotros ' + input + 'amos.' + '<br>');
        FuturoVosotros(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Nosotros ' + input + 'emos.' + '<br>');
        FuturoVosotros(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Nosotros ' + input + 'imos.' + '<br>');
        FuturoVosotros(word, temp, conj);
    }
}

function FuturoVosotros(word, temp, conj){
    if(conj == 'ar'){
        document.write('Vosotros ' + input + 'ais.' + '<br>');
        FuturoEllos(word, temp, conj);
    }
    if(conj == 'er'){
        document.write('Vosotros ' + input + 'eis.' + '<br>');
        FuturoEllos(word, temp, conj);
    }
    if(conj == 'ir'){
        document.write('Vosotros ' + input + 'is.' + '<br>');
        FuturoEllos(word, temp, conj);
    }
}

function FuturoEllos(word, temp, conj){
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