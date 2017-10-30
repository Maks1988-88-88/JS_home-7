// Task 1-3

var inp1 = document.getElementById('inp1');
var plus = document.getElementsByClassName('plus')[0];
var minus = document.getElementsByClassName('minus');
var counter = 0;
plus.onclick = function () {
    if (counter < 8) {
        counter++;
        var inpNext = inp1.cloneNode(true);
        inpNext.querySelector('input').value = '';
        inpNext.querySelector('button').className = 'minus';
        inpNext.querySelector('button').innerHTML = '-';
        inpNext.id = 'inp1'+counter;
        wrapper.appendChild(inpNext);
    }
        
    for (var i=0; i<minus.length; i++) {
        minus[i].onclick = removeBtn;
    } 

    function removeBtn () {
        counter--;
        var classDel = 'inp1'+(counter+1);
        console.log(classDel);
        var deleteInp = document.getElementById(classDel);
        deleteInp.parentNode.removeChild(deleteInp);
    }
}

var inputs = document.getElementsByClassName('inputs');
var txtArea = document.getElementById('txtArea');
document.getElementById('joinInp').onclick = joinInp;

function joinInp () {
    warning();
    txtArea.value = '';
    var inpmas = document.getElementsByClassName('inputs');
    var radio = document.getElementsByName('radioBtn');

    if (radio[0].checked) {
        for (var i = 1; i < inputs.length; i+=2) {
            txtArea.value += inputs[i].value+' ';
        }
    }
    else if (radio[1].checked){
        for (var i = 0; i < inputs.length; i+=2) {
            txtArea.value += inputs[i].value+' ';
        }
    }
    else if (radio[2].checked){
        for (var i = 0; i < inputs.length; i++) {
            txtArea.value += inputs[i].value+' ';
        }
    }
}

function warning () {
    var message = document.getElementsByClassName('message');
    for (var i = 0; i < inputs.length; i++){
        if (!inputs[i].value){
            inputs[i].style.background = 'red';
            message[i].innerHTML = 'Заполните поле!';
        }
        else {
            inputs[i].style.background = null;
            message[i].innerHTML = '';
        }
    }
}



// Task 4

var mywindow = document.querySelector('#window');
var myoption = document.querySelector('.option');


document.getElementById('showopt').onclick = function () {
	mywindow.style.display = 'block';
}

document.getElementById('mac').onclick = function () {
	myoption.innerHTML = 'Mac';
	mywindow.style.display = 'none';
}
document.getElementById('pc').onclick = function () {
	myoption.innerHTML = 'PC';
	mywindow.style.display = 'none';
}

// Task 5

var list = document.querySelector('#list');
var newmember = document.querySelector('#newmember');

document.querySelector('#addmember').onclick = function () {
	var newLi = document.createElement('li');
	newLi.innerHTML = newmember.value;
	newLi.className = 'member';
	list.appendChild(newLi);
	newLi.onclick = makeRed;
}

var liClick = document.getElementsByTagName('li');
for (var i=0;i<liClick.length; i++) {
	liClick[i].onclick = makeRed;
}
 function makeRed () {
 	console.log(this);
 		if (this.classList.contains('member')) {
			this.classList.remove('member');
			this.classList.add('memberRed');
		}
		else if (this.classList.contains('memberRed')) {
			this.classList.remove('memberRed');
			this.classList.add('member');
		}
 }


// Task 6

var six = document.querySelector('.six');
var smile = document.querySelector('.smile');
var darcker = document.querySelector('.darcker');


darcker.onmouseenter = function () {
	this.style.animation = 'opaciter1 2s linear forwards';
}

darcker.onmouseleave = function () {
	this.style.background = 'linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)';
	this.style.animation = 'opaciter2 2s 2s linear forwards';
}


// Task 7 8
var heroInf = document.getElementById('heroInf');
var heroImg = document.getElementsByClassName('heroImg');
var heroLink = document.getElementsByClassName('heroLink');

