var count= 0;var draw=0;
function getbox(x){
    var h =document.getElementById('box-'+x);
    if(h.innerHTML== 'X' || h.innerHTML== '0')  return 0;
    
    if(count==0){
         h.innerHTML = 'X'
         count =1;
         draw++;
    }
    else if(count==1)
    {
        h.innerHTML = '0';
        count=0;
        draw++;
    }
    var box = document.getElementsByClassName('box');

   

    if( (box[0].innerHTML=='X' && box[1].innerHTML=='X' && box[2].innerHTML=='X') || (box[3].innerHTML=='X' && box[4].innerHTML=='X' && box[5].innerHTML=='X') || (box[6].innerHTML=='X' && box[7].innerHTML=='X' && box[8].innerHTML=='X') || (box[0].innerHTML=='X' && box[4].innerHTML=='X' && box[8].innerHTML=='X') || (box[2].innerHTML=='X' && box[4].innerHTML=='X' && box[6].innerHTML=='X') || (box[0].innerHTML=='X' && box[3].innerHTML=='X' && box[6].innerHTML=='X') || (box[1].innerHTML=='X' && box[4].innerHTML=='X' && box[7].innerHTML=='X') || (box[2].innerHTML=='X' && box[5].innerHTML=='X' && box[8].innerHTML=='X') )
    {
         document.getElementById('status').innerHTML="Player-1 WON";

         var dis = document.getElementById('grid1');
        dis.classList.add("disablediv");
        /* var  st = document.getElementById('status')
        if(st != NaN)
        {
            for(var i=0; i<9; i++)
            {
                //alert("hello");
                box[i].classList.add("disablediv");
            }
        }*/

    }
    else if( (box[0].innerHTML=='0' && box[1].innerHTML=='0' && box[2].innerHTML=='0') || (box[3].innerHTML=='0' && box[4].innerHTML=='0' && box[5].innerHTML=='0') || (box[6].innerHTML=='0' && box[7].innerHTML=='0' && box[8].innerHTML=='0') || (box[0].innerHTML=='0' && box[4].innerHTML=='0' && box[8].innerHTML=='0') || (box[2].innerHTML=='0' && box[4].innerHTML=='0' && box[6].innerHTML=='0') || (box[0].innerHTML=='0' && box[3].innerHTML=='0' && box[6].innerHTML=='0') || (box[1].innerHTML=='0' && box[4].innerHTML=='0' && box[7].innerHTML=='0') || (box[2].innerHTML=='0' && box[5].innerHTML=='0' && box[8].innerHTML=='0') )
    {
         document.getElementById('status').innerHTML="Player-2 WON";
         var dis = document.getElementById('grid1');
        dis.classList.add("disablediv");

    }
    else if(draw==9)
    {
        document.getElementById('status').innerHTML="Match Draw!!!";
    }
}

function resetdata(){
    var box1 = document.getElementsByClassName('box');
    for(var i=0; i<9; i++)
        {
            box1[i].innerHTML="";
        }

}


