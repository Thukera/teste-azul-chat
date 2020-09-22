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
    var text = document.getElementsById('#transcript_bubble_agent_text').Value;
    alert(text);
    if(text.include("#")){
      document.getElementsById('#transcript_bubble_agent_text').style.color = "#FF5733";
    }
  }
