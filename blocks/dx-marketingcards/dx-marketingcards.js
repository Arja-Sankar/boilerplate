//hiding main content
document.querySelector('.dx-marketingcards-wrapper > .dx-marketingcards.block').style.display = 'none';

// getting main Div 
var mainDiv = document.querySelector('.dx-marketingcards-wrapper');


// var secondContent = document.querySelectorAll('.dx-marketingcards > div > div')[1].innerText;
// var thirdContent = document.querySelectorAll('.dx-marketingcards > div > div')[2].innerText;
// var fourthContent = document.querySelectorAll('.dx-marketingcards > div > div')[3].innerText;
// var fifthContent = document.querySelectorAll('.dx-marketingcards > div > div')[4].innerText;
// var SixthContentLink = document.querySelectorAll('.dx-marketingcards > div > div')[5].innerText;

// first div converting class name and adding class list
var firstDiv = mainDiv.setAttribute('class','containerV2');
firstDiv.classList.add('container', 'responsivegrid', 'aem-GridColumn', 'aem-GridColumn--default--12');

//getting content from Doc
var firstContentCssLink = document.querySelectorAll('.containerV2 > div > div')[0].innerText;

//second Div adding to main div with class list
var secondDiv = document.createElement('div');
secondDiv.classList.add('cmp-containerV2', 'inset-py-relaxed', 'px-0', 'bg-transparent', 'bg-gradient-angled', 'from-transparent', 'to-transparent', 'cmp-containerV2-full-width', 'max-w-8xl', 'mx-auto', 'inline-cta--dark');
firstDiv.appendChild(secondDiv);

//third Div adding to second div with class list
var thirdDiv =  document.createElement('div');
thirdDiv.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4', 'max-w-7xl', 'mx-auto');
secondDiv.appendChild(thirdDiv);

//fourth Div adding to third div with class list
var fourthDiv = document.createElement('div');
fourthDiv.classList.add('marketingCards', 'base', 'teaser');
thirdDiv.appendChild(fourthDiv);

//creating link and appending here at fourth Div
var cssLink = document.createElement('link');
cssLink.setAttribute('rel','stylesheet');
cssLink.setAttribute('href',firstContentCssLink);
fourthDiv.appendChild(cssLink);
