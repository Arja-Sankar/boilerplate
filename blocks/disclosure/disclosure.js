//document.querySelectorAll('.disclosure-wrapper > .disclosure.block > div > div')[0].innerText
document.querySelector('.disclosure.block').style.display = 'none';
//
var divName = document.querySelector('.disclosure-wrapper');
divName.classList.add('responsivegrid', 'cg-max-width', 'aem-GridColumn', 'aem-GridColumn--default--12');
