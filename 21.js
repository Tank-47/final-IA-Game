var player_card = document.querySelector(".play_card");
var ai_card = document.querySelector(".ai_card");
var btn_deal = document.querySelector(".btn_deal");
var take_card = document.querySelector(".take_card");
var stop_card = document.querySelector(".stop_card");
var deal = document.querySelector(".dealCard_1");
var deal_1 = document.querySelector(".dealCard_2");
var deal_2 = document.querySelector(".dealCard_3");
var deal_3 = document.querySelector(".dealCard_4");
var greenBox = document.querySelector(".greenBox");
var tips = document.querySelector(".tips");
var level = document.querySelector(".level");
var start_game = document.querySelector(".start_game");
var play = 'play';
var AI = 'AI';
var num = 0;
var array = new Array(52);
var play_win=0;
var ai_win=0;
var winSum;     //当前难度下需要赢的局数
var ai_takeCardNumber = 0;   //ai拿卡次数
var card = ['11','12','13','14','15','16','17','18','19','20','1a','1b','1c'
,'21','22','23','24','25','26','27','28','29','30','2a','2b','2c'
,'31','32','33','34','35','36','37','38','39','40','3a','3b','3c'
,'41','42','43','44','45','46','47','48','49','50','4a','4b','4c','unknow'];
var url = window.location.search;
var anothergame;
var round;
if(url.indexOf("?")!=1){
    anothergame = url.substr(url.indexOf("=")+1)
    console.log(anothergame);
}
var currentX;
var currentY;
var score=0;
var random=[1,2,3,4,5,6,7,8,9];
if(url.indexOf("?")!=1){
    anothergame = url.substr(url.indexOf("=")+1)
    console.log(anothergame);
    var i=0;
    var l=0;
    do{
        if(anothergame[i]==","){
            l++;
        }
        else{
            switch(l){
                    case(0):currentX=parseInt(anothergame[i]);
                            console.log(currentX);
                            break;
                    case(1):currentY=parseInt(anothergame[i]);
                            console.log(currentY);
                            break;
                    case(2):round=parseInt(anothergame[i]);
                            console.log(round);
                            break;
                    case(3):score+=anothergame[i];
                            console.log(score);
                            break;
                    case(4):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(5):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(6):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(7):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(8):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(9):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(10):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(11):random[(l-4)]=parseInt(anothergame[i]);
                            break;
                    case(12):random[(l-4)]=parseInt(anothergame[i]);
                            break;
            }
        }
        i++;
    }while(anothergame[i]!=null);
    score=parseInt(score);
    console.log(score);
   
    switch(round){   //随着关卡难度上升，玩家需要赢得对应的局数 
            case(2):winSum = 1;
                    break;
            case(4):winSum = 2;
                    break;
            case(6):winSum = 3;
                    break;
            case(8):winSun = 4;
                    beak;
            default:winSum = 5;
                    break;
    }
}

//生成边框
document.addEventListener("DOMContentLoaded",function(){
    createBorder(greenBox);
  //  player_card.style.display ="none";
    //ai_card.style.display ="none";
    //deal.style.display ="none";
});

//边框
function createBorder(greenBox){ 
    var gird = document.createElement("div");
    gird.style.float = "left";
    gird.style.width = "720px";
    gird.style.height = "720px";
    gird.style.borderLeft = "3px solid black";
    gird.style.borderRight = "3px solid black";
    gird.style.borderTop = "3px solid black";
    gird.style.borderBottom = "3px solid black";
    greenBox.appendChild(gird);
};


var stopTime = 0;    //洗牌动画设置一个计时器，当stopTime加到3000后清除
function shuffleCard(){
    timer = setInterval(function(){
      shuffleAnimation(); 
        stopTime+= 15;   
        if(stopTime ==3000){
            clearInterval(timer);
        } 
    }, 15);
}


var moveRight_1 = true;
var moveRight_2 = true;
var moveLeft_1 = true;
var moveLeft_2 = true;

