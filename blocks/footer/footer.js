
   //latest updated Footer js code
           if(document.body.childNodes.item('').nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className == 'footer block'){
            //adding className to first Div in footer
            document.querySelector("div > div").className += 'container pt50 pb50'; 

             //adding className to second Div in footer
            document.querySelector("div > div > div").className += 'row';

            //creating div to append Loop (h3,ul) tags starts here ---
            
            for(var i=0; i< document.getElementsByTagName("H3").length;i++){
                const elem = document.createElement('div');
                const target = document.getElementsByTagName("H3")[i];
                const elemul = document.getElementsByTagName("ul")[i];
          
            // grab target element reference
           // const target = document.querySelector('H3')[i]
          // const elemul = document.querySelector('ul')

            // insert the element before target element
            target.parentNode.insertBefore(elem, target);
            elem.append(target,elemul);

            //Loop used to set same className to that tag conatins(h3,ul)
            [...document.querySelectorAll("div > div > div > div")].forEach((element) => {
                element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
                });
            }

            //Loop used to set same className to h3
            [...document.querySelectorAll("h3")].forEach((element) => {
                element.className = "ftr-head mt-xs-20";
                });
                
            //Loop used to set same className to ul
            [...document.querySelectorAll("ul")].forEach((element) => {
            element.className = "list-unstyled footer-txt";
            });

            //updating className to lastchild of ul containing in last div with innerHTML as Connect With Us
            document.body.children.item('footer-wrapper').lastElementChild.parentElement.firstElementChild.children.item("").firstChild.nextElementSibling.lastElementChild.lastChild.className = 'list-inline footer-txt';
                
            //Loop ends here ---list-inline footer-txt

                
        }
