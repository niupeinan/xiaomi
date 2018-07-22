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
    console.log(knowmore);
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
}


