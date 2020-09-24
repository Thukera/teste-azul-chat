try {
  setTimeout(function () {
    lpTag.hooks.push({
      name: "AFTER_GET_LINES",
      callback: function (data) {
       if (data.data.lines.length && data.data.lines[0].text) {
            setTimeout(handleElements, 500);
          }
        return data;
      }
    });
  }, 100);
} catch (e) {
  console.dir(e.message);
}

  function handleElements() {
    handleMarkdowns();
    handleButtons();
}


function handleMarkdowns() {
    // Arthur coloque o código de tratarmento do markdowns aqui
    var arrayConversa = document.querySelectorAll('div.lpc_message__text_agent');
    for(var i = 0; i < arrayConversa.length; i++ ){
      //alert(arrayConversa[i].innerHTML);
      
      //altera # para titulo
      if(arrayConversa[i].innerHTML.includes('#')){
         arrayConversa[i].innerHTML = arrayConversa[i].innerHTML.substring(2, arrayConversa[i].innerHTML.length);
        arrayConversa[i].style.fontSize = "large";
      }
      
      //Cria tabela a partir de *
      if(arrayConversa[i].innerHTML.includes('*')){
        var lista = arrayConversa[i].innerHTML;
        var linhas = arrayConversa[i].innerHTML.split('*');
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        arrayConversa[i].appendChild(ul);
        for (var i = 0 ;i< linhas.length;i++){
          li.appendChild(document.createTextNode(linhas[i]));
          arrayConversa[i].appendChild(li);
        }
    } 
}
function handleButtons() {
    const div_lines = document.querySelectorAll('div.lp_chat_line_wrapper');
    let last_button_line = null;
    div_lines.forEach((dline, i) => {
        let div_buttons = dline.querySelectorAll('div.lpc_card__button');
        if (div_buttons.length > 0) {
            div_buttons[0].parentNode.style.pointerEvents = 'none';
            div_buttons[0].parentNode.style.opacity = 0.5;
            last_button_line = dline;
        }
    });
    if (last_button_line != null) {
        if (div_lines[div_lines.length - 1].id == last_button_line.id) {
            let div_buttons = last_button_line.querySelectorAll('div.lpc_card__button');
            if (div_buttons.length > 0) {
                div_buttons[0].parentNode.style.pointerEvents = 'all';
                div_buttons[0].parentNode.style.opacity = 1;
            }
        }
    }
 }
