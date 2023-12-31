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
   var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
    mainFooter.setAttribute('class','footerwt');
    mainFooter.setAttribute('role','contentinfo');
    mainFooter.setAttribute('aria-labelledby','un-footer-id');
    mainFooter.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');
   //var footerContentOne = document.querySelectorAll('.footerwt > div > div')[0].innerText
   var firstDiv = document.createElement('div');
     firstDiv.classList.add('wrap-footer', 'noindex');
     mainFooter.appendChild(firstDiv);
 
  var firstHeader = document.createElement('h2');
  firstHeader.setAttribute('class','sr-only');
    firstHeader.setAttribute('tabindex','-1');
    firstHeader.setAttribute('id','un-footer-id');
    firstHeader.setAttribute('data-unptsign','ppr-0101');
    firstHeader.innerHTML = `Footer`;
 firstDiv.appendChild(firstHeader);
   var firstStyle = document.createElement('style'); 
    firstStyle.innerHTML = `
                            	a.evidon-consent-link {
		display: inline-block;
		line-height: 14px;
		text-decoration: none;
		background-color: transparent;
		color: #00294B !important;
		padding: 6px;
	}

	#evidon-prefdiag-tabcontent-2 {
		margin: 0px 10px !important;
	}

	#evidon-prefdiag-tabcontainer {

		width: 400px !important;
	}

	#evidon-prefdiag-nav-1 {

		display: none !important;
	}

	@media only screen and (max-width: 768px) {
		.evidon-prefdiag-tabcontainer {
			max-height: 300px;
			background-color: #FFF;
		}

		a.evidon-consent-link {
			font-size: 12px !important;
			margin: 0px 13px;
			padding: 0px;
		}

		.legal .legalContainer ul.footer-nav {
			margin: 13px 13px;
		}

		.row.legalContainer {
			display: flex;
			flex-direction: column-reverse;
		}
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		.wrap-footer a.evidon-consent-link {
			font-size: 12px !important;
			margin: 0px 13px;
			padding: 0px;
		}

		.wrap-footer .legal .legalContainer ul.footer-nav {
			margin: 13px 13px !important;
		}

		.wrap-footer .legal .legalContainer ul.footer-nav li:first-child a {
			padding-left: 0px;
		}

		.wrap-footer .legal .row.legalContainer {
			display: flex;
			flex-direction: column-reverse;
		}
	}

	.cmp-footer__social-media-icons a {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		background-color: #f7f7f7;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cmp-footer__social-media-icons svg {
		width: 15px;
		height: 15px;
		fill: #7f7f7f;
	}
                          `;
firstDiv.append(firstStyle);

var secondDiv = document.createElement('div');
secondDiv.classList.add('footer-wide', 'black10','noindex');
secondDiv.setAttribute('data-dig-nav','Footer');
firstDiv.appendChild(secondDiv);
	    var thirdDiv = document.createElement('div');
	 thirdDiv.setAttribute('class','ns-outer-control');
	  secondDiv.appendChild(thirdDiv);
	  var footerInsideDiv = document.createElement('footer');
	  footerInsideDiv.classList.add('container', 'about', 'black10');
	  footerInsideDiv.setAttribute('role','presentation');
	  thirdDiv.appendChild(footerInsideDiv);
	  var fourthDiv = document.createElement('div');
	 fourthDiv.setAttribute('class','row');
	  footerInsideDiv.appendChild(fourthDiv);
	    var fifthDiv = document.createElement('div');
	 fifthDiv.setAttribute('class','span12');
	  fourthDiv.appendChild(fifthDiv);
var fifthDivContent = document.querySelector('.footer-wrapper > .footerwt > div > div >ul');
	var firstliContent =  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >ul > li')[3];
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >ul')[1].classList.add('social-media-badges');
	  var firstUl =  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >ul')[1];
	  firstliContent.appendChild(firstUl);
 fifthDiv.appendChild(fifthDivContent);
	  var sixthDiv = document.createElement('div');
	  sixthDiv.setAttribute('class','row');
	 sixthDiv.innerHTML = `
   			<div class="span12">
			<ul></ul>
			</div>
   			`;
