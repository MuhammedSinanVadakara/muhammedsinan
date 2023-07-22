let inp = document.getElementById("input");
let out = document.getElementById("output");

function display(a) {
    inp.innerText=inp.innerText + a;
    console.log(inp.innerText);


}

function cal(){
    console.log(inp.innerText); 
    
    out.innerText = eval(inp.innerText);

    
   
    console.log( out.innerText );
    if(out.innerText < 200) {
        alert('perfect')
    }
    if(out.innerText > 200) {
        alert('too much calories')
    }
  
  }

  function backspace(){
    input.innerText=input.innerText.slice(0,-1);
     console.log(input.innerText.slice);
  }
  
