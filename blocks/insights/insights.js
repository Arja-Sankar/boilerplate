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

    
var commonImgclass , commonHeader , commonParagraph , commonClassOne , commonClassTwo , commonClassThree;

  
 for(let i=0;i < document.querySelectorAll('.insights > div').length; i++){
     
     let insightContentDiv = document.createElement('div');
    insightContainerFirstDiv.appendChild(insightContentDiv);
   insightContentDiv.classList.add('col-md-6', 'col-sm-12', 'col-xs-12', 'p0');

    let blockDataImg = document.querySelectorAll('.insights > div');
    let blockData = document.querySelectorAll('.insights > div > div');
  if(i == 0){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let heading = blockData[1].textContent;
    let para = blockData[2].textContent;
    let hreflink = blockData[3].textContent;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let d = document.querySelectorAll('#insights >.container > .row > div')[i];
  console.log(d);
    commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  d.appendChild(commonAnchor);
 
  commonClassOne = '';
 commonDiv.setAttribute('class',commonClassOne);
 commonAnchor.appendChild(commonDiv);

  commonClassTwo = '';
 commonMainDiv.setAttribute('class',commonClassTwo);
 commonDiv.appendChild(commonMainDiv);

  commonImgclass = '';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',commonParagraph);
commonMainDiv.appendChild(commonImg);
  }
// var commonImgclass , commonHeader , commonParagraph , commonClassOne , commonClassTwo , commonClassThree;

 

  
// d.innerHTML = `<a href=hreflink target="_blank" title=para>
//            <div class=commonClassOne>
//                 <div class=commonClassTwo>
//                      <img src=imgsrc alt=data.para class=data.commonImgclass>
//                           <div class=commonClassThree>    
//                                <h5 class=commonHeader>heading</h5>
//                                   <p class=commonParagraph>$(para)</p>
//                         </div>
//               </div>
//          </div>
//                 </a>`
     
    }   





 //  let newELEMENT = (data) => {
 //        return `<a href=${data.hreflink} target="_blank" title=${data.para}>
 //          <div class=${data.commonClassOne}>
 //               <div class=${data.commonClassTwo}>
 //                    <img src=${data.imgsrc} alt=${data.para} class=${data.commonImgclass}>
 //                         <div class=${data.commonClassThree}>    
 //                              <h5 class=${data.commonHeader}>${data.heading}</h5>
 //                                  <p class=${data.commonParagraph}>${data.para}</p>
 //                         </div>
 //               </div>
 //          </div>
 //                </a>`
 // }

// let data.commonImgclass , data.commonHeader , data.commonParagraph , data.commonClassOne , data.commonClassTwo , data.commonClassThree;
//      data.commonImgclass = 'img-responsive';
//      data.commonHeader = 'insight-title pb0';
//      data.commonParagraph = 'insight-text';
//      data.commonClassOne = 'col-eq-ht';
//      data.commonClassTwo = 'bg-color1';
//      data.commonClassThree = 'txt-reseach';
  







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

