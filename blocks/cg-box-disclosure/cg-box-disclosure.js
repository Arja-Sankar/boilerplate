//
//hiding doc content
document.querySelector('.cg-box-disclosure-wrapper > .cg-box-disclosure.block').style.display = 'none';
var mainFirstDiv = document.querySelector('.cg-box-disclosure-wrapper');
mainFirstDiv.classList.add('text', 'cg-box-shadow-disclosure', 'aem-GridColumn--tablet--10', 'aem-GridColumn--default--none', 'aem-GridColumn--phone--none', 'aem-GridColumn--phone--12', 'aem-GridColumn--tablet--none', 'aem-GridColumn', 'aem-GridColumn--default--8', 'aem-GridColumn--offset--default--2', 'aem-GridColumn--offset--phone--0', 'aem-GridColumn--offset--tablet--1');
var secondDiv = document.createElement('div');
secondDiv.setAttribute('class','cmp-text');
mainFirstDiv.appendChild(secondDiv);
var thirdDiv = document.createElement('p');
thirdDiv.style.textalign = 'center';
secondDiv.appendChild(thirdDiv);
