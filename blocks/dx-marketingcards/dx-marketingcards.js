//hiding main content
document.querySelector('.dx-marketingcards-wrapper > .dx-marketingcards.block').style.display = 'none';

//getting content from Doc
var picContainer = document.querySelectorAll('.dx-marketingcards > div > div > picture')[0];
var picContainerSource = document.querySelectorAll('.dx-marketingcards > div > div > picture > source')[0];
var picContainerSourceOne = document.querySelectorAll('.dx-marketingcards > div > div > picture > source')[1];
var picContainerImg = document.querySelector('.dx-marketingcards > div > div > picture > img');
var firstContentCssLink = document.querySelectorAll('.dx-marketingcards > div > div')[1].innerText;
var secondContent = document.querySelectorAll('.dx-marketingcards > div > div')[2].innerText;
var thirdContent = document.querySelectorAll('.dx-marketingcards > div > div')[3].innerText;
var fourthContent = document.querySelectorAll('.dx-marketingcards > div > div')[4].innerText;
var fifthContent = document.querySelectorAll('.dx-marketingcards > div > div')[5].innerText;
var SixthContentLink = document.querySelectorAll('.dx-marketingcards > div > div')[6].innerText;

// first div converting class name and adding class list
// getting main Div 
var mainDiv = document.querySelector('.dx-marketingcards-wrapper');
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
sixthDiv.classList.add('cmp-marketingCards__imageWrapper','relative', 'w-full');
fifthDiv.appendChild(sixthDiv);

//adding picture along with content to inner Div
picContainer.classList.add('cmp-marketingCards__picture');
picContainerSource.setAttribute('media','(min-width:1024px)');
picContainerSourceOne.setAttribute('media','(min-width:768px)');
picContainerImg.classList.add('cmp-marketingCards__image', 'aspect-[16/9]', 'object-cover', 'w-full');
sixthDiv.appendChild(picContainer);

//seventh Div adding to fifth div with class list
var seventhDiv = document.createElement('div');
seventhDiv.classList.add('cmp-marketingCards__content', 'flex', 'h-full', 'w-full', 'flex-col', 'inset-py-snug-contained', 'inset-px-normal', 'text-dark');
fifthDiv.appendChild(seventhDiv);

//eigth Div adding to seventh div with class list along with content
var eigthDiv = document.createElement('h3');
eigthDiv.classList.add('cmp-marketingCards__headline', 'h3');
eigthDiv.innerHTML = secondContent + `<sup>`+ thirdContent +`</sup>`;
seventhDiv.appendChild(eigthDiv);

//nineth Div adding to seventh div with class list along with content
var ninethDiv = document.createElement('p');
ninethDiv.classList.add('cmp-marketingCards__subhead', 'body-lg', 'pt-4', 'font-regular', 'inline-cta--dark');
ninethDiv.innerHTML = fourthContent;
seventhDiv.appendChild(ninethDiv);

//tenth Div adding to seventh div with class list
var tenthDiv = document.createElement('div');
tenthDiv.classList.add('mt-auto', 'pt-8');
seventhDiv.appendChild(tenthDiv);

//eleventh Div adding to tenth div with class list
var eleventhDiv = document.createElement('a');
eleventhDiv.setAttribute('class','cta-tertiary-dark');
eleventhDiv.setAttribute('data-analytics-placement','Button');
eleventhDiv.setAttribute('data-analytics-label','trackLink:buttonClick');
eleventhDiv.setAttribute('data-analytics-id','See how it works-homepage');
eleventhDiv.setAttribute('href',SixthContentLink);
eleventhDiv.setAttribute('target','_self');
eleventhDiv.setAttribute('aria-label','See how it works');
eleventhDiv.setAttribute('role','button');
tenthDiv.appendChild(eleventhDiv);

//tweleth Div adding to eleventh div with class list
var twelethDiv = document.createElement('span');
twelethDiv.classList.add('flex', 'flex-row', 'justify-between', 'items-center');
eleventhDiv.appendChild(twelethDiv);

//thirteenth Div adding to tweleth div with class list
var thirteenthDiv = document.createElement('span');
thirteenthDiv.classList.add('border-b-2', 'border-current', 'w-full', '-mt-px', '-mb-px');
thirteenthDiv.innerHTML = fifthContent;
twelethDiv.appendChild(thirteenthDiv);

//fourteenth Div adding to tweleth div with class list
var fourteenthDiv = document.createElement('span');
fourteenthDiv.classList.add('material-icons', 'pl-4','text-2xl', 'leading-6');
fourteenthDiv.innerHTML = `arrow_forward`;
twelethDiv.appendChild(fourteenthDiv);

//
//fourth Div adding to third div with class list
var fifteenthDiv = document.createElement('div');
fifteenthDiv.classList.add('marketingCards', 'base', 'teaser');
thirdDiv.appendChild(fifteenthDiv);

