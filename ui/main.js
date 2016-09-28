console.log('Loaded!');
var img=document.getElementById('mypic');
var marginLeft=0;
function moveimg(){
    if(marginLeft>200)
    { 
        marginLeft+=5;
    }
    else{
        marginLeft-=5;
    }
    
    img.style.marginLeft=marginLeft + 'px'; 
}
body.onload=function(){
    var  interval= setInterval(moveimg, 50 );
};