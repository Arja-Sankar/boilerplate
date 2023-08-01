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

    
var commonImgclass , commonHeaderClass , commonParagraphClass , commonClassOne , commonClassTwo , commonClassThree;

  
 for(let i=0;i < document.querySelectorAll('.insights > div').length; i++){
     
     let insightContentDiv = document.createElement('div');
    insightContainerFirstDiv.appendChild(insightContentDiv);
   insightContentDiv.classList.add('col-md-6', 'col-sm-12', 'col-xs-12', 'p0');

    let blockDataImg = document.querySelectorAll('.insights > div');
    let blockData = document.querySelectorAll('.insights > div > div');
  
    
  if(i == 0){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[1].textContent;
    let para = blockData[2].textContent;
    let hreflink = blockData[3].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 0){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[1].textContent;
    let para = blockData[2].textContent;
    let hreflink = blockData[3].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 1){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[4].textContent;
    let para = blockData[5].textContent;
    let hreflink = blockData[6].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 2){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[7].textContent;
    let para = blockData[8].textContent;
    let hreflink = blockData[9].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 3){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[10].textContent;
    let para = blockData[11].textContent;
    let hreflink = blockData[12].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 4){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[13].textContent;
    let para = blockData[14].textContent;
    let hreflink = blockData[15].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 5){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[16].textContent;
    let para = blockData[17].textContent;
    let hreflink = blockData[18].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 6){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[19].textContent;
    let para = blockData[20].textContent;
    let hreflink = blockData[21].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
   if(i == 7){
    let imgsrc = blockDataImg[i].querySelector('img').src;
    let commonAnchor = document.createElement('a'); 
    let commonDiv = document.createElement('div');
    let commonMainDiv = document.createElement('div');
    let commonMainSecDiv = document.createElement('div');
    let commonImg = document.createElement('img');
    let commonInsightHeader = document.createElement('h5');
    let commonParagraph = document.createElement('p');
    let data = document.querySelectorAll('#insights >.container > .row > div')[i];
    let heading = blockData[22].textContent;
    let para = blockData[23].textContent;
    let hreflink = blockData[24].textContent;
 
    console.log(data);
  commonAnchor.setAttribute('href',hreflink);
  commonAnchor.setAttribute('target','_blank');
  commonAnchor.setAttribute('title',para);
  data.appendChild(commonAnchor);
 
  commonClassOne = 'col-eq-ht';
  commonDiv.setAttribute('class',commonClassOne);
  commonAnchor.appendChild(commonDiv);

  commonClassTwo = 'bg-color1';
  commonMainDiv.setAttribute('class',commonClassTwo);
  commonDiv.appendChild(commonMainDiv);

  commonImgclass = 'img-responsive';
  commonImg.setAttribute('class',commonImgclass);
  commonImg.setAttribute('src',imgsrc);
  commonImg.setAttribute('alt',para);
  commonMainDiv.appendChild(commonImg);

  commonClassThree = 'txt-reseach';
  commonMainSecDiv.setAttribute('class',commonClassThree);
  commonMainDiv.appendChild(commonMainSecDiv);

   commonInsightHeader.setAttribute('class','insight-title');
  commonInsightHeader.setAttribute('class','pb0');
  commonInsightHeader.innerHTML = heading;
  commonMainSecDiv.appendChild(commonInsightHeader);

   commonParagraphClass = 'insight-text';
   commonParagraph.setAttribute('class',commonParagraphClass);
   commonParagraph.innerHTML = para;
   commonMainSecDiv.appendChild(commonParagraph);
   
  }
 
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
