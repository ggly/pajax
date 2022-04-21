console.log("main.js引入成功")
getCss.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open("GET",'main.css');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert("css加载失败")
            }
        }
    }
    request.send();
}
getJs.onclick = () =>{
    console.log('确实是请求2.js去了')
    const request = new XMLHttpRequest()
    request.open('GET','2.js')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                // const jsevidence = document.createElement('script')
                // jsevidence.innerHTML = request.response
                // document.body.appendChild(jsevidence)
            }else{
                alert("2.js加载失败")
            }
        }
    }
    request.send()
}
getHtml.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','1.html')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const div = document.createElement("div");
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }else{
                alert("1.html加载失败")
            }
        }
    }
    request.send()
}
getXml.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','3.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const dom = request.responseXML;
                const text = dom.getElementsByTagName("warning")[0].textContent;
                console.log(text.trim());
            }else{
                alert("3.xml加载失败")
            }
        }
    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '4.json')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                console.log(request.response);
                const jsobj = JSON.parse(request.response);
                console.log(jsobj);
            }else{
                alert("4.json加载失败")
            }
        }
    }
    request.send()
  };
let n = 1
getPage.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET", `/p${n+1}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.id;
          mylist.appendChild(li);
        });
        n+=1
      }
    };
    request.send();
}