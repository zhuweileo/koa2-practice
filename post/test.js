
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          if(xhr.status === 200 && xhr.readyState === 4){
            console.log(xhr)
          }
        }
        xhr.open('post','http://localhost:3000')
        xhr.send(JSON.stringify({name: 'zhuwei',age: 19}))