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
    var arrayConversa = document.querySelectorAll('div.lpc_message__text_agent');
    for(var i = 0; i < arrayConversa.length; i++ ){
      alert(arrayConversa[i].innerHTML);
    } 
  }
