//hiding main content
document.querySelector('.dx-marketingcards-wrapper > .dx-marketingcards.block').style.display = 'none';

// getting main Div 
var mainDiv = document.querySelector('.dx-marketingcards-wrapper');

//getting content from Doc
// var picContainer = document.querySelectorAll('.dx-marketingcards > div > div > picture')[0];
// picContainer.classList.add('cmp-marketingCards__picture');
// var picContainerSource = document.querySelectorAll('.dx-marketingcards > div > div > picture > source')[0];
// var picContainerSourceOne = document.querySelectorAll('.dx-marketingcards > div > div > picture > source')[1];
// var picContainerImg = document.querySelector('.dx-marketingcards > div > div > picture > img');
var firstContentCssLink = document.querySelectorAll('.dx-marketingcards > div > div')[1].innerText;
var secondContent = document.querySelectorAll('.dx-marketingcards > div > div')[2].innerText;
var thirdContent = document.querySelectorAll('.dx-marketingcards > div > div')[3].innerText;
var fourthContent = document.querySelectorAll('.dx-marketingcards > div > div')[4].innerText;
var fifthContent = document.querySelectorAll('.dx-marketingcards > div > div')[5].innerText;
var SixthLink = document.querySelectorAll('.dx-marketingcards > div > div')[6].innerText;

// first div converting class name and adding class list
mainDiv.setAttribute('class','containerV2');
mainDiv.classList.add('container', 'responsivegrid', 'aem-GridColumn', 'aem-GridColumn--default--12');



//second Div adding to main div with class list
var secondDiv = document.createElement('div');
secondDiv.classList.add('cmp-containerV2', 'inset-py-relaxed', 'px-0', 'bg-transparent', 'bg-gradient-angled', 'from-transparent', 'to-transparent', 'cmp-containerV2-full-width', 'max-w-8xl', 'mx-auto', 'inline-cta--dark');
mainDiv.appendChild(secondDiv);

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

//fifth Div adding to fourth div with class list
var fifthDiv = document.createElement('div');
fifthDiv.classList.add('cmp-marketingCards', 'bg-web-shades-50', 'shadow-container', 'h-full', 'relative', 'flex', 'flex-col');
fourthDiv.appendChild(fifthDiv);

//sixth Div adding to fifth div with class list
var sixthDiv = document.createElement('div');
sixthDiv.classList.add('cmp-marketingCards__imageWrapper', ,relative', 'w-full');
fifthDiv.appendChild(sixthDiv);

//adding picture to inner Div

// picContainerSource.setAttribute('media','(min-width:1024px)');
// picContainerSourceOne.setAttribute('media','(min-width:768px)');
// picContainerImg.classList.add('cmp-marketingCards__image', 'aspect-[16/9]', 'object-cover', 'w-full');
sixthDiv.appendChild(picContainer);


