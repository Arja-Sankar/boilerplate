//document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div')[0].innerText
document.querySelector('.disclosure.block').style.display = 'none';
var divName = document.querySelector('.disclosure-wrapper');
divName.classList.add('responsivegrid', 'cg-max-width', 'aem-GridColumn', 'aem-GridColumn--default--12');
var firstDiv = document.createElement('div');
firstDiv.classList.add('aem-Grid', 'aem-Grid--12', 'aem-Grid--default--12');
divName.appendChild(firstDiv);
//
var secondDiv = document.createElement('div');
secondDiv.classList.add('disclosure', 'parbase', 'aem-GridColumn', 'aem-GridColumn--default--12');
firstDiv.appendChild(secondDiv);
var thirdDiv = document.createElement('div');
thirdDiv.setAttribute('class','noindex');
secondDiv.appendChild(thirdDiv);
var counter = document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div').length;
for(let i=0; i<counter; i++){
if(i == 0){
  var fourthDiv = document.createElement('p');
fourthDiv.classList.add('cg-global-disclosure-1', 'noindex');
  fourthDiv.appendChild(document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div > strong')[0]);
  thirdDiv.appendChild(fourthDiv);
}else if(i == 1){
  var secondTwo = document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div > strong')[1];
  var fifthDiv = document.createElement('p');
  fifthDiv.classList.add('cg-global-disclosure-1', 'noindex');
  fifthDiv.appendChild(document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div > strong')[0]);
    thirdDiv.appendChild(fifthDiv);
}else if(i == 2){
    var sixthDiv = document.createElement('p');
  sixthDiv.classList.add('cg-global-disclosure-1', 'noindex');
  sixthDiv.appendChild(document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div')[0].innerText);
    thirdDiv.appendChild(sixthDiv);
}else if(i == 3){
    var sevenDiv = document.createElement('p');
  sevenDiv.classList.add('cg-global-disclosure-1', 'noindex');
  sevenDiv.appendChild(document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div')[0].innerText);
    thirdDiv.appendChild(sevenDiv);
}else if(i == 4){
    var eigthDiv = document.createElement('p');
  eigthDiv.classList.add('cg-global-disclosure-1', 'noindex');
  eigthDiv.appendChild(document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div')[0].innerText);
    thirdDiv.appendChild(eigthDiv);
}else if(i == 5){
    var ninethDiv = document.createElement('p');
  ninethDiv.classList.add('cg-global-disclosure-1', 'noindex');
  ninethDiv.appendChild(document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div')[0].innerText);
    thirdDiv.appendChild(ninethDiv);
}
}