for (var i = 0; i < heroLink.length; i++ ) {
	heroLink[i].onmouseenter = function() {
		heroInf.style.display = 'block';
		heroInf.innerHTML = '<br>' + 'Сылка ' + this.href + '<br>' + 'Название ' + this.title + '<br>' + 'Направление ' +  this.target;
	
	if ((this.href == '') || (this.title == '') || (this.target == '')) {
		heroInf.innerHTML = 'Подозрительная сылка';
		heroInf.style.color = 'red';
	}
}	
	heroLink[i].onmouseleave = function () {
	heroInf.style.display = 'none';
	heroInf.innerHTML = '';
	heroInf.style.color = 'white';
	}
}

for (var i = 0; i < heroImg.length; i++) {
	heroImg[i].onmouseenter = function () {
		heroInf.style.display = 'block';
		heroInf.innerHTML = '<br>' + 'Сылка ' + this.src + '<br>' + 'Название картики' + this.alt;
		if (this.alt == '') {
			this.style.boxShadow = '7px 7px 5px 0px rgba(230, 50, 50, 0.75)';
		}
		if ((this.src == '') || (this.alt == '')) {
			heroInf.innerHTML = 'Подозрительная сылка!';
			heroInf.style.color = 'red';
		}
	}
	heroImg[i].onmouseleave = function () {
	heroInf.style.display = 'none';
	heroInf.innerHTML = '';
	heroInf.style.color = 'white';
	this.style.boxShadow = '';
	}
}


// Task 9

var glavaOut = document.getElementById('glavaOut');
var myh1 = document.getElementsByTagName('h1').length;
var myh2 = document.getElementsByTagName('h2').length;
var myh3 = document.getElementsByTagName('h3').length;
var myh4 = document.getElementsByTagName('h4').length;
var myh5 = document.getElementsByTagName('h5').length;
var myh6 = document.getElementsByTagName('h6').length;


document.getElementById('glava').onclick = function () {
	glavaOut.innerHTML = 'Количество глав ' + (myh1 + myh2 +myh3 + myh4 + myh5 + myh6); 

	if (myh1 == 0) {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Элемент h1 - отсутствует';
	}

	else {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Количество h1' + myh1;
	}

	if (myh2 == 0) {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Элемент h2 - отсутствует';
	}

	else {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Количество h2' + myh2;
	}

	if (myh3 == 0) {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Элемент h3 - отсутствует';
	}

	else {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Количество h3 - ' + myh3;
	}

	if (myh4 == 0) {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Элемент h4 - отсутствует';
	}

	else {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Количество h4 - ' + myh4;
	}

	if (myh5 == 0) {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Элемент h5 - отсутствует';
	}

	else {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Количество h5 - ' + myh5;
	}

	if (myh6 == 0) {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Элемент h6 - отсутствует';
	}

	else {
		glavaOut.innerHTML = glavaOut.innerHTML + '<br>' + 'Количество h6 - ' + myh6;
	}
}


// Task 10 

var myMetaOut = document.getElementById('myMetaOut');
var myMetaNone = document.getElementById('myMetaNone');
var onMeta = document.getElementsByTagName('meta');


document.getElementById('myMeta').onclick = function () {
	if (document.title) {
		myMetaOut.innerHTML = myMetaOut.innerHTML + 'title в наличии' + '<br>' + 'количество символов title - ' + document.title.length + '<br>';
	}
	else {
		myMetaNone.innerHTML = myMetaNone.innerHTML + 'title отсутствует' + '<br';
	}

	if (onMeta.description) {
		myMetaOut.innerHTML = myMetaOut.innerHTML + ' description в наличии' + '<br>' + 'количество символов description - ' + onMeta.description.content.length + '<br>';
	}

	else {
		myMetaOut.innerHTML = myMetaOut.innerHTML + 'description отсутствует' + '<br';
	}

	if (onMeta.keywords) {
		myMetaOut.innerHTML = myMetaOut.innerHTML + 'keywords в наличии' + '<br>' + 'количество символов keywords - ' + onMeta.keywords.length + '<br>';
	}

	else {
		myMetaNone.style.color = 'red';
		myMetaNone.innerHTML = myMetaNone.innerHTML + 'keywords отсутствует' + '<br';
	}
}