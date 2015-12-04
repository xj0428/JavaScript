var computer_parts=[
["Monitors","LCD Screens","Vibrant Colors"],
["Motherboards","fast"],
["chips","pentium","very fast"],
["hard drivers","100-500GB","fast reading"],
["DVD-ROMs","burn CDs","burn DVDs","listen to both!"],
["cases","all sizes","choice of colors"],
["power supplies","we can get one for any computer!"]
];
var i=0,j=0;
for(i=0;i<computer_parts.length;i++)
{
   for(j=0;j<computer_parts.length;j++)
   {
	   if(j==0)
	   {
		   document.write(computer_parts[i][j]+":");
	   }
	   else if(j==computer_parts.length-1)
	   {
		   document.write(computer_parts[i][j]+"<br>");
	   }
	   else
	   {
		   document.write(computer_parts[i][j]+",");  
	   }
   }
}
		   