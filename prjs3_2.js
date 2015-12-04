var myheading="<h1>This is My Web Page!<h1>",
linktag="<a href=\"http://www.baidu.com\">Web Site Link</a>",
sometext="This text can be affected by the statement",
begineffect="<strong>",
endeffect="</strong>",
beginpara="<p>",
endpara="</p>";
document.write(begineffect+sometext+endeffect);
document.write(beginpara+linktag+endeffect);
document.write(beginpara+sometext+endpara);