//creating link and appending here at fourth Div
var cssLinkOne = document.createElement('link');
cssLinkOne.setAttribute('rel','stylesheet');
cssLinkOne.setAttribute('href',firstContentCssLink);
fifteenthDiv.appendChild(cssLinkOne);

//fifth Div adding to fourth div with class list
var sixteenththDiv = document.createElement('div');
sixteenththDiv.classList.add('cmp-marketingCards', 'bg-web-shades-50', 'shadow-container', 'h-full', 'relative', 'flex', 'flex-col');
fifteenthDiv.appendChild(sixteenththDiv);

//sixth Div adding to fifth div with class list
var seventeethDiv = document.createElement('div');
seventeethDiv.classList.add('cmp-marketingCards__imageWrapper','relative', 'w-full');
sixteenththDiv.appendChild(seventeethDiv);

var picContainerOne = document.querySelector('.containerV2 > .dx-marketingcards.block > div > div > picture');
var picContainerSourceTwo = document.querySelectorAll('.containerV2 > .dx-marketingcards.block > div > div > picture > source')[0];
var picContainerSourceThree =  document.querySelectorAll('.containerV2 > .dx-marketingcards.block > div > div > picture > source')[1];
var picContainerImgOne = document.querySelector('.containerV2 > .dx-marketingcards.block > div > div > picture > img');
var contentOne = document.querySelectorAll('.containerV2 > .dx-marketingcards.block > div >div')[8].innerText;
var contentTwo = document.querySelectorAll('.containerV2 > .dx-marketingcards.block > div >div')[9].innerText;
var contentThree = document.querySelectorAll('.containerV2 > .dx-marketingcards.block > div >div')[12].innerText;
var contentFourLink = document.querySelectorAll('.containerV2 > .dx-marketingcards.block > div >div')[13].innerText;

//adding picture along with content to inner Div
picContainerOne.classList.add('cmp-marketingCards__picture');
picContainerSourceTwo.setAttribute('media','(min-width:1024px)');
picContainerSourceThree.setAttribute('media','(min-width:768px)');
picContainerImgOne.classList.add('cmp-marketingCards__image', 'aspect-[16/9]', 'object-cover', 'w-full');
seventeethDiv.appendChild(picContainerOne);

//seventh Div adding to fifth div with class list
var eighteenthDiv = document.createElement('div');
eighteenthDiv.classList.add('cmp-marketingCards__content', 'flex', 'h-full', 'w-full', 'flex-col', 'inset-py-snug-contained', 'inset-px-normal', 'text-dark');
sixteenththDiv.appendChild(eighteenthDiv);

//eigth Div adding to seventh div with class list along with content
var nineteenthDiv = document.createElement('h3');
nineteenthDiv.classList.add('cmp-marketingCards__headline', 'h3');
nineteenthDiv.innerHTML = contentOne;
eighteenthDiv.appendChild(nineteenthDiv);

//nineth Div adding to seventh div with class list along with content
var twentyDiv = document.createElement('p');
twentyDiv.classList.add('cmp-marketingCards__subhead', 'body-lg', 'pt-4', 'font-regular', 'inline-cta--dark');
twentyDiv.innerHTML = contentTwo;
nineteenthDiv.appendChild(twentyDiv);

//tenth Div adding to seventh div with class list
var twentyOneDiv = document.createElement('div');
twentyOneDiv.classList.add('mt-auto', 'pt-8');
twentyDiv.appendChild(twentyOneDiv);

//eleventh Div adding to tenth div with class list
var twentyTwoDiv = document.createElement('a');
twentyTwoDiv.setAttribute('class','cta-tertiary-dark');
twentyTwoDiv.setAttribute('data-analytics-placement','Button');
twentyTwoDiv.setAttribute('data-analytics-label','trackLink:buttonClick');
twentyTwoDiv.setAttribute('data-analytics-id','See how it works-homepage');
twentyTwoDiv.setAttribute('href',contentFourLink);
twentyTwoDiv.setAttribute('target','_self');
twentyTwoDiv.setAttribute('aria-label','See how it works');
twentyTwoDiv.setAttribute('role','button');
twentyOneDiv.appendChild(twentyTwoDiv);

//tweleth Div adding to eleventh div with class list
var twentyThreeDiv = document.createElement('span');
twentyThreeDiv.classList.add('flex', 'flex-row', 'justify-between', 'items-center');
twentyTwoDiv.appendChild(twentyThreeDiv);

//thirteenth Div adding to tweleth div with class list
var twentyFourDiv = document.createElement('span');
twentyFourDiv.classList.add('border-b-2', 'border-current', 'w-full', '-mt-px', '-mb-px');
twentyFourDiv.innerHTML = contentThree;
twentyThreeDiv.appendChild(twentyFourDiv);

//fourteenth Div adding to tweleth div with class list
var twentyFiveDiv = document.createElement('span');
twentyFiveDiv.classList.add('material-icons', 'pl-4','text-2xl', 'leading-6');
twentyFiveDiv.innerHTML = `arrow_forward`;
twentyThreeDiv.appendChild(twentyFiveDiv);
