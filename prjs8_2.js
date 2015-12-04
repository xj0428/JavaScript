function Computer(type,processor,ram,hd){
this.type=type;
this.processor=processor;
this.ram=ram;
this.hd=hd;
}
var gaming_computer=new Computer("Gaming","4GHZ","16G","2TB");
var home_computer=new Computer("Home","2GHZ","4G","500G");
var work_computer=new Computer("Work","2GHZ","8G","1TB");

Computer.prototype.describe=function(){
document.write("<p>"+this.type+":<br>");
document.write("processor:"+this.processor+"<br>");
document.write("RAM: "+this.ram+"<br>");
document.write("Hard Disk: "+this.hd+"</p>");
}

gaming_computer.describe();
home_computer.describe();
work_computer.describe();