//洗牌动画
function shuffleAnimation(){
    if(moveRight_1){
       // console.log(deal.offsetLeft);
        deal.style.left = deal.offsetLeft + 10 +'px';
        if(deal.offsetLeft >= 495){
            moveRight_1 = false;
        }
    }
         else if(!moveRight_1){
           //  console.log(deal.offsetLeft);
           // console.log(">=450");
            deal.style.left = deal.offsetLeft - 10 +'px';
             if(deal.offsetLeft <= 295){
                 moveRight_1 = true;
                }
        }
    
    if(moveRight_2){
       // console.log(deal_1.offsetLeft);
        deal_1.style.left = deal_1.offsetLeft -10 +'px';
        if(deal_1.offsetLeft <= 258){
            moveRight_2 = false;
        }
    }
    else if(!moveRight_2){
       // console.log(deal_1.offsetLeft);
        deal_1.style.left = deal_1.offsetLeft + 10+ 'px';
        if(deal_1.offsetLeft >= 458){
            moveRight_2 =true;
        }
    }
    
    if(moveLeft_1){
        deal_2.style.left = deal_2.offsetLeft -10 +'px';
        if(deal_2.offsetLeft <= 88){
            moveLeft_1 = false;
        }
    }
    else if(!moveLeft_1){
            deal_2.style.left = deal_2.offsetLeft + 10 +'px';
            if(deal_2.offsetLeft >= 288){
            moveLeft_1 = true;           
               }
    }
    
    if(moveLeft_2){
        deal_3.style.left = deal_3.offsetLeft -20 +'px';
        if(deal_3.offsetLeft <= 188){
            moveLeft_2 = false;
        }
    }
    else if(!moveLeft_2){
            deal_3.style.left = deal_3.offsetLeft + 20 +'px';
            if(deal_3.offsetLeft >= 288){
            moveLeft_2 = true;           
               }
    }
     start_game.style.display = "none";
    setTimeout(function(){
         btn_deal.style.display = "block"; 
    },3100);
     
}

//发牌动画
function takeCard_anim(dis,play){
     setTimeout(function(){ 
    
           $("#"+num +play+"e").css("display","none");
        console.log(num);
          // $("#"+num +AI+"e").css("display","none");
           num++;
       },700);  
    
       $(".dealCard").append($("<div id='card'/>").append($('<img  id='+ num +play +'e>').attr("src","./image/unknow.JPG")));
      $("#"+num+play+"e").animate({top:''+ dis+'px', 
                                        left:"-=50px",
                                        },"slow");
       $("#"+num+play+"e").css({transform:"rotate(0deg)"});
    
}


//计算点数
Player.prototype.getPoint = function(playerCard){
    var sum = 0;
    var flag = true;
    
    for(var i = 0; i<playerCard.length; i++){
        sum += Point(playerCard[i],flag);
    }
    if(sum <= 21){
        return sum;
    }
    else{
        sum = 0;
        for(var i = 0; i<playerCard.length; i++){
        sum += Point(playerCard[i],!flag);
        }
        return sum;
    }
};

function Player(){
    this.card = [];
}

function Ai(){
    Player.call(this);
}


Ai.prototype = new Player();
Ai.prototype.construct = Ai;

var player = new Player();
var ai = new Ai();
 
//游戲開始
function start(){
    
    takeCard_anim(250,play);
    setTimeout(function(){
        player.card.push(getCard());
    },700);
    
    setTimeout(function(){
        player_card.innerHTML = showCard(player.card);
    },700);
    
    setTimeout("takeCard_anim(250,play)", 730);
   setTimeout(function(){
        player.card.push(getCard());
       console.log(player.card);
       console.log("玩家点数" + player.getPoint(player.card));
    },1400);
     
    setTimeout(function(){
        player_card.innerHTML = showCard(player.card);
    },1400);
    
     setTimeout("takeCard_anim(-260,AI)", 1460);
    setTimeout(function(){
        ai.card.push(getCard());
    },2100);
   
    setTimeout(function(){
         ai_card.innerHTML = '<img src="./image/'+ card[ai.card[0]] +'.JPG" alt="card">';
    },2100);
    
    setTimeout("takeCard_anim(-260,AI)", 2190);
    setTimeout(function(){
       ai.card.push(getCard());
        console.log("电脑点数" + ai.getPoint(ai.card));
        console.log(ai.card);
    },2800);
   
    setTimeout(function(){
        ai_card.innerHTML +='<img src="./image/unknow.JPG" style ="margin-left:1em" alt ="card">">';
    },2800);
    
    //console.log(ai.card);
   // console.log(player.card);
    
   // console.log("电脑点数" + ai.getPoint(ai.card));
   // console.log("玩家点数" + player.getPoint(player.card));
  
   // ai_card.innerHTML = '<img src="./image/'+ card[ai.card[0]] +'.JPG" alt="card"><img src = "./image/unknow.JPG" style ="margin-left:1em" alt ="card">';
    
    setTimeout(function(){
         btn_deal.style.display = "none";
        take_card.style.display = "block";
        stop_card.style.display = "block";
    },3100);
    start_game.removeEventListener("click", shuffleCard);
    btn_deal.removeEventListener('click', start)
    take_card.addEventListener('click', takeCardAnim);  
    stop_card.addEventListener('click', stopCard);
};