footerInsideDiv.appendChild(sixthDiv);
 var counter = document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5').length;
	 var SeventhDiv = document.createElement('div');
	 SeventhDiv.classList.add('footer-menu', 'parbase');
         firstDiv.appendChild(SeventhDiv);
	  var eigthDiv = document.createElement('div');
eigthDiv.classList.add('footer-wide', 'black40','noindex');
eigthDiv.setAttribute('data-dig-nav','Footer');
SeventhDiv.appendChild(eigthDiv);
	    var ninethDiv = document.createElement('div');
	 ninethDiv.setAttribute('class','ns-outer-control');
	  eigthDiv.appendChild(ninethDiv);
	  var footerInsiderDiv = document.createElement('footer');
	  footerInsiderDiv.classList.add('container', 'concise-sitemap', 'black40');
	  footerInsiderDiv.setAttribute('role','presentation');
	  ninethDiv.appendChild(footerInsiderDiv);
	  var tenthDiv = document.createElement('div');
	 tenthDiv.setAttribute('class','row');
	  footerInsiderDiv.appendChild(tenthDiv);
 for(let i = 0; i < counter ;i++){
 
  if(i == 0){
	  var footerSpan = document.createElement('span');
	 footerSpan.classList.add('icon', 'hidden-desktop');
	  var elevenDiv = document.createElement('div');
    	 elevenDiv.classList.add('span2', 'inverse');
	  elevenDiv.appendChild(footerSpan);
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
	  var elevenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
	  var elevenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
	  elevenDiv.appendChild(elevenHeader); 
	  elevenDiv.appendChild(elevenUL);
	  tenthDiv.appendChild(elevenDiv);
  }else if(i == 1){
	    var footerSpan = document.createElement('span');
	 footerSpan.classList.add('icon', 'hidden-desktop');
	  var twleveDiv = document.createElement('div');
    	 twleveDiv.classList.add('span2', 'inverse');
	  twleveDiv.appendChild(footerSpan);
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
	  var twleveHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
	  var twleveUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
	  twleveDiv.appendChild(twleveHeader); 
	  twleveDiv.appendChild(twleveUL);
	  tenthDiv.appendChild(twleveDiv);
  }else if(i == 2){
	      var footerSpan = document.createElement('span');
	 footerSpan.classList.add('icon', 'hidden-desktop');
	  var thirteenDiv = document.createElement('div');
    	 thirteenDiv.classList.add('span2', 'inverse');
	  thirteenDiv.appendChild(footerSpan);
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
	  var thirteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
	  var thirteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
	  thirteenDiv.appendChild(thirteenHeader); 
	  thirteenDiv.appendChild(thirteenUL);
	  tenthDiv.appendChild(thirteenDiv);
  }else if(i == 3){
	      var footerSpan = document.createElement('span');
	 footerSpan.classList.add('icon', 'hidden-desktop');
	  var fourteenDiv = document.createElement('div');
    	 fourteenDiv.classList.add('span2', 'inverse');
	  fourteenDiv.appendChild(footerSpan);
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
	  var fourteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
	  var fourteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
	  fourteenDiv.appendChild(fourteenHeader); 
	  fourteenDiv.appendChild(fourteenUL);
	  tenthDiv.appendChild(fourteenDiv);
  }else if(i == 4){
	  var footerSpan = document.createElement('span');
	 footerSpan.classList.add('icon', 'hidden-desktop');
	  var fifteenDiv = document.createElement('div');
    	 fifteenDiv.classList.add('span2', 'inverse');
	  fifteenDiv.appendChild(footerSpan);
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
	  var fifteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
	  var fifteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
	  fifteenDiv.appendChild(fifteenHeader); 
	  fifteenDiv.appendChild(fifteenUL);
	  tenthDiv.appendChild(fifteenDiv);
  }else if(i == 5){
	 var footerSpan = document.createElement('span');
	 footerSpan.classList.add('icon', 'hidden-desktop');
	  var sixteenDiv = document.createElement('div');
    	 sixteenDiv.classList.add('span2', 'inverse');
	  sixteenDiv.appendChild(footerSpan);
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
	  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
	  var sixteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
	  var sixteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
	  sixteenDiv.appendChild(sixteenHeader); 
	  sixteenDiv.appendChild(sixteenUL);
	  tenthDiv.appendChild(sixteenDiv);  
  }

 }

