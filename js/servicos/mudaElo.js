//muda a imagem quando seleciona outra nome e coloca a animação de load
//quando mudar a liga atual
$("#ligaAtual").change(() => {
    if (trataNome("choice") == "valorant") {
      document.querySelectorAll("#imgEloAtual").forEach(function (item) {
        item.src = `../imagens/elos/valorant/${ligaAtual.value}.webp`;
      });
    } else {
      document.querySelectorAll("#imgEloAtual").forEach(function (item) {
        item.src = `../imagens/elos/${ligaAtual.value}.webp`;
      });
    }
  
    if (ligaAtual.value == "mestre" || ligaAtual.value == "graomestre") {
      $(".form-group#boxDivisaoAtual").addClass("d-none");
    } else {
      $(".form-group#boxDivisaoAtual").removeClass("d-none");
    }
  
    AddLoad();
  });
  
  //muda a imagem quando seleciona outra nome e coloca a animação de load
  // quando mudar a liga desejada
  $("#ligaDesejada").change(() => {
    if (trataNome("choice") == "valorant") {
      document.querySelectorAll("#imgEloDesejado").forEach(function (item) {
        item.src = `../imagens/elos/valorant/${ligaDesejada.value}.webp`;
      });
    } else {
      document.querySelectorAll("#imgEloDesejado").forEach(function (item) {
        item.src = `../imagens/elos/${ligaDesejada.value}.webp`;
      });
    }
  
    // se for mestre, desafiante ou grão mestre ele tira o select de divisão
    if (
      ligaDesejada.value == "mestre" ||
      ligaDesejada.value == "graomestre" ||
      ligaDesejada.value == "desafiante" ||
      ligaDesejada.value == "radiante"
    ) {
      $(".form-group.divisaoDesejada").addClass("d-none");
    } else {
      $(".form-group.divisaoDesejada").removeClass("d-none");
    }
  
    AddLoad();
  });
  
  // quando mudar a divisão atual
  $("#divisaoAtual").change(() => {
    AddLoad();
  });
  
  //quando mudar a divisão desejada
  $("#divisaoDesejada").change(() => {
    AddLoad();
  });
  
  $("#planoDesejado").change(() => {
    AddLoad();
  });
  
  // liga e desliga a animação de load
  function AddLoad() {
  
   
    var load = document.getElementById("load");
  
    load.classList.remove("d-none");
  
    document.getElementById("contentEloFinal").classList.add("d-none");
    document.getElementById("alert").classList.add("d-none");
  
    function Load() {
      load.classList.add("d-none");
      mudaTitleElo();
  
      if (trataNome("choice") == "leagueoflegends") {
        mudaPreçoLOL();
      } else if (trataNome("choice") == "wildrift") {
        mudaPreçoWild();
      } else {
        mudaPreçoValorant();
      }
  
      Aviso();
    }
  
    setTimeout(Load, 200);
  }
  
  //animação de acrecimo dos cards
  $(function () {
    AddLoad();
    function contador(max, duracao, numero) {
      for (var i = 0; i <= max; i++) {
        setTimeout(
          function (nr) {
            numero.innerHTML = nr;
          },
          (i * duracao) / max,
          i
        );
      }
    }
  
    var finalizados = {
      numero: document.getElementById("finalizado"),
      max: 13050,
      duracao: 2000,
    };
    var anos = {
      numero: document.getElementById("anos"),
      max: 6,
      duracao: 2000,
    };
    var booster = {
      numero: document.getElementById("booster"),
      max: 118,
      duracao: 2000,
    };
  
    contador(finalizados.max, finalizados.duracao, finalizados.numero);
    contador(anos.max, anos.duracao, anos.numero);
    contador(booster.max, booster.duracao, booster.numero);
  });
  
  // verifica se os elos estão certos se não manda o aviso
  function Aviso() {
    var elos = {
      ferro: 1,
      bronze: 2,
      prata: 3,
      ouro: 4,
      platina: 5,
      esmeralda: 6,
      diamante: 7,
      mestre: 8,
      graomestre: 9,
      desafiante: 10,
    };
  
    var elosValorant = {
      ferro: 1,
      bronze: 2,
      prata: 3,
      ouro: 4,
      platina: 5,
      diamante: 6,
      ascendente: 7,
      imortal: 8,
      radiante: 9,
    };
  
    let ligaAtual = document.getElementById("ligaAtual").value;
    let ligaDesejada = document.getElementById("ligaDesejada").value;
    let divisaoAtual = document.getElementById("divisaoAtual").value;
    let divisaoDesejada = document.getElementById("divisaoDesejada").value;
  
    // coloca o d-none
    function esconde() {
      document.getElementById("contentEloFinal").classList.add("d-none");
      document.getElementById("alert").classList.remove("d-none");
    }
    // tira o d-none
    function mostra() {
      document.getElementById("alert").classList.add("d-none");
      document.getElementById("contentEloFinal").classList.remove("d-none");
    }
  
    // se o jogo for valorant
    if (trataNome("choice") == "valorant") {
      if (elosValorant[`${ligaAtual}`] > elosValorant[`${ligaDesejada}`]) {
        esconde();
      } else if (
        elosValorant[`${ligaAtual}`] == elosValorant[`${ligaDesejada}`] &&
        divisaoAtual >= divisaoDesejada
      ) {
        esconde();
      } else {
        mostra();
      }
    }
    // se não é lol ou wild
    else {
      if (elos[`${ligaAtual}`] > elos[`${ligaDesejada}`]) {
        esconde();
      } else if (
        elos[`${ligaAtual}`] == elos[`${ligaDesejada}`] &&
        divisaoAtual <= divisaoDesejada
      ) {
        esconde();
      } else if ((ligaAtual == "mestre" && ligaDesejada == "mestre") || (ligaAtual == "graomestre" && ligaDesejada == "graomestre")) {
        esconde();
      } else {
        mostra();
      }
    }
  }
  
  // muda o nome nas fotos dos elos
  function mudaTitleElo() {
    // se for mestre, desafiante, radiante ou grão mestre ele tira o select de divisão
    if (
      document.getElementById("ligaDesejada").value == "mestre" ||
      document.getElementById("ligaDesejada").value == "graomestre" ||
      document.getElementById("ligaDesejada").value == "desafiante" ||
      document.getElementById("ligaDesejada").value == "radiante"
    ) {
      document.getElementById("titleImgDesejada").innerText = `${document.getElementById("ligaDesejada").options[
          document.getElementById("ligaDesejada").selectedIndex
        ].text
        }`;
    } else {
      document.getElementById("titleImgDesejada").innerText = `${document.getElementById("ligaDesejada").options[
          document.getElementById("ligaDesejada").selectedIndex
        ].text
        } ${document.getElementById("divisaoDesejada").options[
          document.getElementById("divisaoDesejada").selectedIndex
        ].text
        }`;
    }
  
    if (
      document.getElementById("ligaAtual").value == "mestre" ||
      document.getElementById("ligaAtual").value == "graomestre"
    ) {
      document.getElementById("titleImgAtual").innerText = `${document.getElementById("ligaAtual").options[
          document.getElementById("ligaAtual").selectedIndex
        ].text
        }`;
    } else {
      document.getElementById("titleImgAtual").innerText = `${document.getElementById("ligaAtual").options[
          document.getElementById("ligaAtual").selectedIndex
        ].text
        } ${document.getElementById("divisaoAtual").options[
          document.getElementById("divisaoAtual").selectedIndex
        ].text
        }`;
    }
  }
  

  
  // manda os preços do valorant
  function mudaPreçoValorant() {
    const elojob = {
        ferro1: 0,
        ferro2: 8.00,
        ferro3: 16.00,
  
        bronze1: 24.00,
        bronze2: 34.00,
        bronze3: 44.00,
  
        prata1: 54.00,
        prata2: 66.00,
        prata3: 78.00,
  
        ouro1: 90.00,
        ouro2: 104.00,
        ouro3: 118.00,
  
        platina1: 132.00,
        platina2: 150.00,
        platina3: 168.00,
  
        diamante1: 186.00,
        diamante2: 212.00,
        diamante3: 238.00,
  
        ascendente1: 264.00,
        ascendente2: 300.00,
        ascendente3: 336.00,
  
        imortal1: 416.00,
        imortal2: null,
        imortal3: null,
      };
  
  
      const duoboost = {
        ferro1: 0,
        ferro2: 12.00,
        ferro3: 24.00,
  
        bronze1: 36.00,
        bronze2: 51.00,
        bronze3: 66.00,
  
        prata1: 81.00,
        prata2: 99.00,
        prata3: 117.00,
  
        ouro1: 135.00,
        ouro2: 156.00,
        ouro3: 177.00,
  
        platina1: 198.00,
        platina2: 225.00,
        platina3: 252.00,
  
        diamante1: 279.00,
        diamante2: 318.00,
        diamante3: 357.00,
  
        ascendente1: 396.00,
        ascendente2: 450.00,
        ascendente3: 504.00,
  
        imortal1: 624.00,
        imortal2: null,
        imortal3: null,
      };
  
    if (trataNome("title") == "elojob") {
      calculaPreco(elojob);
      desconto(elojob);
    }
    if (trataNome("title") == "duoboost") {
      calculaPreco(duoboost);
      desconto(duoboost);
    }
  }
  
  // trata o title da pagina capturado
  function trataNome(id) {
    return document
      .getElementById(id)
      .textContent.toLocaleLowerCase()
      .replaceAll(" ", "")
      .trim();
  }
  
  //faz o calculo do preço
  function calculaPreco(tipoJogo) {
    let atual =
      document.getElementById("ligaAtual").value +
      document.getElementById("divisaoAtual").value;
    let desejada =
      document.getElementById("ligaDesejada").value +
      document.getElementById("divisaoDesejada").value;
  
    let resultado;
    let resultadoFinal;
  
    resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`];
  
    resultadoFinal = resultado / 0.8;
  
    resultado = resultadoFinal * 0.8;
  
    const planoDesejado = document.getElementById("planoDesejado");
  
    if (planoDesejado && planoDesejado.value === "premium") {
      resultado = resultado * 1.2;
    }
  
    // if (document.getElementById("planoDesejado").value == "premium") {
    //   resultado = resultado * 1.2;
    // }
  
    document.getElementById(
      "valor"
    ).innerHTML = `<small>POR:</small> ${moedaBrasil(resultado)}`;
  }
  
  // faz o desconto
  function desconto(tipoJogo) {
    let desconto = 20;
  
    let atual =
      document.getElementById("ligaAtual").value +
      document.getElementById("divisaoAtual").value;
    let desejada =
      document.getElementById("ligaDesejada").value +
      document.getElementById("divisaoDesejada").value;
  
    let resultado;
  
    resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`];
  
    descontoFinal = resultado / 0.8;
  
    document.getElementById(
      "desconto"
    ).innerHTML = `<small>DE:</small> ${moedaBrasil(descontoFinal)}`;
  }
  // formata o numero para moeda brasileira
  function moedaBrasil(valor) {
    var valor;
    var valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    return valorFormatado;
  }
  