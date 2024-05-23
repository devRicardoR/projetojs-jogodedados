alert('Hello developed, welcome to my project!')

function jogar() {
    
    var randomNumberPlayer1Dice = Math.floor(Math.random() * 6) + 1;// Gera um número aleatório entre 1 e 6 para o dado do jogador 1
    
    var randomSidePlayer1Dice = "dice" + randomNumberPlayer1Dice + ".png";// Constrói o nome do arquivo da imagem correspondente ao número gerado para o dado do jogador 1
    
    var randomImageAtributePlayer1 = "/assets/ImagensDados/" + randomSidePlayer1Dice;// Constrói o caminho completo para a imagem do dado do jogador 1
    
    var imagePlayer1 = document.querySelector('.img1');// Seleciona o elemento da imagem do jogador 1 no documento HTML
    
    imagePlayer1.setAttribute('src', randomImageAtributePlayer1);// Define o atributo 'src' da imagem do jogador 1 para o caminho da imagem correspondente ao número gerado
    
    var randomNumberPlayer2Dice = Math.floor(Math.random() * 6) + 1;// Gera um número aleatório entre 1 e 6 para o dado do jogador 2
    
    var randomSidePlayer2Dice = "dice" + randomNumberPlayer2Dice + ".png";// Constrói o nome do arquivo da imagem correspondente ao número gerado para o dado do jogador 2
    
    var randomImageAtributePlayer2 = "/assets/ImagensDados/" + randomSidePlayer2Dice;// Constrói o caminho completo para a imagem do dado do jogador 2
    
    var imagePlayer2 = document.querySelector('.img2');// Seleciona o elemento da imagem do jogador 2 no documento HTML
    
    imagePlayer2.setAttribute('src', randomImageAtributePlayer2);// Define o atributo 'src' da imagem do jogador 2 para o caminho da imagem correspondente ao número gerado
    
    if (randomNumberPlayer1Dice > randomNumberPlayer2Dice) {// Compara os números gerados para determinar o vencedor
        // Se o número do jogador 1 for maior, exibe a mensagem de vitória do jogador 1
        document.querySelector('h1').innerHTML = '🏆 Player 1 Wins! 🏆';
    } else if (randomNumberPlayer1Dice < randomNumberPlayer2Dice) {
        // Se o número do jogador 2 for maior, exibe a mensagem de vitória do jogador 2
        document.querySelector('h1').innerHTML = '🏆 Player 2 Wins! 🏆';
    } else {
        // Se os números forem iguais, exibe a mensagem de empate
        document.querySelector('h1').innerHTML = 'Draw...  😱  Try Again!';
    }
}
