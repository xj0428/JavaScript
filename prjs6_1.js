var msg="";
var city=window.prompt("What's the name of your city?","");
if((city===null)||(city===""))
msg="No city entered!";
else{
switch(city){
case "Johnstown":
msg="We can have items delivered to you in 3 days.";
break;
case "Donville":
msg="We can have items delivered to you in 1 days.";
break;
case "Danieltown":
case "Martyville":
msg="We can have items delivered to you in 2 days.";
break;
default:
msg="Sorry!we don't deliver to your city!";
}
}
document.write(msg);