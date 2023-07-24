import { readBlockConfig, decorateIcons } from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

// window.onload = function () {

 // Get the target element to replace
  const targetElement = document.querySelector('.dx-text-media-wrapper');

   // Create a new <div> element
  const newElement = document.createElement('div');
  newElement.className = 'freeflowhtml aem-GridColumn aem-GridColumn--default--12';

  // Set the HTML content for the new element
  newElement.innerHTML = `
        <section id="overview">
         <article class="container">
         <div class="row">
           <!-- JavaScript will insert the content here -->
          </div>
          </div>
          </article>
            <!-- JavaScript will insert the content here -->
        </section>
  `;
// Get the container element for the row
  const containerDiv = newElement.querySelector('#overview > .container > .row');

  export default function decorate(block) {
   // [...block.children].forEach((item) => {
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
    //Creating second Div inside Div Conatiner
    var InsideContainerSecondDiv = document.createElement('div');
    //adding className to above Div
    InsideContainerSecondDiv.classList.add('h1-heading','text-center','mb50');
    //adding text to above div
    InsideContainerSecondDiv.innerHTML='Digital Experience';
    //Getting div container presented from plain.html For Hiding
    var InsideMainDiv = document.querySelector('.dx-text-media > div');
    //Hiding the Inside Main Div From Plain Html
    InsideMainDiv.style.display = 'none';
    //creating div for para
    var InsideRowFirstDiv = document.createElement('div');
    //adding class to row Div
    InsideRowFirstDiv.classList.add('col-md-6','col-sm-12','col-xs-12','mb-sm-20','wow','fadeInLeft','animated');   
    //adding attribute to row para Div
    InsideRowFirstDiv.setAttribute('data-wow-delay','0.6s');
    //Adding Inline CSS to row para Div
    InsideRowFirstDiv.style.visibility = 'visible';
    InsideRowFirstDiv.style.webkitAnimationDelay = '0.6s';
    InsideRowFirstDiv.style.mozAnimationDelay = '0.6s';
    InsideRowFirstDiv.style.animationDelay = '0.6s';
    //creating para inside row Div
    var InsideRowPara = document.createElement('p');
    //adding class to para inside row Div
    InsideRowPara.setAttribute('class','para-ovr');
    //setting data to para inside row Div
    InsideRowPara.innerHTML = 'Infosys Digital Experience (DX) powers businesses across the entire Customer Experience (CX) journey. We re-imagine, create and deliver integrated and personalized experiences by creating human-centered digital platforms. We help enterprises stay relevant by transforming business models, future proofing, bringing agility and responsiveness.';
    //creating second div inside row Div
    var InsideRowSecondDiv = document.createElement('div');
    //adding className to second div inside row Div 
    InsideRowSecondDiv.classList.add('col-md-6','col-sm-12','col-xs-12','mb-sm-20','wow','fadeInRight','animated');
    //adding attribute to second div inside row Div 
    InsideRowSecondDiv.setAttribute('data-wow-delay','0.6s');
    //Adding Inline CSS to second div inside row Div 
    InsideRowSecondDiv.style.visibility = 'visible';
    InsideRowSecondDiv.style.webkitAnimationDelay = '0.6s';
    InsideRowSecondDiv.style.mozAnimationDelay = '0.6s';
    InsideRowSecondDiv.style.animationDelay = '0.6s';
    //A variable that creates video tag to append in second div inside row Div 
    var InsideRowSecondDivVideo = document.createElement('video');
    // Local file to append in second div inside row Div 
    InsideRowSecondDivVideo.src = 'https://videos.infosys.com/watch/RjFVtvoiRvUJSA1EGC2Cmf?';
    InsideRowSecondDivVideo.autoplay = true;
    InsideRowSecondDivVideo.loop = true;
    InsideRowSecondDivVideo.controls = true;
    //creating anchor tag after row Div
    var outsideRowanchor = document.createElement('a');
    //adding attribute to anchor tag after row Div 
    outsideRowanchor.setAttribute('href','/services/digital-experience/overview.html');
    //adding class to anchor tag after row Div 
    outsideRowanchor.classList.add('btn','btn-shutter-more','insight-btn','wow','fadeInUp','animated');
    //adding attribute to anchor tag after row Div 
    outsideRowanchor.setAttribute('data-wow-delay','0.6s');
    //Adding Inline CSS to anchor tag after row Div 
    outsideRowanchor.style.visibility = 'visible';
    outsideRowanchor.style.webkitAnimationDelay = '0.6s';
    outsideRowanchor.style.mozAnimationDelay = '0.6s';
    outsideRowanchor.style.animationDelay = '0.6s';
    //adding another attribute to anchor tag after row Div 
    outsideRowanchor.setAttribute('aria-label','Read More about undefined');
    //setting data to anchor tag after row Div
    outsideRowanchor.innerHTML = 'Read More';
   //appending everything starts Here
    
    containerDiv.appendChild(InsideContainerFirstDiv);
    InsideContainerFirstDiv.appendChild(InsideContainerSecondDiv);
    containerDiv.appendChild(InsideMainDiv);
    containerDiv.appendChild(InsideRowFirstDiv);
    InsideRowFirstDiv.appendChild(InsideRowPara);
    containerDiv.appendChild(InsideRowSecondDiv);
    InsideRowSecondDiv.appendChild(InsideRowSecondDivVideo);
    articleElem.appendChild(outsideRowanchor);
    //appending everything ends here
  // });
}
  // Replace the target element with the new element
  targetElement.parentNode.replaceChild(newElement, targetElement);



