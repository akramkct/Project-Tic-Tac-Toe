var count= 0;
function getbox(x){
    var h =document.getElementById('box-'+x);
    
    if(count==0){
         h.innerHTML = 'X'
         count =1;
    }
    else //if(count==1)
    {
        h.innerHTML = '0'
        count==0;
    }
}