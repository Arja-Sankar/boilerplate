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
  /*   block.append(footer); */

      //Adding id to footer
        document.querySelector("footer").id += 'footer';

        //Loop used to set same className to div
        [...document.querySelectorAll("div")].forEach((element) => {
            element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
            });

              //Adding className to first Div
        document.querySelector("div").offsetParent.lastChild.ownerDocument.all[13].classList = 'container pt50 pb50';

            //Adding className to secondDiv
        document.querySelector("div").offsetParent.lastChild.ownerDocument.all[14].classList = 'row';

            //Loop used to set same className to h3
        [...document.querySelectorAll("h3")].forEach((element) => {
                element.className = "ftr-head mt-xs-20";
                });
                
            //Loop used to set same className to ul
        [...document.querySelectorAll("ul")].forEach((element) => {
            element.className = "list-unstyled footer-txt";
            });

            //Adding className to lastLoop ul tag in connect with us innerHtml div
        document.querySelector("ul").offsetParent.lastChild.ownerDocument.all[73].classList = 'list-inline footer-txt';

  }
}
