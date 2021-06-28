//for movement animation to happen
let car;
let con;
let title;
let cash;
let purchase;
let descrip;
let sizes;
car = document.querySelector('.card');
con = document.querySelector('.content');
title = document.querySelector('.title');
cash = document.querySelector('.coins img');
descrip = document.querySelector('.info h3');
sizes = document.querySelector('.sizes');
purchase = document.querySelector('.purchase button');
//for moving animation create an event
con.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    car.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
con.addEventListener('mouseenter', (e) => {
    car.style.transition = "none"; 
    //popout 3d effect
    title.style.transform = "translateZ(150px)";
    cash.style.transform = "translateZ(180px) rotateZ(-25deg)";
    descrip.style.transform = "translateZ(105px)";
    sizes.style.transform = "translateZ(90px)";
    purchase.style.transform = "translateZ(75px)";
});
//animate out
con.addEventListener('mouseleave', (e) => {
    car.style.transitiom = "all 0.5s ease";
    car.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin 3d effect
    title.style.transform = "translateZ(0px)";
    cash.style.transform = "translateZ(0px) rotateZ(0deg)";
    descrip.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
//for movement animation to happen 2nd card
let car2;
let con2;
let title2;
let cash2;
let purchase2;
let descrip2;
let sizes2;
car2 = document.querySelector('.card2');
con2 = document.querySelector('.content2');
title2 = document.querySelector('.title2');
cash2 = document.querySelector('.coins2 img');
descrip2 = document.querySelector('.info2 h3');
sizes2 = document.querySelector('.sizes2');
purchase2 = document.querySelector('.purchase2 button');
//for moving animation create an event
con2.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    car2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
con2.addEventListener('mouseenter', (e) => {
    car2.style.transition = "none"; 
    //popout 3d effect
    title2.style.transform = "translateZ(150px)";
    cash2.style.transform = "translateZ(180px) rotateZ(-25deg)";
    descrip2.style.transform = "translateZ(105px)";
    sizes2.style.transform = "translateZ(90px)";
    purchase2.style.transform = "translateZ(75px)";
});
//animate out
con2.addEventListener('mouseleave', (e) => {
    car2.style.transitiom = "all 0.5s ease";
    car2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin 3d effect
    title2.style.transform = "translateZ(0px)";
    cash2.style.transform = "translateZ(0px) rotateZ(0deg)";
    descrip2.style.transform = "translateZ(0px)";
    sizes2.style.transform = "translateZ(0px)";
    purchase2.style.transform = "translateZ(0px)";
});
//3rd card
let car3;
let con3;
let title3;
let cash3;
let purchase3;
let descrip3;
let sizes3;
car3 = document.querySelector('.card3');
con3 = document.querySelector('.content3');
title3 = document.querySelector('.title3');
cash3 = document.querySelector('.coins3 img');
descrip3 = document.querySelector('.info3 h3');
sizes3 = document.querySelector('.sizes3');
purchase3 = document.querySelector('.purchase3 button');
//for moving animation create an event
con3.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    car3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
con3.addEventListener('mouseenter', (e) => {
    car3.style.transition = "none"; 
    //popout 3d effect
    title3.style.transform = "translateZ(150px)";
    cash3.style.transform = "translateZ(180px) rotateZ(-25deg)";
    descrip3.style.transform = "translateZ(105px)";
    sizes3.style.transform = "translateZ(90px)";
    purchase3.style.transform = "translateZ(75px)";
});
//animate out
con3.addEventListener('mouseleave', (e) => {
    car3.style.transitiom = "all 0.5s ease";
    car3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin 3d effect
    title3.style.transform = "translateZ(0px)";
    cash3.style.transform = "translateZ(0px) rotateZ(0deg)";
    descrip3.style.transform = "translateZ(0px)";
    sizes3.style.transform = "translateZ(0px)";
    purchase3.style.transform = "translateZ(0px)";
});
//card4
let car4;
let con4;
let title4;
let cash4;
let purchase4;
let descrip4;
let sizes4;
car4 = document.querySelector('.card4');
con4 = document.querySelector('.content4');
title4 = document.querySelector('.title4');
cash4 = document.querySelector('.coins4 img');
descrip4 = document.querySelector('.info4 h3');
sizes4 = document.querySelector('.sizes4');
purchase4 = document.querySelector('.purchase4 button');
//for moving animation create an event
con4.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    car4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
con4.addEventListener('mouseenter', (e) => {
    car4.style.transition = "none"; 
    //popout 3d effect
    title4.style.transform = "translateZ(150px)";
    cash4.style.transform = "translateZ(180px) rotateZ(-25deg)";
    descrip4.style.transform = "translateZ(105px)";
    sizes4.style.transform = "translateZ(90px)";
    purchase4.style.transform = "translateZ(75px)";
});
//animate out
con4.addEventListener('mouseleave', (e) => {
    car4.style.transitiom = "all 0.5s ease";
    car4.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin 3d effect
    title4.style.transform = "translateZ(0px)";
    cash4.style.transform = "translateZ(0px) rotateZ(0deg)";
    descrip4.style.transform = "translateZ(0px)";
    sizes4.style.transform = "translateZ(0px)";
    purchase4.style.transform = "translateZ(0px)";
});
//free card
let carf;
let conf;
let titlef;
let cashf1;
let cashf2;
let cashf3;
let cashf4;
let icon1;
let icon2;
let icon3;
let icon4;
let icon5;
let purchasef;
let descripf;
let pop;
let pop1;
carf = document.querySelector('.freecard');
conf = document.querySelector('.freecontent');
titlef = document.querySelector('.freetitle');
cashf = document.querySelector('.freecoins img');
cashf1 = document.querySelector('.freecoins .i1');
cashf2 = document.querySelector('.freecoins .i2');
cashf3 = document.querySelector('.freecoins .i3');
cashf4 = document.querySelector('.freecoins .i4');
icon1 = document.querySelector('.iconbadge1');
icon2 = document.querySelector('.iconbadge2');
icon3 = document.querySelector('.iconbadge3');
icon4 = document.querySelector('.iconbadge4');
icon5 = document.querySelector('.iconbadge5');
descripf = document.querySelector('.freeinfo h3');
purchasef = document.querySelector('.freepurchase button');
pop = document.querySelector('.dropdowncontent');
pop1 = document.querySelector('.dropdowncontent1');
//for moving animation create an event
conf.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 105;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 85;
    carf.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
conf.addEventListener('mouseenter', (e) => {
    carf.style.transition = "none"; 
    //popout 3d effect
    titlef.style.transform = "translateZ(90px)";
    cashf.style.transform = "translateZ(100px) rotateZ(-25deg)";
    cashf1.style.transform = "translateZ(100px) rotateZ(-10deg)";
    cashf2.style.transform = "translateZ(100px) rotateZ(-10deg)";
    cashf3.style.transform = "translateZ(100px) rotateZ(-10deg)";
    cashf4.style.transform = "translateZ(100px) rotateZ(-10deg)";
    cashf4.style.transform = "translateZ(100px) rotateZ(-10deg)";
    descripf.style.transform = "translateZ(80px)";
    purchasef.style.transform = "translateZ(75px)";
    icon1.style.transform = "translateZ(100px) rotateZ(-10deg)";
    icon2.style.transform = "translateZ(100px) rotateZ(-10deg)";
    icon3.style.transform = "translateZ(100px) rotateZ(-10deg)";
    icon4.style.transform = "translateZ(100px) rotateZ(-10deg)";
    icon5.style.transform = "translateZ(100px) rotateZ(-10deg)";
    pop.style.transform = "translateZ(100px)";
    pop1.style.transform = "translateZ(100px)";
});
//animate out
conf.addEventListener('mouseleave', (e) => {
    carf.style.transitiom = "all 0.5s ease";
    carf.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin 3d effect
    titlef.style.transform = "translateZ(0px)";
    cashf.style.transform = "translateZ(0px) rotateZ(0deg)";
    cashf1.style.transform = "translateZ(0px) rotateZ(0deg)";
    cashf2.style.transform = "translateZ(0px) rotateZ(0deg)";
    cashf3.style.transform = "translateZ(0px) rotateZ(0deg)";
    cashf4.style.transform = "translateZ(0px) rotateZ(0deg)";
    descripf.style.transform = "translateZ(0px)";
    purchasef.style.transform = "translateZ(0px)";
    icon1.style.transform = "translateZ(0px) rotateZ(0deg)";
    icon2.style.transform = "translateZ(0px) rotateZ(0deg)";
    icon3.style.transform = "translateZ(0px) rotateZ(0deg)";
    icon4.style.transform = "translateZ(0px) rotateZ(0deg)";
    icon5.style.transform = "translateZ(0px) rotateZ(0deg)";
    pop.style.transform = "translateZ(0px)";
    pop1.style.transform = "translateZ(0px)";
});
