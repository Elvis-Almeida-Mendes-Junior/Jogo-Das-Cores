function backgroundColor(min,max) {//gera um numero aleatorio entre dois inteiros
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  

//gerar uma cor diferente para cada button

function makingAColor(){//essa função cria uma cor no formato HEXADECIMAL de maneira aleatoria
    var color = '#';
    const letters = '0123456789ABCDEF'; 
    for(let j = 0; j < 6;j++){

        color+=(letters[Math.floor(Math.random() * 16)]);
        
    }
    return color;
}


function main(){
    var header = document.getElementById('header');//busca o elemento header
    var colors = [];//array de cores
    const buttons = document.querySelectorAll('button');//chama todos os buttons
    for(let index = 0;index < buttons.length;index++){//percore cada um dos buttons adicionando uma cor diferente en cada um deles

        colors.push(makingAColor());//todas as cores geradas e adicioandas nos buttons são armazenadas no array de cores
        buttons[index].style.backgroundColor = colors[index];

        buttons[index].addEventListener('click',function(){
            if(buttons[index].style.backgroundColor == header.style.backgroundColor)//testa o valor do button clicado
            {
                alert('Parabens!! Você Acertou');
                window.location.reload(true);//da um refresh na pagina
            }
            else{
                alert('Que pena Tente Novamente!!!!')
                window.location.reload(true);
            }
        });
    }

    
    var NameColorTitle = document.getElementById('NameColorTitle');
    var indexColor = backgroundColor(0,colors.length -1);//busca o index de uma cor aleatoria dentro do array de cores
    var headerColor  = header.style.backgroundColor = colors[indexColor];//seta essa cor
    NameColorTitle.innerHTML = header.style.backgroundColor//exibe o rgb da cor setada
}
main();