let vel = prompt('Coloque a velocidade do carro');

if(vel > 80){
    let multa = (vel - 80)*5;
    alert('Você esta acima do limite. A multa é de ${multa}')
}else{
    alert('Você esta dentro do limite');
}