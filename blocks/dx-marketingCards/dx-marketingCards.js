// getting main Div :document.querySelectorAll('.dx-marketingcards > div > div')[4].innerText;
var mainDiv = document.querySelector('.dx-marketingcards-wrapper');
//hiding main content
document.querySelector('.dx-marketingcards-wrapper > .dx-marketingcards').style.display = 'none';
// 
var firstDiv = mainDiv.replace('dx-marketingcards-wrapper','containerV2');
firstDiv.classList.add('container', 'responsivegrid', 'aem-GridColumn', 'aem-GridColumn--default--12');
