function hello(){
  var numElement = document.getElementById('score');
  var i= Number(numElement.value);

  if(i>=900){
 alert("レベル３へ");

  }else if(i>=700){
  alert("レベル2へ");


  }else if(i>=500){

  alert("レベル1へ");

  }else{
  alert("レベルが合いません");


  }
}
