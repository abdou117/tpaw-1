function validation () {
var nameValue=document.querySelector("#nom").value;
if(nameValue==""){
    document.querySelector("#error").textContent="le nom est obligatoire";
}
}