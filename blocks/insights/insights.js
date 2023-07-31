 //Getting main Div
var mainInsightHeading = document.querySelector('.insights-wrapper>.insights.block')
 //adding classNames to main Div
mainInsightHeading.setAttribute('class','insights');
mainInsightHeading.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');
//creating section element
    var insightSectionElem = document.createElement('section');
    //adding Id to section
    insightSectionElem.setAttribute('id','insights');
    insightSectionElem.setAttribute('class','pb75');
     mainInsightHeading.appendChild(insightSectionElem);
   
    //creating article
    var insightArticleElem = document.createElement('article');
    //adding class to article
    insightArticleElem.setAttribute('class','container');
    insightSectionElem.appendChild(insightArticleElem);
   
    //creating div inside Div Container
    var insightContainerFirstDiv = document.createElement('div');
    //adding className to container first Div
    insightContainerFirstDiv.classList.add('row', 'row-eq-ht', 'wow', 'fadeInUp', 'animated');
    //adding attribute to container first Div
    insightContainerFirstDiv.setAttribute('data-wow-delay','0.6s');
    //Adding Inline CSS to container first Div
    insightContainerFirstDiv.style.visibility = 'visible';
    insightContainerFirstDiv.style.webkitAnimationDelay = '0.6s';
    insightContainerFirstDiv.style.mozAnimationDelay = '0.6s';
    insightContainerFirstDiv.style.animationDelay = '0.6s';
    insightArticleElem.appendChild(insightContainerFirstDiv);
 //content loop div
    var insightContentDiv = document.createElement('div');
    //adding className to above Div
    insightContentDiv.classList.add('col-md-6', 'col-sm-12', 'col-xs-12 p0');
 for(let i=0;i < document.querySelectorAll('.insights > div').length; i++){
      
    insightContainerFirstDiv.appendChild(insightContentDiv);
 }













// import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

// export default function decorate(block) {   
//    var mainInsightHeading =  document.querySelector('.insights.block');
//       //adding classNames to main Div
//       mainInsightHeading.classList.add('insights', 'aem-GridColumn', 'aem-GridColumn--default--12');
  
//   /* change to ul, li */
//   // const ul = document.createElement('ul');
//   // [...block.children].forEach((row) => {
//   //   const li = document.createElement('li');
//   //   li.innerHTML = row.innerHTML;
//   //   [...li.children].forEach((div) => {
//   //     if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//   //     else div.className = 'cards-card-body';
//   //   });
//   //   ul.append(li);
//   // });
//   // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
//   // block.textContent = '';
//   // block.append(ul);
//   block.append(mainInsightHeading);
// }

