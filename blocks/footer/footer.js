
   //latest updated Footer js code
        //   if(document.body.childNodes.item('').nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className == 'footer block'){

            //adding className to first Div in footer
            document.querySelector(".footer > div").className += 'container pt50 pb50'; 

             //adding className to second Div in footer
              document.querySelector(".footer > .container > div").className += 'row';

            //Loop used to set same className to h3
            [...document.querySelectorAll(".footer > .container > .row > h3")].forEach((element) => {
                element.className = "ftr-head mt-xs-20";
                });
                
            //Loop used to set same className to ul
            [...document.querySelectorAll(".footer > .container > .row > ul")].forEach((element) => {
            element.className = "list-unstyled footer-txt";
            });

            //creating div to append Loop (h3,ul) tags starts here ---!
            
            for(var i=0; i< document.querySelectorAll(".ftr-head").length;i++){
                const elem = document.createElement('div');
                const target = document.querySelectorAll(".ftr-head")[i];
                const elemul = document.querySelectorAll(".footer-txt")[i];
                var rowDiv = document.querySelector('.footer > .container > .row');
            // insert the h3 and ul element into div element
                elem.appendChild(target);
                elem.appendChild(elemul);

               //adding div element into row Div
                rowDiv.appendChild(elem);
               

            //Loop used to set same className to that tag conatins(h3,ul)
            [...document.querySelectorAll(".footer > .container > .row > div")].forEach((element) => {
                element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
                });
            }

            //updating className to lastchild of ul containing in last div with innerHTML as Connect With Us
           document.querySelector('.footer > .container > .row').lastElementChild.className = 'list-inline footer-txt'; 

            //Loop ends here ---!

                
      //  }
