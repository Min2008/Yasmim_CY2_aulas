// identificar as variaveis 
// identificar os botoes usando 
// buttons.foreach(btn) => juntamente com o addeventlistener faz uma const value para pegar os numeros usando target.innertext
 // depois embaixo voce coloca para converter o texto em numeros e o resto para fazer outra coisa
 // if (+value) for os numertos e o ponto senao vai ser uma operaçao

 // construir a calculadora: class calculator() usando o construct que ajuda a diferencias suas caracteristicas de cada operaçao
 // this.lllll = lllll - prorpiedade do objeto, mais facil de programar e arrumar
 // this.LLLL = "" - REPRESENTA O QUE A PESSOA ESTA DIGITANDO NA CALCULADORA
 // mais metodos:
 // addDigit - metodo dos digitos
 // dentro dele colocar this.LLLL para saber com é a operaçao clicada
 // e colocar this.update screen para atualizar a tela
 // faz  funçao updatescreen nesta funçao vc concatena as LLL.innertext += LLLL // dentro de um if (total de operaçoes vai ser nulo)
 // e seu else vai checar se o previous vai ser igual a 0 e para colacar este numero la em cima colocar o this.lll = conctena com $ operation e o total de operaçoes
 // checagem para o uso do ponto: if digit '.' e LLLL.includes '.' - return;
 // total das operaçoes - processamento: fazer let total, const previous e const current
 // para colocar os numeros no previous e fazer a operacao desejada com o currentl
 // swith(operation) - e fazer um case para cada operacao e um defalt return no final caso seja invalida

 // APLICAR OS METODOS USANDO const e new.calculator

 // colocar no updatesreen todos os valores como null 

 // no case que for de soma colocar o total de operaçoes = a soma do previous com o current
 //  e embaixo coloco o this.updatesreen
// para dar certo o updatereen coloque o split (" ")[0] - ele vai destrinchar os numeros começando do primeiro e assim fazer a operaçao

// antes de colocar let e const, faça um metodo para mudar as operçaoes:
// currentoperation vazio e previousoperation vazio e um return
// vamos fazer o metodo mudar as operaçoes dentro do updatesreen: coloca o const para as operaçoes matematicas e um if caso nao for uma operaçao (return). no metodo vc coloca um this.lll.innertext = this.lll.innertext.slice(0, -1) + operation - onde ele vai excluir a operaçao passada e mudar para a atual

// o resto das funçoes da calculadora dell, c, ce e igual
// faz uma funçao para cada e coloca no case