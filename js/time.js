/**
 * Created by Administrator on 2017/1/23.
 */
(function(){
    var canvas=null;
    var ctx=null;
    var cw=300;
    var ch=300;
    window.addEventListener('load',function(){
        canvas=document.getElementById('simple');
        ctx=canvas.getContext('2d');
//                var gcolor=ctx.createLinearGradient(0,0,0,300);
//                gcolor.addColorStop(0,'blue');
//                gcolor.addColorStop(1,'red');
//                ctx.fillStyle=gcolor;
        cw=parseInt(canvas.width);
        ch=parseInt(canvas.height);
        ctx.translate(cw/2,ch/2);
        draw_watch();
    },false);
    function draw_watch(){
        ctx.clearRect(-cw/2,-ch/2,cw,ch);
        var len=Math.min(cw,ch)/2;

        var tlen=len*0.85;
        ctx.font='14px "Arial"';
        ctx.fillStyle='black';
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        for(var i=0;i<12;i++){
            var tag1=Math.PI*2*(3-i)/12;
            var tx=tlen*Math.cos(tag1);
            var ty=-tlen*Math.sin(tag1);
            ctx.fillText(i,tx,ty);
        }
        var d=new Date();
        var h= d.getHours();
        var m= d.getMinutes();
        var s= d.getSeconds();
        if(h>12){h=h-12;}

        var angle1=Math.PI*2*(3-(h+m/60))/12;
        var length1=len*0.5;
        var width1=5;
        var color1="#fff000";
        drawhand(angle1,length1,width1,color1);

        var angle2=Math.PI*2*(15-(m+s/60))/60;
        var length2=len*0.7;
        var width2=3;
        var color2="green";
        drawhand(angle2,length2,width2,color2);

        var angle3=Math.PI*2*(15-s)/60;
        var length3=len*0.8;
        var width3=1;
        var color3='red';
        drawhand(angle3,length3,width3,color3);
        setTimeout(draw_watch,1000);

    }

    function drawhand(angle,len,width,color){
        var x=len*Math.cos(angle);
        var y=-len*Math.sin(angle);

        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.lineCap='round';
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
})();
