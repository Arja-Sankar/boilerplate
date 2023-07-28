
(function () {
    let desc = {}
    let targetELEMENT = document.querySelector(".title-description-wrapper")
    targetELEMENT.classList.add('titledescription','aem-GridColumn','aem-GridColumn--default--12')

    let newELEMENT = (desc) => {
        return `<section class="pt75">
                    <article class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 text-center wow fadeInDown animated" data-wow-delay="0.3s" style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
                                <img src="${desc.imgsrc}" class="center-block" alt="Line">
                                <h2 class="h2-heading">${.descheading}</h2>
                                <p class="col-md-8 col-md-offset-2 para-txt light-gray mb50">${desc.para}</p>
                            </div>
                        </div>
                    </article>
                </section>`
    }
    let block_DATA = target_ELEMENT.querySelectorAll('.title-description.block > div > div')
    desc.imgsrc=block_DATA[0].querySelector('img').src
    desc.heading=block_DATA[1].textContent
    desc.para=block_DATA[2].textContent
    targetELEMENT.innerHTML=newELEMENT(desc)
})();

