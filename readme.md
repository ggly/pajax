ajax发出请求，service对其进行响应

service.js在这里是服务器程序

main.js用来监听页面事件，使用ajax构造请求

这里注意main.js本身的请求是由index.html的script发起，而其他资源例如2.js是由main.js中的函数发起请求的

**待解决**这里有个小问题是main.js由html页面发起请求，并且请求结束后就直接调用了，但是2.js在请求成功后也并未被调用，这里要怎么样才可以在不插入script的情况下调用2.js?

分页这里使用了字符串替换技巧，纯replace