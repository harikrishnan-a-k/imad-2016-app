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
var conunter=0;
button.onclick= function(){
    //make request to the counter
    
    // capture the response and save it in a variable

    //render the incremented variable in correct span
    counter =counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}
