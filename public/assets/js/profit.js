const BOTAO_FINALIZAR = document.getElementById('btn');

var multiplicador = 0,c_ = 0, _c = 0,valor_anterior =0, count = 0, tabela, count_mes=3, mes=0; var res = document.getElementById('res'),
div = document.querySelector('div#div_table'), div_btn = document.querySelector('div#div_btn');

BOTAO_FINALIZAR.onclick = function(){
    var semana =0;
    div.innerHTML ='';
    mes=0;
    _c=0; count_mes=3;
    count = 0;
    const INIT_PRICE = document.getElementById('init_price').value;
    const DAYS = document.getElementById('days').value;
    var porcentagem = document.getElementById('m').value, porcentagem1 = porcentagem;
    price = parseInt(INIT_PRICE);
   tabela = `<table class="table color3">
            <thead>
                <tr>
                    <th>SEMANA</th>
                    <th>VALOR</th>
                    <th>OVERPAY</th>
                    <th>LUCRO</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
   `
    
   if(porcentagem < 10){      
    porcentagem = `0.0${porcentagem}`
    } else if(porcentagem >= 10){
        porcentagem = `0.${porcentagem}`
    }

    while(count<DAYS){
            if(count_mes == 3){
        multiplicador = price * porcentagem;
        valor_inicial = price;
        price += multiplicador;
        count += 7;
        count_mes=0;
        semana++;
        if(_c == 1){
            _c=0;
        }else{
            _c=1;
        }
            if(_c==1){
        tabela += `<tr class="color1">
        <th>${semana}</th>
        <th>${'$'+(price-multiplicador).toFixed(2)}</th>
        <th>${porcentagem1+'%'}</th>
        <th>${'$'+(price-INIT_PRICE).toFixed(2)}</th>
        <th>${'$'+price.toFixed(2)}</th>
    </tr>`}else{
        tabela +=`<tr class="color2">
        <th>${semana}</th>
        <th>${'$'+(price-multiplicador).toFixed(2)}</th>
        <th>${porcentagem1+'%'}</th>
        <th>${'$'+(price-INIT_PRICE).toFixed(2)}</th>
        <th>${'$'+price.toFixed(2)}</th>
    </tr>`
    }
}else{
                multiplicador = price * porcentagem;
        valor_inicial = price;
        price += multiplicador;
        count += 7;
        count_mes++;
        semana++;
            if(_c==0){
        tabela += `<tr class="color2">
        <th>${semana}</th>
        <th>${'$'+(price-multiplicador).toFixed(2)}</th>
        <th>${porcentagem1+'%'}</th>
        <th>${'$'+(price-INIT_PRICE).toFixed(2)}</th>
        <th>${'$'+price.toFixed(2)}</th>
    </tr>`}else{
        tabela += `<tr class="color1">
        <th>${semana}</th>
        <th>${'$'+(price-multiplicador).toFixed(2)}</th>
        <th>${porcentagem1+'%'}</th>
        <th>${'$'+(price-INIT_PRICE).toFixed(2)}</th>
        <th>${'$'+price.toFixed(2)}</th>
    </tr>`
    }
            }

    }
    res.innerText = `Começamos com: $${INIT_PRICE} e ficamos com $${price.toFixed(2)} em ${DAYS} dias. LUCRO: $${(price-INIT_PRICE).toFixed(2)}`
    
    tabela += `</tbody>
    </table>`;

    if(c_==0){
    var botao = document.createElement('button');botao.innerHTML='ver tabela completa';botao.setAttribute('class','button-link');
    ; div_btn.appendChild(botao);
    c_=1;
    }

    const TABELA_COMPLETA = document.querySelector('button.button-link');
    TABELA_COMPLETA.onclick = function(){
        div.innerHTML = '<br>'+tabela;
    }

}