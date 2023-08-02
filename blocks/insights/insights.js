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

  var insightContentDiv = document.createElement('div');
    insightContainerFirstDiv.appendChild(insightContentDiv);
   insightContentDiv.classList.add('col-md-6', 'col-sm-12', 'col-xs-12', 'p0');
    var blockDataImg = document.querySelectorAll('.insights > div');
    var blockData = document.querySelectorAll('.insights > div > div');
    var imgsrc = blockDataImg[0].querySelector('img').src;
    var commonAnchor = document.createElement('a'); 
    var commonDiv = document.createElement('div');
    var commonMainDiv = document.createElement('div');
    var commonMainSecDiv = document.createElement('div');
    var commonImg = document.createElement('img');
    var commonInsightHeader = document.createElement('h5');
    var commonParagraph = document.createElement('p');
    var data = document.querySelectorAll('#insights >.container > .row > div')[0];
    var heading = blockData[1].textContent;
    var hreflink = blockData[2].textContent;
    var para = blockData[3].textContent;
 
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

 for(let i=2;i < document.querySelectorAll('.insights > div').length; i++){
     
     let insightContentDiv = document.createElement('div');
    insightContainerFirstDiv.appendChild(insightContentDiv);
   insightContentDiv.classList.add('col-md-3', 'col-sm-6', 'col-xs-12', 'p0');

      var commonImgOneclass , 
      commonHeaderOneClass ,
      commonParagraphOneClass ,
      commonSubParagraphClass ,
      commonClassOnee , 
      commonClassTwoo ,
      commonClassThreee;
    var commonInsightTwoAnchor = document.createElement('a');
    var commonInsightTwoDiv = document.createElement('div');
    var commonInsightTwoMainDiv = document.createElement('div');
    var commonInsightTwoMainThrdDiv = document.createElement('div');
    var commonInsightTwoImg = document.createElement('img');
    var commonInsightTwoHeader = document.createElement('h5');
    var commonInsightTwoParagraph = document.createElement('p');
    var commonInsightTwoSubParagraph = document.createElement('p');
  
 if(i == 2){

    var imgsrcOne = document.querySelectorAll('.insights > div')[1].querySelector('img').src;

    var dataOne = document.querySelectorAll('#insights >.container > .row > div')[1];
    var InsightTwoheading = document.querySelectorAll('.insights > div > div')[5].textContent;
    var InsightTwohreflink = document.querySelectorAll('.insights > div > div')[6].textContent;
    var InsightTwopara = document.querySelectorAll('.insights > div > div')[7].textContent;
    var InsightsubPara = document.querySelectorAll('.insights > div > div')[8].textContent;

 
  console.log(data);
  commonInsightTwoAnchor.setAttribute('href',InsightTwohreflink);
  commonInsightTwoAnchor.setAttribute('target','_blank');
  commonInsightTwoAnchor.setAttribute('title',InsightTwopara);
  dataOne.appendChild(commonInsightTwoAnchor);
 
  commonClassOnee = 'col-eq-ht';
  commonInsightTwoDiv.setAttribute('class',commonClassOnee);
  commonInsightTwoDiv.classList.add('bg-blog');
  commonInsightTwoAnchor.appendChild(commonInsightTwoDiv);

  commonClassTwoo = 'txt-section';
  commonInsightTwoMainDiv.setAttribute('class',commonClassTwoo);
  commonInsightTwoDiv.appendChild(commonInsightTwoMainDiv);

  commonClassThreee = 'txt-blog';
  commonInsightTwoMainThrdDiv.setAttribute('class',commonClassThreee);
  commonInsightTwoMainDiv.appendChild(commonInsightTwoMainThrdDiv);
    
  commonHeaderOneClass = 'insight-title';
  commonInsightTwoHeader.setAttribute('class',commonHeaderOneClass);
  commonInsightTwoHeader.classList.add('color-onyx-m');
  commonInsightTwoHeader.innerHTML = InsightTwoheading;
  commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoHeader);
    
  commonImgOneclass = 'img-responsive';
  commonInsightTwoImg.setAttribute('class',commonImgOneclass);
  commonInsightTwoImg.classList.add('center-block', 'pt20');
  commonInsightTwoImg.setAttribute('src',imgsrcOne);
  commonInsightTwoImg.setAttribute('alt',InsightTwopara);
  commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoImg);

   commonParagraphOneClass = 'size-md-20';    
   commonInsightTwoParagraph.setAttribute('class',commonParagraphOneClass);
   commonInsightTwoParagraph.classList.add('fontweight400', 'black-color', 'line-height-26', 'pt10');
   commonInsightTwoParagraph.innerHTML = InsightTwopara;
   commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoParagraph);

   commonSubParagraphClass = 'more';
   commonInsightTwoSubParagraph.setAttribute('class',commonSubParagraphClass);
    commonInsightTwoSubParagraph.classList.add('black-color', 'readmore-top');
   commonInsightTwoSubParagraph.innerHTML = InsightsubPara;
   commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoSubParagraph);
  }  else  if(i == 3){

    var dataTwo = document.querySelectorAll('#insights >.container > .row > div')[2];
    var InsightTwoheading = document.querySelectorAll('.insights > div > div')[9].textContent;
    var InsightTwohreflink = document.querySelectorAll('.insights > div > div')[10].textContent;
    var InsightTwopara = document.querySelectorAll('.insights > div > div')[11].textContent;
    var InsightsubPara = document.querySelectorAll('.insights > div > div')[12].textContent;

  commonInsightTwoAnchor.setAttribute('href',InsightTwohreflink);
  commonInsightTwoAnchor.setAttribute('target','_blank');
  commonInsightTwoAnchor.setAttribute('title',InsightTwopara);
  dataTwo.appendChild(commonInsightTwoAnchor);
 
  commonClassOnee = 'col-eq-ht';
  commonInsightTwoDiv.setAttribute('class',commonClassOnee);
  commonInsightTwoDiv.classList.add('bg-pressrelease');
  commonInsightTwoAnchor.appendChild(commonInsightTwoDiv);

  commonClassTwoo = 'txt-section';
  commonInsightTwoMainDiv.setAttribute('class',commonClassTwoo);
  commonInsightTwoDiv.appendChild(commonInsightTwoMainDiv);

  commonClassThreee = 'txt-blog';
  commonInsightTwoMainThrdDiv.setAttribute('class',commonClassThreee);
  commonInsightTwoMainDiv.appendChild(commonInsightTwoMainThrdDiv);
    
  commonHeaderOneClass = 'insight-title';
  commonInsightTwoHeader.setAttribute('class',commonHeaderOneClass);
  commonInsightTwoHeader.classList.add('white-color');
  commonInsightTwoHeader.innerHTML = InsightTwoheading;
  commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoHeader);

   commonParagraphOneClass = 'size-md-20';    
   commonInsightTwoParagraph.setAttribute('class',commonParagraphOneClass);
   commonInsightTwoParagraph.classList.add('fontweight400', 'black-color', 'line-height-26', 'pt40');
   commonInsightTwoParagraph.innerHTML = InsightTwopara;
   commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoParagraph);

   commonSubParagraphClass = 'more';
   commonInsightTwoSubParagraph.setAttribute('class',commonSubParagraphClass);
    commonInsightTwoSubParagraph.classList.add('readmore-top', 'white-color');
   commonInsightTwoSubParagraph.innerHTML = InsightsubPara;
   commonInsightTwoMainThrdDiv.appendChild(commonInsightTwoSubParagraph);
 } 
  
 }
 
 
