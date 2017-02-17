/**
 * Created by Administrator on 2017/1/18.
 */


$(document).ready(function () {
    var $advantageBox = $('.advantageBox');
    var $underline2 = $('.Skill-head').find('i');
    var $underline1 = $('.product-head').find('i');
    var $underline3 = $('.person-head').find('i');
    var $p = $('.person-data').children();
    var $underline4=$('.contact-head').find('i');
    var $underline5=$('.position-head').find('i');
    var N_scro = 0;

    var index=0;
    var $roll=$('.roll');
    var $rollP=$roll.find('p');

    var $icon=$('.icon');
    var $iconI=$icon.find('i');

    $iconI.hide();


    $icon.mouseover(function () {
        var iconindex=$(this).index();
        $iconI.eq(iconindex).show();
    });
    $icon.mouseleave(function () {
        $iconI.hide();
    });

    jump();
    function jump() {
        var indexicon=0;
        setInterval(function () {
            indexicon++;
            if(indexicon>3){
                indexicon=0;
            }
            console.log(indexicon);
            $icon.eq(indexicon).show();
        },1000)
    }
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        console.log(top);
        if (top > 0) {
            $underline1.animate({width: '150px',}, 'slow');
        }
        if (top > 584) {
            $underline2.animate({width: '150px',}, 'slow');
        }
        for (var i in $advantageBox) {
            $advantageBox.eq(i).hide();
            if (top > 700) {
                $advantageBox.eq(i).show();
            }
        }
        if (top > 1200 && top < 2084) {
            (function () {
                N_scro++;
                if (N_scro > 1) {
                    return false;
                }
                JN_TH();
            }());
        }
        if (top > 1684) {
            $underline3.animate({width: '150px'}, 'slow');
        }
        for (var i in $p) {
            $p.eq(i).hide();
            if (top > 1960) {
                $p.eq(i).show();
            }
        }
        if(top>2195){
            $underline4.animate({width: '150px'}, 'slow');
        }
        if(top>3203){
            $underline5.animate({width: '150px'}, 'slow');
        }
            // for (var i in $icon) {
            //     $icon.eq(i).hide();
            //     if (top > 2436) {
            //         $p.eq(i).show();
            //     }
            // }
    });

    //头像跳动


    //文字滚动
    roll();
    function  roll() {
        setInterval(function () {
            index++;
            var $rollTop=$rollP.css('top');
            if(index>=70){
                index=-10;
            }
            $rollP.css('top',-index*1+'px');
        },100);
    }

    // 圆圈转动
    function JN_TH() {
        f_Four_1();
        //设置动画
        function f_Four_1() {
            var num = 270;
            var n1 = 0;
            var hsl = 360;
            var t = window.setInterval(function () {
                hui();
            }, 30);
            var SS = false;
            var b1 = $(".my-data .BF-85-85-70 li:nth-child(1)>div b");

            function hui() {
                //设置数字

                n1 += 2;
                b1.html(n1 + "%");

                hsl -= 5;
                num += 7;
                if (num >= 360) {
                    num = 0;
                    SS = true;
                }

                if (SS == true) {

                    if (num >= 216) {
                        num = 216;
                        hsl = 120;
                        b1.html("85%");
                        clearInterval(t);
                    }
                }

                var c = document.getElementById("four_hsll");
                var ctx = c.getContext("2d");
                ctx.clearRect(0, 0, 234, 250);
                ctx.beginPath();
                ctx.lineWidth = "12";
                ctx.strokeStyle = "hsl(" + (hsl / 5) + ",100%,50%)";
                ctx.arc(110, 125, 100, Math.PI * (270 / 180), Math.PI * (num / 180));
                ctx.stroke();

            }
        }


        f_Four_2();
        function f_Four_2() {
            var num = 270;
            var n2 = 0;
            var hsl = 360;
            var t = window.setInterval(function () {
                hui();
            }, 30);
            var SS = false;
            var b2 = $(".my-data .BF-85-85-70 li:nth-child(2)>div b");

            function hui() {

                //设置数字
                n2 += 2;
                b2.html(n2 + "%");

                hsl -= 5;
                num += 7;
                if (num >= 360) {
                    num = 0;
                    SS = true;
                }

                if (SS == true) {

                    if (num >= 162) {
                        num = 162;
                        hsl = 162;
                        b2.html("70%");
                        clearInterval(t);
                    }
                }

                var c = document.getElementById("four_hsll");
                var ctx = c.getContext("2d");
                ctx.clearRect(282, 0, 234, 250);
                ctx.beginPath();
                ctx.lineWidth = "12";
                ctx.strokeStyle = "hsl(" + (hsl / 5) + ",100%,50%)";
                ctx.arc(404, 125, 100, Math.PI * (270 / 180), Math.PI * (num / 180));
                ctx.stroke();
            }
        }


        f_Four_3();
        function f_Four_3() {
            var num = 270;
            var n3 = 0;
            var hsl = 360;
            var t = window.setInterval(function () {
                hui();
            }, 30);
            var SS = false;
            var b3 = $(".my-data .BF-85-85-70 li:nth-child(3)>div b");

            function hui() {
                //设置数字
                n3 += 2;
                b3.html(n3 + "%");

                hsl -= 5;
                num += 7;
                if (num >= 360) {
                    num = 0;
                    SS = true;
                }

                if (SS == true) {

                    if (num >= 162) {
                        num = 162;
                        hsl = 162;
                        b3.html("70%");
                        clearInterval(t);
                    }
                }

                var c = document.getElementById("four_hsll");
                var ctx = c.getContext("2d");
                ctx.clearRect(576, 0, 234, 250);
                ctx.beginPath();
                ctx.lineWidth = "12";
                ctx.strokeStyle = "hsl(" + (hsl / 5) + ",100%,50%)";
                ctx.arc(698, 125, 100, Math.PI * (270 / 180), Math.PI * (num / 180));
                ctx.stroke();
            }
        }
    }