function takeCardAnim(){
    takeCard_anim(250,play);
    setTimeout(takeCard,700);
    /*if(ai.getPoint(ai.card) < 17){
       setTimeout("takeCard_anim(-260,AI)",700);
         setTimeout(ai_takeCard,1400);
    }
    else if(ai.getPoint(ai.card > 21)){
        gameover();
    }*/
}

//拿牌
function takeCard(){
    player.card.push(getCard());
    player_card.innerHTML = showCard(player.card);  
     console.log("玩家拿牌");
    console.log("玩家点数" + player.getPoint(player.card));
      
    if(player.getPoint(player.card) > 21){
        console.log("爆牌了，你输了");
        take_card.removeEventListener('click',takeCard);
        btn_deal.removeEventListener('click', start);
        setTimeout(gameover,1000);
    }
}


//停牌动画
function stopCardAnim(){
     setTimeout("takeCard_anim(-260,AI)",500);
     setTimeout(ai_takeCard,1200);
    setTimeout(function(){
        if(ai.getPoint(ai.card)<17){
        stopCard();
        }
        else if(ai.getPoint(ai.card)>=17){
        gameover();
        }
    },1210);
}

//点击停牌后，ai开始拿牌
function stopCard(){
    take_card.removeEventListener('click',takeCard);
    btn_deal.removeEventListener('click', start);
    if(ai.getPoint(ai.card)<17){
        stopCardAnim();
    }
    else{
        gameover();
    }
}

//游戲結束
function gameover(){
    console.log("游戏结束");
    ai_card.innerHTML = showCard(ai.card);
    take_card.removeEventListener('click', takeCard);
    btn_deal.removeEventListener('click', start);
    stop_card.removeEventListener('click', stopCard);
    take_card.style.display = "none";
    stop_card.style.display = "none";
    
    if(player.getPoint(player.card)==21){
        if(ai.getPoint(ai.card)==21){
            showTips("平手,再来一局");
            setTimeout(reset,2000);
            console.log("1");
        }
        else if(ai.getPoint(ai.card)<21){
            showTips("你贏了");
            setTimeout("whoWin(play)",2000);
            setTimeout(reset,2000);
            console.log("2");
        } 
        else if(ai.getPoint(ai.card)>21){
            showTips("你贏了");
            setTimeout("whoWin(play)",2000);
            setTimeout(reset,2000);
            console.log("3");
        }
    }
    
    else if(player.getPoint(player.card)>21){
        showTips("你爆牌輸了");
        setTimeout("whoWin(AI)",2000);
        setTimeout(reset,2000);
        console.log("4");
    }

    else if(ai.getPoint(ai.card)>21){
       showTips("對手爆牌，你贏了");
        setTimeout("whoWin(play)",2000);
        setTimeout(reset,2000);
        console.log("5");
       }

       else if(player.getPoint(player.card)<21){
        if(ai.getPoint(ai.card) == player.getPoint(player.card)){
            showTips("平手，再来一局");
            setTimeout(reset,2000);
            console.log("6");
        }
        else if(ai.getPoint(ai.card) > player.getPoint(player.card)){
            showTips("你輸了");
            setTimeout("whoWin(AI)",2000);
            setTimeout(reset,2000);
            console.log("7");
        }
        else if(ai.getPoint(ai.card) < player.getPoint(player.card)){
            showTips("你贏了");
            setTimeout("whoWin(play)",2000);
            setTimeout(reset,2000);
            console.log("8");
        }
    }

    else if(player.card.length == 2 && player.getPoint(player.card) == 21){
        showTips("你是blackJack，你赢了");
        setTimeout("whoWin(play)",2000);
        setTimeout(reset,2000);
        console.log("9");
    }

    else if(ai.card.length == 2 && ai.getPoint(ai.card) == 21){
        showTips("你的對手是blackJack，你輸了");
        setTimeout("whoWin(AI)",2000);
        setTimeout(reset,2000);
        console.log("10");
    }
   
}

