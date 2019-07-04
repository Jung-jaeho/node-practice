var fs = require('fs');
// 우리가 읽고 싶은 파일을 적는다.
fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
});