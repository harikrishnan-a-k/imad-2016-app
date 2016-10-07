console.log('Loaded!');
var img=document.getElementById('mypic');
var marginLeft=0;
var flag=0;
function moveimg(){
    if(flag===0)
    { 
        marginLeft+=5;
    }
    else{
        marginLeft-=5;
    }
    if(marginLeft==200)
        flag=1;
    if(marginLeft==-200)
        flag=0;
    
    img.style.marginLeft=marginLeft + 'px'; 
}
img.onload=function(){
    var  interval= setInterval(moveimg, 50 );
};
var button= document.getElementById('counter');
//var counter=0;
button.onclick= function(){
    //make request to the counter
    var request= new XMLHttpRequest();
    // capture the response and save it in a variable
        request.onreadystatechange = function(){
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status===200){
                    var counter=request.responseText;
                    var span=document.getElementById('count');
                    span.innerHTML=counter.toString();
                }
            }
        };
   //make request
   request.open('GET','http://harikrishnan-a-k.imad.hasura-app.io/counter',true);
   request.send(null);

    };

// name list handling

var submit=document.getElementById('send');
submit.onclick = function(){
    
    //make request to the counter
    var request= new XMLHttpRequest();
    // capture the response and save it in a variable
        request.onreadystatechange = function(){
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status===200){
                    var names=request.responseText;
                    names=JSON.parse(names);
                    
                                    var list='';
                    for(var i=0;i<names.length;i++)
                    {
                        list += '<li>'+names[i] +'</li>';
                    }
                    var ul=document.getElementById('namelist');
                    ul.innerHTML=list;
                    
                    
                }
            }
        };
   //make request
   
    var nmeInput=document.getElementById('name');
    var namee=nmeInput.value;
   request.open('GET','http://harikrishnan-a-k.imad.hasura-app.io/send/'+namee,true);
   request.send(null);

    
    
    
};
  //  alert("helloworld");
var c=document.getElementById('htmlbutton');
c.onclick=function(){alert("hello world");};

document.getElementById("com").style.fontSize = "30px";
