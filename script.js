// Variáveis de quantidade
let qtdfifa = 0;
let qtdminecraft = 0;
let qtdgtaVI = 0;
let qtdgodofwar = 0;

// Preços e cupom
const precofifa = 299.90;
const precominecraft = 99.90;
const precogtaVI = 799.90;
const precogodofwar = 349.90;
const codigoprom = "GAMER10";
const valorprom = 0.10;
const limiteprom = 200;

// Função de alerta temporário
function mostraralerta(msg, tempo=1500){
    const noti = document.getElementById("notificacao");
    noti.innerText = msg;
    noti.style.display = "block";
    setTimeout(() => {
        noti.style.display = "none";
    }, tempo);
}

// Função para atualizar apenas o resumo de itens
function atualizarResumoItens(){
    const lista = document.getElementById("listaResumo");
    lista.innerHTML = ""; // limpa a lista

    if(qtdminecraft>0) lista.innerHTML += `<li>Minecraft: ${qtdminecraft} unidade(s)</li>`;
    if(qtdfifa>0) lista.innerHTML += `<li>FIFA: ${qtdfifa} unidade(s)</li>`;
    if(qtdgtaVI>0) lista.innerHTML += `<li>GTA VI: ${qtdgtaVI} unidade(s)</li>`;
    if(qtdgodofwar>0) lista.innerHTML += `<li>God of War: ${qtdgodofwar} unidade(s)</li>`;
}

// Adicionar ao carrinho 
function adicionaraocarrinho(produto){
    if(produto==='minecraft') qtdminecraft++;
    if(produto==='fifa') qtdfifa++;
    if(produto==='godofwar') qtdgodofwar++;
    if(produto==='gtaVI') qtdgtaVI++;

    atualizarResumoItens(); // Atualiza a lista de itens no resumo
    mostraralerta(produto + " adicionado ao carrinho!", 1500); // Mostra alerta
}

// Calcular valores (subtotal, desconto e total final)
function calculartotal(){
    let subtotal = (qtdfifa*precofifa) + (qtdminecraft*precominecraft) +
    (qtdgtaVI*precogtaVI) + (qtdgodofwar*precogodofwar);

    let codigo = document.getElementById("cupom").value;
    let mensagem;

    let total;
    if(codigo===codigoprom && subtotal>=limiteprom){
        total = subtotal - (subtotal*valorprom);
        mensagem = "Desconto Aplicado";
    } else {
        total = subtotal;
        mensagem = "Desconto não Aplicado";
    }

// Atualiza os valores monetários
    document.getElementById("total").innerText = "Total: R$ " + subtotal.toFixed(2);
    document.getElementById("desconto").innerText = mensagem;
    document.getElementById("final").innerText = "Valor Final: R$ " + total.toFixed(2);
}
function finalizarCompra(){
    const pagamentoDiv = document.getElementById("pagamentoPIX");
    pagamentoDiv.style.display = "block";  // mostra a área do PIX
    mostraralerta("Finalize o pagamento via PIX!", 2000);  // alerta temporário
}