var seventeenthDiv = document.createElement('div');
seventeenthDiv.classList.add('footer-wide', 'black10','noindex');
seventeenthDiv.setAttribute('data-dig-nav','Footer');
firstDiv.appendChild(seventeenthDiv);
	    var eighteenthDiv = document.createElement('div');
	 eighteenthDiv.setAttribute('class','ns-outer-control');
	  seventeenthDiv.appendChild(eighteenthDiv);
	  var footerInsideOneDiv = document.createElement('footer');
	  footerInsideOneDiv.classList.add('container', 'legal', 'black10');
	  footerInsideOneDiv.setAttribute('role','presentation');
	  eighteenthDiv.appendChild(footerInsideOneDiv);
	  var nineteenthDiv = document.createElement('div');
	 nineteenthDiv.setAttribute('class','row');
	  footerInsideOneDiv.appendChild(nineteenthDiv);
	    var twentyDiv = document.createElement('div');
	 twentyDiv.setAttribute('class','span12');
	  nineteenthDiv.appendChild(twentyDiv);
	  var twentyOneDiv = document.createElement('div');
	 twentyOneDiv.classList.add('row','legalContainer');
	  footerInsideOneDiv.appendChild(twentyOneDiv);
	    var twentytwoDiv = document.createElement('div');
	 twentytwoDiv.setAttribute('class','span6');
	  twentyOneDiv.appendChild(twentytwoDiv);
	  var twentyThreeDiv = document.createElement('p');
	twentyThreeDiv.innerHTML = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div')[0].innerText;
	  twentytwoDiv.appendChild(twentyThreeDiv);
 var twentyFourDiv = document.createElement('div');
	 twentyFourDiv.setAttribute('class','span6');
	  twentyOneDiv.appendChild(twentyFourDiv);
	  var twentyFiveDiv = document.createElement('ul');
	  twentyFiveDiv.classList.add('nav', 'footer-nav');
	  twentyFourDiv.appendChild(twentyFiveDiv);
	  var counterLength = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > div > div > div > a').length;
	   for(let j = 0; j < counterLength ;j++){
  if(j == 0){
	   var twentyFiveLIOne = document.createElement('li');
	  twentyFiveLIOne.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
	  	  twentyFiveDiv.appendChild(twentyFiveLIOne);
  } else if(j == 1){
	   var twentyFiveLITwo = document.createElement('li');
	  twentyFiveLITwo.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
	  	  twentyFiveDiv.appendChild(twentyFiveLITwo);
  } else if(j == 2){
	   var twentyFiveLIThree = document.createElement('li');
	  twentyFiveLIThree.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
	  	  twentyFiveDiv.appendChild(twentyFiveLIThree);
  } else if(j == 3){
		   var twentyFiveLIFour = document.createElement('li');
	  twentyFiveLIFour.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
	  	  twentyFiveDiv.appendChild(twentyFiveLIFour);
  }
  // else if(j == 4){
	 //   var twentyFiveLIFive = document.createElement('li');
	 //  twentyFiveLIFive.innerText.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
	 //  	  twentyFiveDiv.appendChild(twentyFiveLIFive);
  // } else if(j == 5){
	 //   var twentyFiveLISix = document.createElement('li');
	 //  twentyFiveLISix.innerText.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
	 //  	  twentyFiveDiv.appendChild(twentyFiveLISix);
  // }
	   }












































	  
   //console.log(footerContent);
    
