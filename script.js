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


//POP-UP
document.getElementById('open-popup').addEventListener('click', (e) => {
  window.open('index-popup.html', 'Atendimento Azul', "width=400, height=650, top=100, left=110, scrollbars=no ")
});

function handleElements() {
  handleMarkdowns();
  handleButtons();
  handleImages();
  handleBlankText();
}


function handleMarkdowns() {

  var arrayConversa = document.querySelectorAll('div.lpc_message__text_agent');
  for (var i = 0; i < arrayConversa.length; i++) {

    var str = arrayConversa[i].innerHTML;
    str =  marked(str);
    arrayConversa[i].innerHTML = str; 

  }
}


function handleBlankText() {
  var arrayConversa = document.querySelectorAll('.lpc_card__text');
  for (var i = 0; i < arrayConversa.length; i++) {
    //esconde div vazia      
    var textoElement = arrayConversa[i].textContent;
    if (textoElement.length == 0) {
      var element = arrayConversa[i];
      element.parentNode.removeChild(element);
    }
  }
}


function handleImages() {
  const div_images = document.querySelectorAll('div.lpc_card__image');
  div_images.forEach((dimage, i) => {
    dimage.parentNode.style.maxWidth = 'none !important';
  });
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
        //div_buttons[0].parentNode.style.visibility = "hidden";

      }
    }
  }
}
