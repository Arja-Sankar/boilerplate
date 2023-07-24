import { createOptimizedPicture } from '../../scripts/scripts.js';

// Get the target element to replace
const targetElement = document.querySelector('.dx-text-media-wrapper');

// Create a new <div> element
const newElement = document.createElement('div');
newElement.className = 'successstories aem-GridColumn aem-GridColumn--default--12';


//const successStoriesContainer = newElement.querySelector('.dx-text-media');

// Replace the target element with the new element
targetElement.parentNode.replaceChild(newElement, targetElement);
