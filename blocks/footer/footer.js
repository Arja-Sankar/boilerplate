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
   console.log(footerContent);
    var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
   // var firstDiv = document.createElement('div');
    mainFooter.setAttribute('class','experiencefragment');
    mainFooter.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');
    // firstDiv.appendChild(mainFooter);
  }
}

