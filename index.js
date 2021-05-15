var i =0;
var txt = "Welcome to my Digital Portfolio  "
var speed= 150;
function type(){
    document.getElementById("type").innerHTML
        +=txt.charAt(i);
        
    i++;
    setTimeout(type,speed);

}
type()
