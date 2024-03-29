var http = require('http');
var fs = require('fs');
var url = require('url');// url 모듈을 사용할 것이다. 
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
  
    if(_url == '/'){
      title='welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    //쿼리 스트링에 따라서 파일명이 생성된다.
    //fs.readFile('data/${queryData.id}','utf8',function(err,data))
    //}
    //제목1과 제목2를 바꾸고 싶다
    var template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body> 
  <h1><a href="/">WEB</a></h1>
  <ol>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="?id=CSS">CSS</a></li>
    <li><a href="?id=JavaScript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
  <img src="coding.jpg" width="100%">
  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
  </p>
</body>
</html>
    `;
    response.end(template);//사용자가 접속한 url에 따라서 
 
});
app.listen(3000);