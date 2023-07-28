

// // Add list to body (or anywhere else)
//      window.onload = function (block) {

// fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();
  }
    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    //decorateIcons(footer);
    block.append(footer);

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
  













