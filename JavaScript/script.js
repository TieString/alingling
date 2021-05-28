window.onload=function(){
    if ("ontouchstart" in document) {
        document.getElementById("main").style.display="none";
        document.getElementById("main").style.backgroundColor="white";
        document.getElementById("log").style.display="block";
    }
    // jQuery
    $(document).ready(function(){
        // 开始动画
        // 隐藏色条和文字
        $(".bar").hide();
        $("#words").hide();
        $("#arrow").hide();
        // 淡入色条和文字
        $(".bar").fadeIn(1000, function(){
            $("#words").fadeIn(1500);
            $("#arrow").fadeIn(1000);
        });
        $("#arrow").click(function (e) { 
            e.preventDefault();
            $(this).animate({
                right:'-4px',
                opacity:'0'
            },1000);
            $("#words").hide();
            $("#words").fadeIn(5000);
        });
    });
    // 获取箭头
    var arrow = document.getElementById("arrow");
    var words = document.getElementById("words");
    // 改变id
    arrow.onclick = function(){
        // 色条颜色变化
        bar1.id = "bar_1";
        bar2.id = "bar_2";
        bar3.id = "bar_3";
        bar4.id = "bar_4";
        bar5.id = "bar_5";
        bar6.id = "bar_6";
        bar7.id = "bar_7";
        bar8.id = "bar_8";
        bar9.id = "bar_9";
        bar10.id = "bar_10";
        bar11.id = "bar_11";
        bar12.id = "bar_12";
        bar13.id = "bar_13";
        bar14.id = "bar_14";
        bar15.id = "bar_15";
        bar16.id = "bar_16";
        bar17.id = "bar_17";
        bar18.id = "bar_18";
        bar19.id = "bar_19";
        bar20.id = "bar_20";
        bar21.id = "bar_21";
        bar22.id = "bar_22";
        bar23.id = "bar_23";
        bar24.id = "bar_24";
        bar25.id = "bar_25";
        bar26.id = "bar_26";
        bar27.id = "bar_27";
        bar28.id = "bar_28";
        bar29.id = "bar_29";
        bar30.id = "bar_30";
        bar31.id = "bar_31";
        bar32.id = "bar_32";
        bar33.id = "bar_33";
        bar34.id = "bar_34";
        bar35.id = "bar_35";
        bar36.id = "bar_36";
        bar37.id = "bar_37";
        bar38.id = "bar_38";
        bar39.id = "bar_39";
        bar40.id = "bar_40";
        bar41.id = "bar_41";
        bar42.id = "bar_42";
        bar43.id = "bar_43";
        bar44.id = "bar_44";
        bar45.id = "bar_45";
        bar46.id = "bar_46";
        bar47.id = "bar_47"; 
        // 更改文字样式
        words.id = "word";
        words.innerHTML = "是你。"
        initFires();
        
    };
    

    function initFires(){
        let canvas = document.getElementById("canvas");
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        let balls = [];
        let timer = null;
        let count = 0;
        let ballsAll = 1;

        timer = setInterval(() => {
            if(count == ballsAll){
                clearInterval(timer);
                count = null;

            }
            else{
                count++;
                balls.push(
                    // 添加每次创建的小球实例
                    new Ball({
                        r : 3,
                        x : Math.random() * width/3 + width/3,
                        y : height,
                        vx : Math.random() * 2 - 1,
                        vy : - Math.random() * 2 - 7,
                        end(){}
                    })
                );
            }
        }, 500);
        loop();
        function loop(){
            // 开启一个实时监听的函数
            for(let i=0; i < balls.length; i++){
                balls[i].update();
                balls[i].render();
            }
            requestAnimationFrame(loop);
        }
        class Ball{
            constructor(options){
                this.settings = Object.assign({
                    color:"yellow",
                    r:5,
                    g:0.1,
                    end(){}
                },options);
                for(let attr in this.settings){
                    this[attr] = this.settings[attr];
                }
            }
            // 更新
            update(){
                this.x += this.vx;
                this.y += this.vy;
                this.y += this.g;
            }
            // 重新绘制
            render(){
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.r, 0, 360 * Math.PI / 180);
                ctx.closePath();
                ctx.fill();
                this.end();
            }
        }
    }
};