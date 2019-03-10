
function createdivs(){
  let mydiv="";
  let start=1;
  let end=100;
  let fizz=3;
  let bazz=5;
  if (document.getElementById("startVal").value!=""){
    start=parseInt(document.getElementById("startVal").value) ;
  }
  
  if (document.getElementById("endVal").value!=""){
    end=parseInt(document.getElementById("endVal").value) ;
  }

  if (document.getElementById("fizzVal").value!=""){
    fizz=parseInt(document.getElementById("fizzVal").value) ;
  }

  if (document.getElementById("bazzVal").value!=""){
    bazz=parseInt(document.getElementById("bazzVal").value) ;
  }
 
 
 
  for (let i=start; i<=end; i++){
    let clasname ="";
    let innertext="";
    if ((i % fizz) === 0 && (i % bazz) === 0){
      clasname ="FizzBazz"; 
      innertext=clasname;
    } 
    else if((i % fizz) === 0){
      clasname ="Fizz"; 
      innertext=clasname;
    }
    else if((i % bazz) === 0){
      clasname ="Bazz"; 
      innertext=clasname;
    }
    else {
    clasname = "NoFizzBazz";
    }
    
    mydiv += "<div id='myid"+i+"' class='"+clasname+"'>"+i+". "+innertext+"</div>";
   }
 
  document.getElementById("contentbox").innerHTML+=mydiv;
}

function deletedivs(){
  document.getElementById("contentbox").innerHTML='';
}

