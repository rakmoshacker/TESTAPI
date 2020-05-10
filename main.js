window.onload=function(){
let request = new XMLHttpRequest();
const p = document.getElementById("resp");
  request.open("GET","http://leadtrack.shriramhousing.me/SHFLTrackerUAT/api/loan?lnno=SHLHKMNG0000306",true);
  request.send();
  request.onload = function(){
  console.log(JSON.parse(request.response));
  p.innerText=JSON.stringify(JSON.parse(request.response));
  }
}
