
function startValue(){
    document.getElementById("outputDisplay").innerHTML = "0";
}

function clearOutput() {
    document.getElementById("outputDisplay").innerHTML = "0";
}

function deleteInput() {
    if(document.getElementById("outputDisplay").innerHTML.length === 1){
        document.getElementById("outputDisplay").innerHTML = "0";
    }
    else{
        document.getElementById("outputDisplay").innerHTML = document.getElementById("outputDisplay").innerHTML.slice(0, -1);
    }
}

function getButton(value){
    if(document.getElementById("outputDisplay").innerHTML === "0"){
        if(value !== "."){
            document.getElementById("outputDisplay").innerHTML = document.getElementById("outputDisplay").innerHTML.slice(0, -1);
            document.getElementById("outputDisplay").innerHTML += value;
        }
        else{
            document.getElementById("outputDisplay").innerHTML += value;  
        }
    }
    else{
        document.getElementById("outputDisplay").innerHTML += value;
    }
}

function plusminus(){
    if(document.getElementById("outputDisplay").innerHTML[0] !== "-"){
        document.getElementById("outputDisplay").innerHTML = "-" + document.getElementById("outputDisplay").innerHTML;
    }
    else{
        document.getElementById("outputDisplay").innerHTML = document.getElementById("outputDisplay").innerHTML.substring(1);
    }
}

function percentage(){
    if(document.getElementById("outputDisplay").innerHTML.includes('+') 
        && document.getElementById("outputDisplay").innerHTML[document.getElementById("outputDisplay").innerHTML.length-1] !== "+")
        {
            var first = document.getElementById("outputDisplay").innerHTML.substring(0, document.getElementById("outputDisplay").innerHTML.lastIndexOf("+"));
            var last = document.getElementById("outputDisplay").innerHTML.substring(document.getElementById("outputDisplay").innerHTML.lastIndexOf("+") + 1) / 100;
            var percen =  first * last; 
            document.getElementById("outputDisplay").innerHTML = +first + +percen;
    }
    else if(document.getElementById("outputDisplay").innerHTML.includes('/') 
        && document.getElementById("outputDisplay").innerHTML[document.getElementById("outputDisplay").innerHTML.length-1] !== "/")
        {
            var first = document.getElementById("outputDisplay").innerHTML.substring(0, document.getElementById("outputDisplay").innerHTML.lastIndexOf("/"));
            var last = document.getElementById("outputDisplay").innerHTML.substring(document.getElementById("outputDisplay").innerHTML.lastIndexOf("/") + 1) / 100;
            var percen =  first / last; 
            document.getElementById("outputDisplay").innerHTML = percen;
    }
    else if(document.getElementById("outputDisplay").innerHTML.includes('-') 
        && document.getElementById("outputDisplay").innerHTML[document.getElementById("outputDisplay").innerHTML.length-1] !== "-")
        {
            var first = document.getElementById("outputDisplay").innerHTML.substring(0, document.getElementById("outputDisplay").innerHTML.lastIndexOf("-"));
            var last = document.getElementById("outputDisplay").innerHTML.substring(document.getElementById("outputDisplay").innerHTML.lastIndexOf("-") + 1) / 100;
            var percen =  first * last; 
            document.getElementById("outputDisplay").innerHTML = first - percen;
    }
    else if(document.getElementById("outputDisplay").innerHTML.includes('*') 
        && document.getElementById("outputDisplay").innerHTML[document.getElementById("outputDisplay").innerHTML.length-1] !== "*")
        {
            var first = document.getElementById("outputDisplay").innerHTML.substring(0, document.getElementById("outputDisplay").innerHTML.lastIndexOf("*"));
            var last = document.getElementById("outputDisplay").innerHTML.substring(document.getElementById("outputDisplay").innerHTML.lastIndexOf("*") + 1) / 100;
            var percen =  first * last; 
            document.getElementById("outputDisplay").innerHTML = percen;
    }
    else{
        document.getElementById("outputDisplay").innerHTML = "ERROR!"
        setTimeout(clearOutput, 700);
    }
}

function calculate(){
    var input = document.getElementById("outputDisplay").innerHTML;
    var result = eval(input);
    document.getElementById("outputDisplay").innerHTML = result;
}