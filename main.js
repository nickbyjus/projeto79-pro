menuListArray = ["Pizza Vegetariana",
"Pizza de Frango",
"Pizza Portuguesa",
"Pizza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravaganza"]
function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imtags='<img id="im1" src="images/pizzaImg.png"/>'
var itemdocument.getElementById("additem").valueOf;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+imgtags+  menuListArray[i]+'<br>';
}
document.getElementById("displayAddMenu").innerHTML = htmldata;

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}