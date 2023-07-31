 //Getting main Div
var mainInsightHeading = document.querySelector('.insights-wrapper>.insights.block')
 //adding classNames to main Div
mainInsightHeading.setAttribute('class','insights');
mainInsightHeading.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');












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