//     var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
//     mainFooter.setAttribute('class','experiencefragment');
//     mainFooter.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');

//     var firstDiv = document.createElement('div');
//     firstDiv.setAttribute('class','xf-content-height');
//     mainFooter.appendChild(firstDiv);

//     var secondDiv = document.createElement('div');
//     secondDiv.setAttribute('class','aem-Grid');
//    secondDiv.classList.add('aem-Grid--12' , 'aem-Grid--default--12');
//     firstDiv.appendChild(secondDiv); 

//     var thirdDiv = document.createElement('div');
//     thirdDiv.setAttribute('class','freeflowhtml');
//     thirdDiv.classList.add('aem-GridColumn' , 'aem-GridColumn--default--12');
//     secondDiv.appendChild(thirdDiv);  

//     var fourthDiv = document.createElement('footer');
//     fourthDiv.setAttribute('id','footer');
//     thirdDiv.appendChild(fourthDiv);

//      var footerArticle = document.createElement('article');
//      fourthDiv.appendChild(footerArticle);

//      var fifthDiv = document.createElement('div');
//     fifthDiv.classList.add('container', 'pt50', 'pb50');
//     footerArticle.appendChild(fifthDiv);

//     var sixthDiv = document.createElement('div');
//     sixthDiv.setAttribute('class','row');
//     fifthDiv.appendChild(sixthDiv);
    
//    var counter = document.querySelectorAll('.footer-wrapper > .experiencefragment  > div > div > h3').length;

//     for(let i = 0; i < counter ;i++){
//         var footerContentDiv = document.createElement('div');
//         sixthDiv.appendChild(footerContentDiv);
//         footerContentDiv.classList.add('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-12');  
//         var footerContentHeader = document.createElement('h3');
//          var footerUl = document.createElement('ul');
//              footerContentDiv.appendChild(footerContentHeader);
//   if(i == 0){
//             footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
//       var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
//             footerContentHeader.innerHTML = footerContHead;    
//      var footerUlTwo = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
//      var liContentFooterTwo = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[i];
//       liContentFooterTwo.classList.add('list-unstyled', 'footer-txt'); 
//       footerUlTwo[i].append(liContentFooterTwo);
//      // footerContentHeader.appendChild(footerUlTwo[i]); 
//    }
    
        
//    else if(i == 1){footerContentDiv.appendChild(footerContentHeader);
//             footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
//      var footerContHeadOne = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
//         footerContentHeader.innerHTML = footerContHeadOne;
//                     var footerUlThree = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');   
//       var liContentFooterThree = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[i];
       
//        liContentFooterThree.classList.add('list-unstyled', 'footer-txt');   
//        footerUlThree[i].append(liContentFooterThree);
//        // footerContentHeader.appendChild(footerUlThree[i]);
//  } 
//     else if(i == 2){footerContentDiv.appendChild(footerContentHeader);
//        footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
//       footerContentDiv.setAttribute('class','col-lg-3');
//       footerContentDiv.classList.add('col-lg-3','col-md-3','col-sm-4', 'col-xs-12');
//       var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
//         footerContentHeader.innerHTML = footerContHead;
//       var liContentFooterFour = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
//       var footerUlFour = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
//       liContentFooterFour.classList.add('list-unstyled', 'footer-txt');
//       footerUlFour[i].append(liContentFooterFour);
//       // footerContentHeader.appendChild(footerUlFour[i]);
     
