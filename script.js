//document.getElementById("demo")
//document.getElementByIdClassName()
//document.getElementByIdTagName()

//function syntax:
//function paragaraph(){
    //block of code
   // document.getElementById("demo").innerHTML="sabi";
//}
//function paragaraph(){
    //document.getElementById("demo").style.fontSize="100px"; 
//}
function add(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var z = x + y;
    
    document.getElementById("add").innerHTML = z;
    }
function sub(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a - b;
    document.getElementById("sub").innerHTML = c;
    }
function mul(){
    var a = (document.getElementById("n1").value);
    var b = (document.getElementById("n2").value);
    var c = a * b;
    document.getElementById("mul").innerHTML = c;
    }
function div(){
    var a = (document.getElementById("n1").value);
    var b = (document.getElementById("n2").value);
    var c = a / b;
    document.getElementById("div").innerHTML = c;
    }