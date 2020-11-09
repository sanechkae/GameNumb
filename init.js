var mintotal = -1000;
var maxtotal = 1000;
var questNum = (min + max)/2;
var min = mintotal;
var max = maxtotal;
var question = ''; 
var res = '';


var startbutton = document.getElementById("start");
startbutton.disabled = true;
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var divques = document.getElementById("ques");
var divresult = document.getElementById("result");
var morebutton = document.getElementById("max"); 
var lessbutton = document.getElementById("min");
var yesbutton = document.getElementById("yes");
var restartbutton = document.getElementById("restart");
var inputnum = document.getElementById("inp");
var questionarr = ["Ваше число больше или меньше ", "Загадонное число больше или меньше ", "Это число больше или меньше, чем "];
var resultarr = ["Я думаю, вы загадали ", "Наверное, вы загадали ", "Загаданным числом является "];
var edarr = ["", "один ", "два ", "три ", "четыре ", "пять ", "шесть ", "семь ", "восемь ", "девять "];
var desarr = ["", "десять ", "двадцать ", "тридцать ", "сорок ", "пятьдесят ", "шестьдесят ", "семьдесят ", "восемьдесят ", "девяносто "];
var sotarr = ["", "сто ", "двести ", "триста ", "четыреста ", "пятьсот ", "шестьсот ", "семьсот ", "восемьсот ", "девятьсот "];
var minus = 'минус ';
var desarr1 = {11 : "одиннадцать", 12 : "двенадцать", 13 : "тринадцать", 14 : "четырнадцать", 15 : "пятнадцать", 16 : "шестнадцать", 17 : "семнадцать", 18 : "восемнадцать", 19 : "девятнадцать"};





morebutton.addEventListener('click', event => {
    inp = inputnum.value;
    min = Math.floor(questNum);
    questNum = Math.floor((min + max)/2);
	if ( max == min + 2 || inp == questNum) {
        var resultrand = resultarr[Math.floor(Math.random()*3)];
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "block";
        res = resultrand + textnum(questNum) + '.';
        divresult.innerHTML = res; 
    } else{
        var questionrand = questionarr[Math.floor(Math.random()*3)];
		questNum = Math.floor((min + max)/2);
		question = questionrand + questNum + ' ?';
		divques.innerHTML = question;
    }

});

lessbutton.addEventListener('click', event => {
    inp = inputnum.value;
    max = Math.floor(questNum);
    questNum = Math.floor((min + max)/2);
    if ( max == min + 2 || inp == questNum) {
        var resultrand = resultarr[Math.floor(Math.random()*3)];
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "block";
        res = resultrand + textnum(questNum) + '.';
        divresult.innerHTML = res; 
        
    } else{
        var questionrand = questionarr[Math.floor(Math.random()*3)];
		questNum = Math.floor((min + max)/2);
		question = questionrand + questNum + ' ?';
		divques.innerHTML = question;
    }
});

startbutton.addEventListener('click', event => {
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
    inp = inputnum.value;
    questNum = Math.floor( max/2 );
    if ( inp == questNum ) {
        var resultrand = resultarr[Math.floor(Math.random()*3)];
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "block";
        res = resultrand + textnum(questNum) + '.';
        divresult.innerHTML = res; 
        
    } else {
        var questionrand = questionarr[Math.floor(Math.random()*3)];
        min = mintotal;
        max = maxtotal;
        question = questionrand + questNum + ' ?';
        divques.innerHTML = question;
    }

});

yesbutton.addEventListener('click', event => {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    inputnum.value = "";
    min = mintotal;
    max = maxtotal;
});

restartbutton.addEventListener('click', event => {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    inputnum.value = "";
    min = mintotal;
    max = maxtotal;
});

inputnum.addEventListener("keyup", event => {
    if (inputnum.value == "" || isNaN(inputnum.value)) {
        startbutton.disabled = true; 
    } else {
        startbutton.disabled = false;
    }

    inputnum.value = (inputnum.value > maxtotal - 1) ? (maxtotal - 1) : inputnum.value;

    inputnum.value = (inputnum.value < mintotal + 1) ? (mintotal + 1) : inputnum.value;

});

function countDigits(smth) {
    return smth.toString().length;
}


function textnum(smth) {
    var originalsmth = smth;
    var restext = '';
    if ( smth < 0) {
        restext = 'минус ';
        smth = -(smth);
    }
    console.log (smth);
    console.log(restext);
    console.log(countDigits(smth));
    var smthstring = smth.toString();
    if (countDigits(smth) == 3) {
        restext = restext + sotarr[smthstring[0]] + desarr[smthstring[1]] + edarr[smthstring[2]];
    } else if (smth > 10 && smth < 20) {
        restext = desarr1[smth];
    } else if (countDigits(smth) == 2) {
        restext = restext + desarr[smthstring[0]] + edarr[smthstring[1]];
    } else if (countDigits(smth) == 1 && smth !=0 ) {
        restext = restext + edarr[smthstring[0]];
    } else if (smth == 0) {
        restext = '0';
    }
    if (restext.length > 20) {
        restext = originalsmth ;
    } 
    return restext;
}

console.log (textnum(-58));