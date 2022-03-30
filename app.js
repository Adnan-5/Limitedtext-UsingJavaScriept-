const output = document.querySelector(".output");
const txt = document.querySelector("textarea");

["keyup","keydown","change"].forEach(function(e){
    txt.addEventListener(e,textCounter);
    })
    
    const maxLength = 15;
    const warnLength = 5;
    
    function textCounter(e){
    let count = txt.value.length;
    if(count > maxLength){
      // the substring() method returns the partes of the string 
      // between the start and end indexes, or to the end of the string
      txt.value = txt.value.substring(0,maxLength);
    };
    if(count > warnLength){
      output.classList.add("red");
    }else{
      output.classList.remove("red");
    };
    output.innerHTML = (maxLength-count) + " characters left";
    
    };