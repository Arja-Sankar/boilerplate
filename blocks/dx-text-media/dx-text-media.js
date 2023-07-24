import { createOptimizedPicture } from '../../scripts/scripts.js';

// Get the target element to replace
const targetElement = document.querySelector('.dx-text-media-wrapper');

// Create a new <div> element
const newElement = document.createElement('div');
newElement.className = 'successstories aem-GridColumn aem-GridColumn--default--12';


const successStoriesContainer = newElement.querySelector('.dx-text-media');
export default function decorate(block) {
  [...block.children].forEach((story) => {
  const column = document.createElement('div');
  column.className = 'col-md-3 col-sm-6 col-xs-12 mb20 relative wow fadeInLeft animated';
  column.dataset.wowDelay = '0.3s';
  column.style.visibility = 'visible';
  column.style.webkitAnimationDelay = '0.3s';
  column.style.mozAnimationDelay = '0.3s';
  column.style.animationDelay = '0.3s';

  const imageSrc = story.querySelector('img').getAttribute('src');
  const imageAlt = story.querySelector('img').getAttribute('alt');
  const description = story.querySelector('div').textContent;



  successStoriesContainer.appendChild(column);    
  });
}
// Replace the target element with the new element
targetElement.parentNode.replaceChild(newElement, targetElement);
