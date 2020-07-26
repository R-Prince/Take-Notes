window.addEventListener("load", function(){
                
var editor = note_area.document;
editor.designMode = "on";

bold.addEventListener("click" ,function(){
editor.execCommand("Bold",false,null);
},false)

italics.addEventListener("click" ,function(){
editor.execCommand("Italic",false,null);
},false)

underline.addEventListener("click" ,function(){
editor.execCommand("Underline",false,null);
},false)

list.addEventListener("click" ,function(){
editor.execCommand("InsertUnorderedList",false,null);
},false)

}, false)

function addTitle (){
    var newTitle = document.getElementById("formGroupExampleInput");
    document.getElementById("demo").innerHTML = newTitle.innerText;
    console.log(newTitle.innerHTML)
}