//   }
//     else if(i == 3){footerContentDiv.appendChild(footerContentHeader);
//        footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
//       footerContentDiv.setAttribute('class','col-lg-3');
//      footerContentDiv.classList.add('col-lg-3','col-md-3','col-sm-4', 'col-xs-12');
//       var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
//         footerContentHeader.innerHTML = footerContHead;
//       var liContentFooterFive = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
//       var footerUlFive = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
//        liContentFooterFive.classList.add('list-unstyled', 'footer-txt'); 
//       footerUlFive[i].append(liContentFooterFive);
//       // footerContentHeader.appendChild(footerUlFive[i]);
      
//   }
//   else if(i == 4){footerContentDiv.appendChild(footerContentHeader);
//             footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
//     var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
//             footerContentHeader.innerHTML = footerContHead;
//            var liContentFooterSix = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
//       var footerUlSix = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
//        liContentFooterSix.classList.add('list-inline', 'footer-txt'); 
//       footerUlSix[i].append(liContentFooterSix);
      
//                  }
//        } 
  
//      // copyright starts : 
//     var ftrcopyrightOne = document.createElement('div');
//     ftrcopyrightOne.classList.add('container-fluid', 'ptb15', 'bg-white');
//     footerArticle.appendChild(ftrcopyrightOne);  

//     var ftrcopyrightDiv = document.createElement('div');
//     ftrcopyrightDiv.setAttribute('class','container');
//     ftrcopyrightOne.appendChild(ftrcopyrightDiv);

//     var ftrcopyrightRowDiv = document.createElement('div');
//     ftrcopyrightRowDiv.setAttribute('class','row');
//     ftrcopyrightDiv.appendChild(ftrcopyrightRowDiv);

//     var ftrcopyrightRowFirstDiv = document.createElement('div');
//     ftrcopyrightRowFirstDiv.classList.add('col-lg-7', 'col-md-6', 'col-sm-6', 'col-xs-12');
//     ftrcopyrightRowDiv.appendChild(ftrcopyrightRowFirstDiv);

//     var ftrcopyrightRowPara = document.createElement('p');
//     ftrcopyrightRowPara.setAttribute('class','mb0');
//     var ftrCpyrightRowParaContent =  document.querySelector('.footer-wrapper > .experiencefragment  > div > div > div > div > div').innerText;
//     ftrcopyrightRowPara.innerHTML =  ftrCpyrightRowParaContent;
//     ftrcopyrightRowFirstDiv.appendChild(ftrcopyrightRowPara);

//     var ftrcopyrightRowSecondDiv = document.createElement('div');
//     ftrcopyrightRowSecondDiv.classList.add('col-lg-5', 'col-md-6', 'col-sm-6', 'col-xs-12');
//     ftrcopyrightRowDiv.appendChild(ftrcopyrightRowSecondDiv);
      
//     var ftrcopyrightRowThirdDiv = document.createElement('div');
//     ftrcopyrightRowThirdDiv.classList.add('pull-right', 'pull-left-xs', 'mt-xs-20');
//     ftrcopyrightRowSecondDiv.appendChild(ftrcopyrightRowThirdDiv);
    
//     var ftrcopyrightRowFourthDiv = document.createElement('div');
//     ftrcopyrightRowFourthDiv.setAttribute('class','country');
//     ftrcopyrightRowThirdDiv.appendChild(ftrcopyrightRowFourthDiv);

//     var ftrcopyrightRowFifthDiv = document.createElement('div');
//     ftrcopyrightRowFifthDiv.setAttribute('class','select-country');
//     ftrcopyrightRowFourthDiv.appendChild(ftrcopyrightRowFifthDiv);

//     var ftrcopyrightAnchor = document.createElement('a');
//     ftrcopyrightAnchor.setAttribute('aria-label','Select Country');
//     var footerAnchorLinkContent = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > div > div > div')[1].innerText;
//     ftrcopyrightAnchor.setAttribute('href',footerAnchorLinkContent);
//     var footerAnchorContent = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > div > div > div')[2].innerText;
//     ftrcopyrightAnchor.innerHTML = footerAnchorContent + `<span class="down-arrow"></span>`;
//     ftrcopyrightRowFifthDiv.appendChild(ftrcopyrightAnchor);
 