//游戲開始前預設
function reset() {
        player.card = [];      
        ai.card = [];
        ai_takeCardNumber = 1;
        ai_card.innerHTML = '';
        player_card.innerHTML = '';
        tips.innerHTML = '';
        start_game.style.display = "block";
        btn_deal.style.display = "none";
        take_card.style.display = "none";
        stop_card.style.display = "none";
        start_game.addEventListener("click", shuffleCard);
        btn_deal.addEventListener("click", start);
        stopTime = 0;
        moveRight_1 = true;
        moveRight_2 = true;
        moveLeft_1 = true;
        moveLeft_2 = true;
        showTips("比分" + play_win+ " : "+ ai_win);
        showLevel("Level " + round);
        for(var i = 0; i < 52; i++) {
            array[i] = i;
        }
    }
    reset();

//電腦拿牌
function ai_takeCard(){
    //點數小於17時拿牌
    if(ai.getPoint(ai.card) < 17){        
        ai_takeCardNumber++;   
        ai.card.push(getCard());
         ai_card.innerHTML = showCard(ai.card) + '<img src = "./image/unknow.JPG" style ="margin-left:'+ai_takeCardNumber +'em" alt ="card">';
        console.log("电脑点数" + ai.getPoint(ai.card));
        console.log("电脑拿牌");

    }
    else if(ai.getPoint(ai.card)>17){
        gameover();
    }
                    //點數大於21時爆牌游戲結束
}

//隨機拿牌
function getCard(){
    var index = Math.floor(Math.random() * array.length);
    var number = array[index];
     array.splice(index,1);     //刪除拿過的牌
    return number;
}

//顯示撲克牌
function showCard(cards){
    var img ='';
    for(var i=0; i<cards.length; i++){
        img += ('<img id ='+ i +'"d" src ="./image/' + card[cards[i]] + '.JPG" style ="margin-left: ' + i +'em;" alt="card">');
    }
    return img;
}

//計算牌的點數，A是否等于11或者1
function Point(i ,flag){        
    if(flag){
        if(i === 0 || i === 13 || i=== 26 || i === 39){
            return 11;
        }
    }   
    else{
         if(i === 0 || i === 13 || i=== 26 || i === 39){
            return 1;
        }
    }
    
    if(i >= 1 && i <= 12){
        if(i <= 9){
            return i+1;
        }
        else{
            return 10;
        }
    }
    else if(i >= 14 && i <= 25 ){
         if(i <= 22){
            return (i - 12);
            }
        else{
            return 10;
        }
    }
    else if(i >= 27 && i <= 38){
        if(i <= 35){
          return (i - 25);        
        }      
        else{
            return 10;
        }
    }
    else if(i >= 40 && i <= 51) {
        if(i <= 48) {
            return (i - 38);
        } else {
            return 10;
        }
    }
}

//显示输赢
function showTips(ms){
    tips.innerHTML = ms;
     tips.classList.add("fadeIn");
}

//显示目前难度等级
function showLevel(ms){
    level.innerHTML = ms;
}

//对比本局获胜者
function whoWin(who){
    if(who==play){
        play_win+=1;
        console.log("playerwin" + play_win);
        play_VS_ai();
    }
    else if(who==AI){
        ai_win+=1;
        console.log("AIwin" + ai_win);
        play_VS_ai();
    }
}

//对比玩家和ai的分数
function play_VS_ai(){
    console.log("winSum =" +winSum);
    if(play_win == winSum){
         console.log("winSum =" +winSum);
        setTimeout(win,1000);
    }
    else if(ai_win == winSum){
    console.log("winSum =" +winSum);
        setTimeout(lost,1000);
    }
}

//赢了分数等于等级乘1000 ，等级上升1，回到迷宫
function win(){
    console.log("win");
    score+=round*1000;
    round=round+1;
    anothergame=[currentX,currentY,round,score];
    console.log(anothergame);
    window.location.href="index.html?value="+anothergame;
}

//输了直接回到迷宫
function lost(){
    console.log("lost");
    window.location.href="index.html?value="+anothergame;
}
