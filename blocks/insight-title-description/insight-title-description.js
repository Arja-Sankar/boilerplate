
(function () {
    let desc = {}
    let targetELEMENT = document.querySelector(".insight-title-description")
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
    let blockDATA = targetELEMENT.querySelectorAll('.title-description.block > div > div')
    desc.imgsrc=blockDATA[0].querySelector('img').src
    desc.heading=blockDATA[1].textContent
    desc.para=blockDATA[2].textContent
    targetELEMENT.innerHTML=newELEMENT(desc)
})();

