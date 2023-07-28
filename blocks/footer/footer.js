

// // Add list to body (or anywhere else)
//      window.onload = function (block) {
            //Getting footer tag
            var mainFooter = document.querySelector('.footer-wrapper');
            //setting ID to footer tag
            mainFooter.setAttribute('id','footer');
            //creating article inside footer
            var footerArticleElem = document.createElement('article');
            //Getting whole div inside footer to append inside article
            var footerMainDiv = document.querySelector('.footer-wrapper > div');
            //adding className to first Div in footer Div
            document.querySelector(".footer > div").className += 'container pt50 pb50'; 
            //adding className to second Div in footer Div
            document.querySelector(".footer > .container > div").className += 'row';
            //Loop used to set same className to h3
            [...document.querySelectorAll(".footer > .container > .row > h3")].forEach((element) => {
            element.className = "ftr-head mt-xs-20";
            });
            //Loop used to set same className to ul
            [...document.querySelectorAll(".footer > .container > .row > ul")].forEach((element) => {
            element.className = "list-unstyled footer-txt";
            });

            // [...document.querySelectorAll(".footer > .container > .row > div")].forEach((element) => {
            //   element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
            //   });
          
      
            for(var i=0; i< document.querySelectorAll(".ftr-head").length;i++){
                var elem = document.createElement('div');
                var target = document.querySelectorAll(".ftr-head")[i];
                var elemul = document.querySelectorAll(".footer-txt")[i];
                var d = document.querySelector('.footer > .container > .row')
                // var E = document.querySelectorAll('.footer > .container > .row > div')[i];
                elem.appendChild(target);
                elem.appendChild(elemul);
                d.appendChild(elem);
             //Loop used to set same className to that tag conatins(h3,ul)
             [...document.querySelectorAll(".footer > .container > .row > div")].forEach((element) => {
                element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
                });


             // insert the element before target element
             //    target.parentNode.insertBefore(elem, target);
                //     elem.append(target,elemul);

            
                //elem.appendChild(target,elem);
               


            

                // target.parentNode.insertBefore(elem, target);
                // elem.append(target,elemul);
                // target.append(elemul);
                // elem.append(target);
              //  E.appendChild(target,E);

            

            }

            //updating className to lastchild of ul containing in last div with innerHTML as Connect With Us
          // document.querySelector('.footer > .container > .row').lastElementChild.className = 'list-inline footer-txt'; 

            //Loop ends here ---!


            //appending everything starts here
            mainFooter.appendChild(footerArticleElem);
            footerArticleElem.appendChild(footerMainDiv);
            //appending everything ends here

     //   }
  

















// import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

// /**
//  * loads and decorates the footer
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   const cfg = readBlockConfig(block);
//   block.textContent = '';

//   // fetch footer content
//   const footerPath = cfg.footer || '/footer';
//   const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

//   if (resp.ok) {
//     const html = await resp.text();

//     // decorate footer DOM
//     const footer = document.createElement('div');
//     footer.innerHTML = html;

//     //decorateIcons(footer);
//     //block.append(footer);

//     // Create a new <div> element
//     const newElement = document.createElement('div');
//     newElement.className = 'freeflowhtml aem-GridColumn aem-GridColumn--default--12';

//     // Set the HTML content for the new element
//     newElement.innerHTML = `
//       <footer id="footer">
//           <article>
//               <div class="container pt50 pb50">
//                   <div class="row">
//                 //inner html comes here
//               </div>
//           </article>
//       </footer>
//     `;

//     const footerContainer = newElement.querySelector('.row');

//     [...footer.children].forEach((item) => {
//       const column = document.createElement('div');
//       column.className = 'col-lg-2 col-md-3 col-sm-4 col-xs-12';
//       const h3Element = item.querySelector("h3");
//       // Get the li element
//       const liElement = item.querySelector("li");
//       let linkText = "Link Text not found!";
//       let href = "Link not found!";
//      if (liElement) {
//                 const link = liElement.querySelector('a');
//                 linkText = link ? link.textContent : "Link not found!";
//                 href = link ? link.getAttribute('href') : "Href not found!";
//                 //const title = link ? link.getAttribute('title') : "Title not found!";
//                 //const label = link ? link.getAttribute('aria-label') : "Label not found!";
//             } else {
//                 console.log("li element not found!");
//             }
//       // Read the content of h3 and li
//       const h3Content = h3Element ? h3Element.textContent : "h3 element not found!";
//       column.innerHTML = `
//         <h3 class="ftr-head mt-xs-20">${h3Content}</h3>
//                             <ul class="list-unstyled footer-txt">
//                                 <li><a aria-label="${linkText}" href="${href}" title="${linkText}">${linkText}</a></li>
//                                 </ul>
//       `;

//       footerContainer.appendChild(column);
//       });
//       block.append(footerContainer);
//   }
// }



