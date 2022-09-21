const Button = document.getElementById('button');
let request = new XMLHttpRequest();
var Advice;

const Random = ()=>{
    request.open('GET','https://api.adviceslip.com/advice');
    request.send();
}
Random();

request.onload = () =>{
    
    if (request.status === 200){
        Advice = JSON.parse(request.response)
        let id = Advice.slip.id;
        let advice = Advice.slip.advice;
        Show(id,advice);
    }else{
        console.log(`error ${request.status} ${request.statusText}`);
    }
}

const Show = (id,advice) =>{
    document.getElementById('AdviceId').innerHTML = id;
    document.getElementById('AdviceText').innerHTML = '"'+advice+'"';
}

Button.onclick = () =>{
    Random();
}