//头像滚动
    My_Tx();
    function My_Tx() {
        //详细解说
        //鼠标移入 执行
        /*
         function 操作三大步骤
         1. 缩小I本身的width 和height 一个var即可;
         2. 缩小background-size 用宽高var 即可;
         3. 设置位置居中 记住最后结果留+5像素描边值 调整margin-top 和left 值 一个val即可
         1. 调用Move-Tx left
         2. 第二张图片到达 再放大;
         */
        //二
        var TX = $("#head .Tx-Mr-L");
        var I1 = $("#head .Move-TX i:nth-child(1)");
        var I2 = $("#head .Move-TX i:nth-child(2)");
        var I3 = $("#head .Move-TX i:nth-child(3)");
        var TX = $("#head .Move-TX");
        var J1 = null;
        var J2 = null;
        var J3 = null;//创建计时器;
        var Why = null;
        var Why_2 = null;

        var KIS = 0; //宏观变量锁死

        TX.on("mouseenter", function () {
            KIS++;
            if (KIS > 1) {
                return false;
            }
            Enter_Tx();
        })

        function Enter_Tx() {

            var KD_2 = 20;

            var KD = 180; //宽高 变量
            var Left = 0;

            if (parseInt(TX.css("right")) == 500) {
                TX.css("right", 0);
                //让I3归小
                I3.css("width", "20px");
                I3.css("height", "20px");
                I3.css("background-size", "20px");
                I3.css("margin-top", "45px");
                I3.css("margin-left", "45px");
            }

            //判断一下给谁设置;
            if (parseInt(TX.css("right")) == 250 && parseInt(I2.css("width")) == 180) {
                Why = I2;
            } else {
                Why = I1;
            }
            if (parseInt(TX.css("right")) == 250 && parseInt(I3.css("width")) == 20) {
                //如果是第二张的话 那就从250开始移动;
                Why_2 = I3;
                Left = 250;
            } else {
                Why_2 = I2;
            }

            J1 = setInterval(function () {
                JS1();
            }, 10);

            function JS1() {
                KD -= 2;
                if (KD <= 20) {
                    clearInterval(J1);
                    KD = 20;
                    J2 = setInterval(function () {
                        JS2()
                    }, 10)
                }
                Why.css("width", KD + "px");
                Why.css("height", KD + "px");
                //调整它的background-size
                //计算外边距居中;
                Why.css("background-size", KD + "px");
                Why.css("margin-top", parseInt((180 - KD) / 2) + "px");
                Why.css("margin-left", parseInt((180 - KD) / 2) + "px");
            }


            function JS2() {

                Left += 5;
                if (Why == I1) {
                    if (Left >= 250) {
                        clearInterval(J2);
                        Left = 250;
                        J3 = setInterval(function () {
                            JS3()
                        }, 1)
                    }
                }
                else if (Why == I2) {
                    if (Left >= 500) {
                        clearInterval(J2);
                        Left = 500;
                        J3 = setInterval(function () {
                            JS3()
                        }, 1)
                    }
                }
                TX.css("right", Left);
            }

            function JS3() {

                KD_2 += 2;
                if (KD_2 >= 180) {
                    clearInterval(J3);
                    KD_2 = 180;
                    KIS = 0;
                }
                Why_2.css("width", KD_2);
                Why_2.css("height", KD_2);
                Why_2.css("background-size", KD_2);
                //外边距
                Why_2.css("margin-top", parseInt((180 - KD_2) / 2) + "px");
                Why_2.css("margin-left", parseInt((180 - KD_2) / 2) + "px");

            }
        } // first_Tx
    }
});


