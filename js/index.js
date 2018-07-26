window.onload=function () {
    //购物车移入事件
    let shop=document.getElementsByClassName("shop")[0];
    let trolley=shop.getElementsByClassName("trolley")[0];
    let a=shop.getElementsByTagName("a")[0];
    shop.onmouseenter=function () {
        a.style.background="white";
        a.style.color="#ff6700";
        trolley.style.height="98px";
        trolley.style.boxShadow="0px 2px 6px 0px rgba(0,0,0,0.2)";
    };
    shop.onmouseleave=function () {
        trolley.style.height=0;
        a.style.background="black";
        a.style.color="#424242";
    };
    //顶部选项卡
    let bigbox=document.getElementsByClassName("bigbox")[0];
    let navitem=bigbox.getElementsByClassName("navitem");
    let knowmore=bigbox.getElementsByClassName("knowmore");
    for (let i=0;i<navitem.length;i++){
        navitem[i].onmouseenter=function () {
            for(let j=0;j<navitem.length;j++){
                knowmore[j].style.display="none";
            }
            knowmore[i].style.borderTop="1px solid #e0e0e0" ;
            knowmore[i].style.display="block";
            knowmore[i].style.boxShadow="0px 5px 11px -3px rgba(0,0,0,0.3)";
            knowmore[i].style.height="230px";
        };
        navitem[i].onmouseleave=function () {
            knowmore[i].style.height="0px";
            knowmore[i].style.borderTop="none" ;
        }
    }
    //侧选项卡移入效果
    let aside=document.getElementsByClassName("aside")[0];
    let li1=aside.getElementsByTagName("li");
    let cardright=aside.getElementsByClassName("cardright");
    for (let i=0;i<li1.length;i++){
        li1[i].onmouseenter=function () {
            li1[i].className="change";
            cardright[i].style.display = "block";
        };
        li1[i].onmouseleave=function () {
            li1[i].className="";
            cardright[i].style.display= "none";
        }
    }
    // 轮播图效果
    
    // let home=document.getElementsByClassName("home-first")[0];
    // let banner=home.getElementsByClassName("banner")[0];
    // let wraper=home.getElementsByClassName("waper")[0];
    // let back=home.getElementsByClassName("ui-prev")[0];
    // let forward=home.getElementsByClassName("ui-next")[0];
    // let lis=wraper.getElementsByTagName("a");
    // let num=0;
    // let t=setInterval(move,3000);
    // function move(){
    //     num++;
    //     if(num==lis.length){
    //         num=0;
    //     }
    //     for(let j=0;j<lis.length;j++){
    //         lis[j].style.zIndex=5;
    //     }
    //     lis[num].style.zIndex=10;
    // }
    // banner.onmouseenter=function(){
    //     clearInterval(t);
    // }
    // banner.onmouseleave=function(){
    //     t=setInterval(move,3000);
    // }
    // function move1(){
    //     num--;
    //     if(num<0){
    //         num=lis.length-1;
    //     }
    //     for(let j=0;j<lis.length;j++){
    //         lis[j].style.zIndex=5;
    //     }
    //     lis[num].style.zIndex=10;
    // }
    // back.onclick=function(){
    //     move1();
    // }
    // forward.onclick=function(){
    //     move();
    // }
    // 轮播图第二次展示
    let list=document.querySelectorAll(".waper a");
    let back=document.querySelector(".uiprev");
    let forward=document.querySelector(".uinext");
    let btn=document.querySelectorAll(".btn");
    let banner=document.querySelector(".banner");
    let now=0;
    let next=0;
    let flag=true;
    let width=parseInt(getComputedStyle(banner,null).width);
    let t=setInterval(move,3000);
    function move(){
        next++;
        if(next==list.length){
            next=0;
        }
        // for(let i=0;i<list.length;i++){
        //     btn[i].style.background="#8F8D88";
        // }
        list[next].style.left=width+"px";
        animate(list[now],{left:-width});
        animate(list[next],{left:0},function(){
            flag=true;
        });
        // btn[next].style.background="#fff";
        btn[next].classList.add("hot");
        btn[now].classList.remove("hot");
        now=next;
    }
    function move1(){
        next--;
        if(next<0){
            next=list.length-1;
        }
        // for(let i=0;i<list.length;i++){
        //     btn[i].style.background="#8F8D88";
        // }
        btn[next].classList.add("hot");
        btn[now].classList.remove("hot");
        list[next].style.left=-width+"px";
        animate(list[now],{left:width});
        animate(list[next],{left:0},function(){
            flag=true;
        });
        // btn[next].style.background="#fff";
        now=next;
    }
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    // let flag=true;
    forward.onclick=function(){
        if(flag==false){
            return;
        }
        if(next==btn.length-1){
            return;
        }
        flag=false;
        move();
    }
    back.onclick=function(){
        if(flag==false){
            return;
        }
        if(next==0){
            return;
        }
        flag=false;
        move1();
    }
    btn.forEach(function(elements,index){
        elements.onclick=function(){
            if(index==now){
                return;
            }
            if(index>now){
                list[index].style.left=width+"px";
                animate(list[now],{left:-width});
                animate(list[index],{left:0});
            }
            else if(index<now){
                list[index].style.left=-width+"px";
                animate(list[now],{left:width});
                animate(list[index],{left:0});
            }
            btn[now].classList.remove("hot");
            btn[index].classList.add("hot");
            next=now=index;
        }
    })



    
    //封装函数实现家电，智能...的选项卡
    function Tabs(item) {
        let list=item.getElementsByTagName("li");
        let navunder=item.getElementsByClassName("navunder");
        for (let i=0;i<list.length;i++){
            list[i].onmouseenter=function(){
                for(var j=0;j<list.length;j++){
                    navunder[j].style.display="none";
                    list[j].className="";
                }
                navunder[i].style.display="block";
                list[i].className="changecolor";
            }
        }
    }
    //家电选项卡
    let item1=document.getElementsByClassName("homeelec")[0];
    Tabs(item1);
    //智能选项卡
    let item2=document.getElementsByClassName("AI")[0];
    Tabs(item2);
    //搭配选项卡
    let item3=document.getElementsByClassName("dapei")[0];
    Tabs(item3);
    //配件选项卡
    let item4=document.getElementsByClassName("peijian")[0];
    Tabs(item4);
    //周边选项卡
    let item5=document.getElementsByClassName("zhoubian")[0];
    Tabs(item5);


    // 闪购展示:
    let box1=document.querySelector(".boxhd");
    let button=box1.querySelectorAll(".btn button");
    let box=document.querySelector(".boxbd");
    let right=box.querySelector(".rightbox");
    let widths=parseInt(getComputedStyle(right,null).width);
    let lis=box.querySelectorAll(".right a");
    let time=0;
    button[1].onclick=function(){
        time++;
        if(time==2){
            time=1;
        }
        right.style.transform="translateX("+(-widths*time)/2+"px)";
    }       
    button[0].onclick=function(){
        time--;
        if(time==-1){
            time=0;
        }
        right.style.transform="translateX("+(-widths*time)/2+"px)";
    }
    
    //内容展示：
    let list1=document.querySelector(".content li");
    let list2=document.querySelectorAll(".content li")[1];
    let list3=document.querySelectorAll(".content li")[2];
    let list4=document.querySelectorAll(".content li")[3];
    let item=list1.querySelectorAll(".son");
    let wapper=list2.querySelector(".wapper");
    let go=list2.querySelector(".dayu");
    function movess(value) {
        let wapper=value.querySelector(".wapper");
        let item=value.querySelectorAll(".son");
        let go=value.querySelector(".dayu");
        let back=value.querySelector(".xiaoyu");
        let btn=value.querySelector(".box");
        let btns=value.querySelectorAll(".spot");
        let width=parseInt(getComputedStyle(wapper,null).width);
        let now=0;
        let next=0;
        // let t=setInterval(move,2000);
        function move() {
            next++;
            if(next==item.length){
                next=0;
            }
            for(let i=0;i<item.length;i++){
                btns[i].style.background="#8F8D88";
            }
            item[next].style.left=width+"px";
            animate(item[now],{left:-width});
            animate(item[next],{left:0},function () {
                flag=true;
            });
            btns[next].style.background="#fff";
            now=next;
        }

        // value.onmouseenter=function(){
        //     clearInterval(t);
        // }

        // value.onmouseleave=function () {
        //     t=setInterval(move,3000);
        // } 

        function move1() {
            next--;
            if(next<0){
                next=item.length-1;
            }
            for(let i=0;i<item.length;i++){
                btns[i].style.background="#8F8D88";
            }
            item[next].style.left=-width+"px";
            animate(item[now],{left:width});
            animate(item[next],{left:0},function () {
                flag=true;
            });
            btns[next].style.background="#fff";
            now=next;
        }

        go.onclick=function () {
            if(flag==false){
                return ;
            }
            if(next==item.length-1){
                return;
            }
            flag=false;
            move();
        };
        back.onclick=function () {
            if(flag==false){
                return ;
            }
            if(next==0){
                return;
            }
            flag=false;
            move1();
        };
        btns.forEach(function (element,index) {
            element.onclick=function () {
                for(let i=0;i<btns.length;i++){
                    btns[i].style.background="#8F8D88";
                }
                if(index>now){
                    item[index].style.left=width+"px";
                    animate(item[now],{left:-width});
                    animate(item[index],{left:0});
                    element.style.background="#fff";
                    next=now=index;
                }
                else if(index<now){
                    item[index].style.left=-width+"px";
                    animate(item[now],{left:width});
                    animate(item[index],{left:0});
                    element.style.background="#fff";
                    next=now=index;
                }
                else{
                    element.style.background="#fff";
                }
            };
        });
    }
    movess(list1);
    movess(list2);
    movess(list3);
    movess(list4);


}



