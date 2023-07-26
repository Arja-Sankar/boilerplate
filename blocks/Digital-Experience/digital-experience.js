  //Getting main Div container
  var mainDiv = document.querySelector('.digital-experience-wrapper');
  mainDiv.setAttribute('class','freeflowhtml');
  //adding classNames to main Div
  mainDiv.classList.add('aem-GridColumn','aem-GridColumn--default--12');
  
  //var newElement = document.querySelector('.freeflowhtml > div > div > div ').innerText;
 // mainDiv.appendChild(newElement);
    //creating section element
  var sectionElem = document.createElement('section');
  //adding Id to section
  sectionElem.setAttribute('id','overview');
  mainDiv.appendChild(sectionElem);
 
//creating article
var articleElem = document.createElement('article');
//adding class to article
articleElem.setAttribute('class','container');
sectionElem.appendChild(articleElem);

//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','row');  
articleElem.appendChild(containerDiv);

  //creating div inside Div Container
  var InsideContainerFirstDiv = document.createElement('div');
  //adding className to container first Div
  InsideContainerFirstDiv.classList.add('col-md-8','col-md-offset-2','col-sm-12','col-xs-12','wow','fadeInUp','animated');
  //adding attribute to container first Div
  InsideContainerFirstDiv.setAttribute('data-wow-delay','0.3s');
  //Adding Inline CSS to container first Div
  InsideContainerFirstDiv.style.visibility = 'visible';
  InsideContainerFirstDiv.style.webkitAnimationDelay = '0.3s';
  InsideContainerFirstDiv.style.mozAnimationDelay = '0.3s';
  InsideContainerFirstDiv.style.animationDelay = '0.3s';
  containerDiv.appendChild(InsideContainerFirstDiv);
    
     //Creating second Div inside Div Conatiner
   var InsideContainerSecondDiv = document.createElement('div');
   //adding className to above Div
   InsideContainerSecondDiv.classList.add('h1-heading','text-center','mb50');
   //adding text to above div
   InsideContainerSecondDiv.innerHTML='Digital Experience';
   InsideContainerFirstDiv.appendChild(InsideContainerSecondDiv);

  //sectionElem.replaceWith(document.createElement('section'));
