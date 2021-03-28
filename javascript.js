
function input(){
    var name=document.getElementById("First").value;
    var middle=document.getElementById("Middle").value;
    var last=document.getElementById("Last").value;
    var sug=document.getElementById("suggest").value;
    var gen=document.querySelector('input[name="gender"]:checked').value;
    var final=document.getElementById("print").value;
    var d=new Date();
    var test
    if (name == "" ) {
        alert("Please inpur your first name.");
    }else if(last == "")
    {
      alert("Please enter your last name");
    }
    else if (sug == "") {
        alert("Please inpur your suggestion.");
    }
    else if (name.length > 40 || middle.length > 40 || last.length > 40)
    {
        alert("Please inpur your name in 40 char.");
    }
    else{
     if(middle.trim()==" ")
    {test=gen + " "+ name.trim()+" "+last.trim()+" " ;
}
    else 
    {test=gen +" "+ name.trim()+" "+middle.trim()+" "+last.trim()+" ";
}
final +="\n"+"Name      :  "+test +"\n"+"Commented :  "+sug+"\n"+d;
    document.getElementById("print").value=final;
    } 
}
function clear(){
    document.getElementById("First").value = " ";
    document.getElementById("Middle").value =" ";
    document.getElementById("Last").value = " ";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("suggest").value = " ";
}