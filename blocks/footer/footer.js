import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
   const html = await resp.text();

    // decorate footer DOM
 const footer = document.createElement('div');
 footer.innerHTML = html;

   decorateIcons(footer);
   block.append(footer); 
  //hiding content
   var footerContent = document.querySelector('.footer-wrapper > .footer.block > div');
    footerContent.style.display = 'none';
   console.log(footerContent);
    
    var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
    mainFooter.setAttribute('class','experiencefragment');
    mainFooter.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');

    var firstDiv = document.createElement('div');
    firstDiv.setAttribute('class','xf-content-height');
    mainFooter.appendChild(firstDiv);

    var secondDiv = document.createElement('div');
    secondDiv.setAttribute('class','aem-Grid');
   secondDiv.classList.add('aem-Grid--12' , 'aem-Grid--default--12');
    firstDiv.appendChild(secondDiv); 

    var thirdDiv = document.createElement('div');
    thirdDiv.setAttribute('class','freeflowhtml');
    thirdDiv.classList.add('aem-GridColumn' , 'aem-GridColumn--default--12');
    secondDiv.appendChild(thirdDiv);  

    var fourthDiv = document.createElement('footer');
    fourthDiv.setAttribute('id','footer');
    thirdDiv.appendChild(fourthDiv);

     var footerArticle = document.createElement('article');
     fourthDiv.appendChild(footerArticle);

     var fifthDiv = document.createElement('div');
    fifthDiv.classList.add('container', 'pt50', 'pb50');
    footerArticle.appendChild(fifthDiv);

    var sixthDiv = document.createElement('div');
    sixthDiv.setAttribute('class','row');
    fifthDiv.appendChild(sixthDiv);

   var counter = document.querySelectorAll('.footer-wrapper > .experiencefragment  > div > div > h3').length;

    for(let i = 0; i < counter;i++){
        var footerContentDiv = document.createElement('div');
        sixthDiv.appendChild(footerContentDiv);
        footerContentDiv.classList.add('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-12');  

        var footerContentHeader = document.createElement('h3');
        var footerUl = document.createElement('ul');
          
  if(i == 0){
            footerContentDiv.appendChild(footerContentHeader);
            footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
      var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
            footerContentHeader.innerHTML = footerContHead;    
      var liContentFooterTwo = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[i];
      var footerUlTwo = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
      liContentFooterTwo[i].classList.add('list-unstyled', 'footer-txt'); 
      footerContentHeader.appendChild(footerUlTwo[i]);
      footerUlTwo[i].append(liContentFooterTwo);
   }
   else if(i == 1){
        footerContentDiv.appendChild(footerContentHeader);
            footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
     var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
        footerContentHeader.innerHTML = footerContHead;
      var liContentFooterThree = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[i];
      var footerUlThree = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');     
       liContentFooterThree[i].classList.add('list-unstyled', 'footer-txt');   
       footerContentHeader.appendChild(footerUlThree[i]);
       footerUlThree[i].append(liContentFooterThree);
 } 
    if(i == 2){
      footerContentDiv.appendChild(footerContentHeader);
       footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
      footerContentDiv.setAttribute('class','col-lg-3');
      footerContentDiv.classList.add('col-lg-3','col-md-3','col-sm-4', 'col-xs-12');
      var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
        footerContentHeader.innerHTML = footerContHead;
      var liContentFooterFour = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
      var footerUlFour = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
      liContentFooterFour[i].classList.add('list-unstyled', 'footer-txt');
      footerContentHeader.appendChild(footerUlFour[i]);
      footerUlFour[i].append(liContentFooterFour);
  }
    else if(i == 3){
      footerContentDiv.appendChild(footerContentHeader);
       footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
      footerContentDiv.setAttribute('class','col-lg-3');
     footerContentDiv.classList.add('col-lg-3','col-md-3','col-sm-4', 'col-xs-12');
      var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
        footerContentHeader.innerHTML = footerContHead;
      var liContentFooterFive = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
      var footerUlFive = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
       liContentFooterFive[i].classList.add('list-unstyled', 'footer-txt'); 
      footerContentHeader.appendChild(footerUlFive[i]);
      footerUlFive[i].append(liContentFooterFive);
  }
  else if(i == 4){
            footerContentDiv.appendChild(footerContentHeader);
            footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
    var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
            footerContentHeader.innerHTML = footerContHead;
            footerUl.classList.add('list-inline', 'footer-txt');
            footerContentHeader.appendChild(footerUl);
      // var liContentFooterSix = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[1];
      // var footerUlSix = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head')[i]
      // footerUlSix.append(liContentFooterSix);
  }
      
    }
  }
}

