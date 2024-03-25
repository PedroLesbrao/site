var sUsuarios = [["katy.jpg","NOME:Katy<br>SOBRENOME:Perry<br>IDADE:36<br>ALTURA:1,70<br>OLHOS:Verdes<br>Solteira","Compromisso Sério"],
                ["darth vader.jpg","NOME:Darth<br>SOBRENOME:Vader<br>IDADE:22<br>ALTURA:1,96<br>OLHOS:Pretos<br>Solteiro","Namoro Casual"],
                ["XUXA.jpg","NOME:Xuxa<br>IDADE:57<br>ALTURA:1,78<br>OLHOS:azuis<br>Solteiro","Compromisso Serio"],
                ["will.jpg","NOME:Will<br>SOBRENOME:Smith<br>IDADE:52<br>OLHOS:Castanhos<br>ALTURA:1,88<br>Solteiro","Relacionamento Casual"],
                ["terry.jpg","NOME:Terry<br>SOBRENOME:Crews<br>IDADE:52<br>OLHOS:Marrom escuro<br>ALTURA:1,90,Solteiro","Relacionamento Serio"],
                ["beyonce.jpg","NOME:Beyoncé<br>SOBRENOME:Giselle Knowles<br>IDADE:39<br>OLHOS:Castanhos<br>ALTURA:1,70,Solteiro","Relacionamento Serio"],
                ["katheryn.jpg","NOME:Katheryn<br>SOBRENOME:Winnick<br>IDADE:43<br>OLHOS:Azuis<br>ALTURA:1,68,Solteiro","Namora Casual"]
];

function criaSite(){
    var tabela = document.getElementById("usuarios");
    for(var i=0;i<sUsuarios.length;i++){
        //criar a linha
        var linha = document.createElement("tr");
        linha.setAttribute("class","linha");
        tabela.appendChild(linha);

        //Criar coluna da foto
        var coluna1 = document.createElement("td");
        coluna1.setAttribute("class","tdfoto");
        coluna1.setAttribute("id","tdfoto"+i);
        linha.appendChild(coluna1);
        //Após criar a coluna, criamos a imagem
        var foto = id("tdfoto"+i);
        fotoPro = document.createElement("img");
        fotoPro.setAttribute("id","foto"+i);
        foto.appendChild(fotoPro);

        //Criar coluna da descrição
        var coluna2 = document.createElement("td");
        coluna2.setAttribute("class","tddescricao");
        coluna2.setAttribute("id","tddescricao"+i);
        linha.appendChild(coluna2);
        //Após criar a coluna, criamos a parágrafo
        var descricao = id("tddescricao"+i);
        descPro = document.createElement("p");
        descPro.setAttribute("id","descricao"+i);
        descricao.appendChild(descPro);

        //Criar coluna do valor
        var coluna3 = document.createElement("td");
        coluna3.setAttribute("class","tdinfo");
        coluna3.setAttribute("id","tdinfo"+i);
        linha.appendChild(coluna3);
        //Após criar a coluna, criamos a parágrafo
        var info = id("tdinfo"+i);
        infoPro = document.createElement("p");
        infoPro.setAttribute("id","info"+i);
        info.appendChild(infoPro);

        //Coluna do botão
        var coluna4 = document.createElement("td");
        coluna4.setAttribute("class","tdbotao");
        coluna4.setAttribute("id","tdbotao"+i);
        linha.appendChild(coluna4);
        tabela.appendChild(linha);
        //Após criar a coluna, criamos o botao
        var botao = id("tdbotao"+i);
        botaoPro = document.createElement("button");
        botaoPro.setAttribute("type","button");
        botaoPro.setAttribute("id","site"+i);
        botao.appendChild(botaoPro);
        id("site"+i).innerHTML="CONVERSAR";

        //Linha de divisão dos sProdutos
        linha = document.createElement("tr");
        linha.setAttribute("class","linha");
        tabela.appendChild(linha);
        var coluna = document.createElement("td");
        coluna.setAttribute("class","divisao");
        coluna.setAttribute("id","divisao"+i);
        coluna.setAttribute("colspan",4);
        linha.appendChild(coluna);

        var lin = id("divisao"+i);
        var divide = document.createElement("hr");
        divide.setAttribute("class","linhahr"+i);
        lin.appendChild(divide);

        tabela.appendChild(linha);
    }
    montaVenda();
}

function montaVenda(){
    for(var i=0;i<sUsuarios.length;i++){
        console.log(sUsuarios[i][0]+" ---- "+sUsuarios[i][1]+" --- "+sUsuarios[i][2]);
        id("foto"+i).src="imagens/"+sUsuarios[i][0];
        id("descricao"+i).innerHTML = sUsuarios[i][1];
        id("info"+i).innerHTML = sUsuarios[i][2];
    }
}

function id(sId){
    return document.getElementById(sId);
}
