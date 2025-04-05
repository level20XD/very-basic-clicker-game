let clicks = 0;
let perclick = 0;
let persecond = 0;
let winavailable = 0;
const button = document.getElementById("button");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("perclick");
const secondupgrade = document.getElementById("persecond");
const winbutton = document.getElementById("winbutton");

const clickercost = [0, 50, 100, 250, 500, 700, 1000, 1500, 2000, 3000]
const secondcost = [100, 250, 500, 700, 1000, 1500, 2000, 2500, 3250, 4000]

button.onclick = function(){
    clicks += perclick;
    counter.innerHTML = clicks;
    refreshCosts();
};

function refreshCosts() {
    if (clicks >= clickercost[perclick]){
        document.getElementById("percost").style.color = "lawngreen";
    } else {
        document.getElementById("percost").style.color = "red";
    };
    if (clicks >= secondcost[persecond/5]){
        document.getElementById("secondcost").style.color = "lawngreen";
    } else {
        document.getElementById("secondcost").style.color = "red";
    };
    if (clicks >= 10000 && perclick >= 10 && persecond >= 50){
        document.getElementById("wincost").style.color = "lawngreen";
        winavailable = 1;
    } else {
        document.getElementById("wincost").style.colow = "red";
    };
};

setInterval(function() {
    clicks += persecond;
    counter.innerHTML = clicks;
    refreshCosts();
  }, 1000);

clickupgrade.onclick = function(){
    if (clicks >= clickercost[perclick]){
        clicks -= clickercost[perclick];
        counter.innerHTML = clicks;
        perclick += 1;
        document.getElementById("percounter").innerHTML = perclick + " clicks per click";
        document.getElementById("perlimit").innerHTML = perclick + "/10";
        document.getElementById("percost").innerHTML = clickercost[perclick] + " clicks";
        refreshCosts();
    };
    if (perclick >= 10){
        document.getElementById("percost").innerHTML = "MAXED"
    };
};

secondupgrade.onclick = function(){
    if (clicks >= secondcost[persecond/5]){
        clicks -= secondcost[persecond/5];
        counter.innerHTML = clicks;
        persecond += 5;
        document.getElementById("secondcounter").innerHTML = persecond + " clicks per second";
        document.getElementById("secondlimit").innerHTML = (persecond/5) + "/10";
        document.getElementById("secondcost").innerHTML = secondcost[persecond/5] + " clicks";
        refreshCosts();
    };
    if (persecond >= 50){
        document.getElementById("secondcost").innerHTML = "MAXED";
    };
};

winbutton.onclick = function(){
    if (winavailable == 1){
        window.location.replace("winscreen.html");
    };
};