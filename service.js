//导入相关模块，属于node.js内容
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
//一个在命令行中使用的提醒
if(!port){
  console.log('请指定端口如：\n node server.js 8888')
  process.exit(1)
}
//创建服务
var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method
  //命令行中一个简单的提示
  console.log('发现请求！路径（带查询参数）为：' + pathWithQuery)
  //开始写路由
  if(path === '/'){
    console.log('主页加载成功')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    let string = fs.readFileSync('index.html').toString()
    const p1 = fs.readFileSync('p1.json').toString()
    const array = JSON.parse(p1)
    const result = array.map(item=>`<li>${item.id}</li>`).join('')
    string = string.replace('{{p1}}', `<ul id="mylist">${result}</ul>`)
    response.write(string)
    response.end()
  }else if(path === '/main.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('main.js'))
    response.end()
  }else if(path === '/main.css'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(fs.readFileSync('main.css'))
    response.end()
  } else if(path === '/2.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('2.js'))
    response.end()
  }else if(path === '/1.html'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    let string = fs.readFileSync('1.html').toString()
    response.write(string)
    response.end()
  }else if(path === '/3.xml'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/xml;charset=utf-8')
    let string = fs.readFileSync('3.xml').toString()
    response.write(string)
    response.end()
  }else if(path === '/4.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('4.json'))
    response.end()
  }else if(path === '/p2'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('p2.json'))
    response.end()
  } else if(path === '/p3'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('p3.json'))
    response.end()
  }else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你输入的路径不存在对应的内容`)
    response.end()
  }
})
//启动服务
server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)
