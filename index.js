let output=document.getElementById("output");
    function display (num) {
        output.value+=num;
    }
function calculate(){
    output.value=eval(output.value);
    output.style.fontWeight="400"
}
function clr(){
    output.value=" ";
}
function del(){
    output.value=output.value.slice(0,-1);
}