//     var ftrcopyrightRowSixDiv = document.createElement('div');
//     ftrcopyrightRowSixDiv.setAttribute('class','option-country');
//    // ftrcopyrightRowSixDiv.setAttribute('onclick','onclck()');
//    // ftrcopyrightRowSixDiv.classList.add('open-country'); 
//     ftrcopyrightRowFourthDiv.appendChild(ftrcopyrightRowSixDiv);

//  //   var ftrcopyrightUlContent = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
//     var ftrcopyrightUlContent = document.createElement('ul');
//     ftrcopyrightUlContent.classList.add('list-unstyled', 'country-align'); 
//     ftrcopyrightRowSixDiv.append(ftrcopyrightUlContent);
//     ftrcopyrightUlContent.innerHTML = `
//                                         <li><a aria-label="Go to Australia Page" href="/australia.html">Australia</a></li>
//                                         <li><a aria-label="Go to Austria Page" href="/at-en/">Austria</a></li>
//                                         <li><a aria-label="Go to Belgium Page" href="/be-en/">Belgium</a></li>
//                                         <li><a aria-label="Go to Brazil Page" href="/br/">Brazil</a></li>
//                                         <li><a aria-label="Go to Bulgaria Page" href="/bg-en/">Bulgaria</a></li>
//                                         <li><a aria-label="Go to Canada Page" href="/powering-digital-canada.html">Canada</a></li>
//                                         <li><a aria-label="Go to Chile Page" href="/contact/country.html?region=Americas&amp;subsidiary=Infosys#Chile">Chile</a></li>
//                                         <li><a aria-label="Go to China Page" href="/cn/">China</a></li>
//                                         <li><a aria-label="Go to Costa Rica Page" href="/contact/country.html?region=Americas&amp;subsidiary=Infosys#Costa%2520rica">Costa Rica</a></li>
//                                         <li><a aria-label="Go to Croatia Page" href="/hr-en/">Croatia</a> </li>
//                                         <li><a aria-label="Go to Czech Page" href="/cz-en/">Czech</a> </li>
//                                         <li><a aria-label="Go to Denmark Page" href="/dk-en/">Denmark</a> </li>
//                                         <li><a aria-label="Go to Estonia Page" href="/ee-en/">Estonia</a> </li>
//                                         <li><a aria-label="Go to Finland Page" href="/fi-en/">Finland</a> </li>
//                                         <li><a aria-label="Go to France Page" href="/fr-en/">France</a> </li>
//                                         <li><a aria-label="Go to Germany Page" href="/de/">Germany</a> </li>
//                                         <li><a aria-label="Go to Hong Kong Page" href="/hk-en.html">Hong Kong</a></li>
//                                         <li><a aria-label="Go to Hungary Page" href="/hu-en/">Hungary</a> </li>
//                                         <li><a aria-label="Go to India Page" href="/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#India">India</a></li>
//                                         <li><a aria-label="Go to Ireland Page" href="/ie-en/">Ireland</a> </li>
//                                         <li><a aria-label="Go to Italy Page" href="/it-en/">Italy</a> </li>
//                                         <li><a aria-label="Go to Japan Page" href="/jp/">Japan</a> </li>
//                                         <li><a aria-label="Go to Liechtenstein Page" href="/contact/country.html?region=Europe&amp;subsidiary=Infosys#Liechtenstein">Liechtenstein</a> </li>
//                                         <li><a aria-label="Go to Latvia Page" href="/lv-en/">Latvia</a> </li>
//                                         <li><a aria-label="Go to Lithuania Page" href="/lt-en/">Lithuania</a> </li>
//                                         <li><a aria-label="Go to Luxembourg Page" href="/lu-en/">Luxembourg</a> </li>
//                                         <li><a aria-label="Go to Malaysia Page" href="/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Malaysia">Malaysia</a></li>
//                                         <li><a aria-label="Mauritius" href="/contact/country.html?region=Middle_X32_East_X32_and_X32_Africa&amp;subsidiary=Infosys#Mauritius">Mauritius</a></li>
//                                         <li><a aria-label="Go to Mexico Page" href="/mx/">Mexico</a> </li>
//                                         <li><a aria-label="Go to New Zealand Page" href="/australia.html">New Zealand</a></li>
//                                         <li><a aria-label="Go to Norway Page" href="/no-en/">Norway</a> </li>
//                                         <li><a aria-label="Go to Peru Page" href="/contact/country.html?region=Americas&amp;subsidiary=Infosys#Peru">Peru</a></li>
//                                         <li><a aria-label="Go to Philippines Page" href="/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Philippines">Philippines</a></li>
//                                         <li><a aria-label="Go to Poland Page" href="/pl-en/">Poland</a> </li>
//                                         <li><a aria-label="Go to Portugal Page" href="/pt-en/">Portugal</a> </li>
//                                         <li><a aria-label="Go to Romania Page" href="/ro-en/">Romania</a> </li>
//                                         <li><a aria-label="Go to Russia Page" href="/ru-en/">Russia</a> </li>
//                                         <li><a aria-label="Go to Singapore Page" href="/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Singapore">Singapore</a>  </li>
//                                         <li><a aria-label="Go to Slovakia Page" href="/sk-en/">Slovakia</a> </li>
//                                         <li><a aria-label="Go to Slovenia Page" href="/sl-en/">Slovenia</a> </li>
//                                         <li><a aria-label="South Africa" href="/contact/country.html?region=Middle_X32_East_X32_and_X32_Africa&amp;subsidiary=Infosys#South%20Africa">South Africa</a></li>
//                                         <li><a aria-label="South Korea" href="/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#South%20Korea">South Korea</a></li>
//                                         <li><a aria-label="Go to Spain Page" href="/es-en/">Spain</a> </li>
//                                         <li><a aria-label="Go to Sweden Page" href="/se-en/">Sweden</a> </li>
//                                         <li><a href="/ch-en/" title="Switzerland">Switzerland</a></li>
//                                         <li><a aria-label="Go to Taiwan Page" href="/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Taiwan">Taiwan</a> </li>
//                                         <li><a aria-label="Go to Netherlands Page" href="/nl-en/">The Netherlands</a> </li>
//                                         <li><a aria-label="Go to Arab Emirates Page" href="/contact/country.html?region=Middle_X32_East_X32_and_X32_Africa&amp;subsidiary=Infosys#United%20Arab%20Emirates">United Arab Emirates</a></li>
//                                         <li><a aria-label="Go to UK Page" href="/gb-en/">United Kingdom (UK)</a></li>
//                                         <li><a aria-label="Go to Americas Page" href="/americas.html">United States</a></li>
//                                   `;
   
//  //   $(document).ready(function () {


// 	// });
//     // /* ------------- Country Selection Part ---------------*/
// // 	(function() {
// //     /* ------------- Country Selection Part ---------------*/
// // 	$(document).on("click", ".select-country, .option-country > ul > li", function () {
// // 		$(".option-country").toggleClass("open-country");
// // 		if ($(".option-country").hasClass("open-country")) {
// // 			$(".down-arrow").addClass("up-arrow").removeClass("down-arrow");
// // 		} else {
// // 			$(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
// // 		}
// // 	});
// // 	$(document).on('click', 'body', function (e) {
// // 		if (!$(e.target).is('.select-country > a')) {
// // 			$('.option-country.open-country').removeClass('open-country');
// // 			$(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
// // 		}
// // 	});
// // })();
//     // //copyright ends :
  }
}

