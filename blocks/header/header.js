import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
//   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   // enable nav dropdown keyboard accessibility
//   const navDrops = navSections.querySelectorAll('.nav-drop');
//   if (isDesktop.matches) {
//     navDrops.forEach((drop) => {
//       if (!drop.hasAttribute('tabindex')) {
//         drop.setAttribute('role', 'button');
//         drop.setAttribute('tabindex', 0);
//         drop.addEventListener('focus', focusNavSection);
//       }
//     });
//   } else {
//     navDrops.forEach((drop) => {
//       drop.removeAttribute('role');
//       drop.removeAttribute('tabindex');
//       drop.removeEventListener('focus', focusNavSection);
//     });
//   }
//   // enable menu collapse on escape keypress
//   if (!expanded || isDesktop.matches) {
//     // collapse menu on escape press
//     window.addEventListener('keydown', closeOnEscape);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//   }
// }

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.innerHTML = html;

    // const classes = ['brand', 'sections', 'tools'];
    // classes.forEach((c, i) => {
    //   const section = nav.children[i];
    //   if (section) section.classList.add(`nav-${c}`);
    // });

    // const navSections = nav.querySelector('.nav-sections');
    // if (navSections) {
    //   navSections.querySelectorAll(':scope > ul > li').forEach((navSection) => {
    //     if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
    //     navSection.addEventListener('click', () => {
    //       if (isDesktop.matches) {
    //         const expanded = navSection.getAttribute('aria-expanded') === 'true';
    //         toggleAllNavSections(navSections);
    //         navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    //       }
    //     });
    //   });
    // }

    // // hamburger for mobile
    // const hamburger = document.createElement('div');
    // hamburger.classList.add('nav-hamburger');
    // hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
    //     <span class="nav-hamburger-icon"></span>
    //   </button>`;
    // hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
    // nav.prepend(hamburger);
    // nav.setAttribute('aria-expanded', 'false');
    // // prevent mobile nav behavior on window resize
    // toggleMenu(nav, navSections, isDesktop.matches);
    // isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

    decorateIcons(nav);
    const navWrapper = document.createElement('div');
    navWrapper.className = 'nav-wrapper';
    navWrapper.append(nav);
    block.append(navWrapper);

    var mainDXNavContent = document.querySelector('.nav-wrapper > #nav > div');
    mainDXNavContent.style.display = 'none';
    
    var getMainNav = document.querySelector('.nav-wrapper > #nav');
    getMainNav.classList.add('navbar', 'navbar-default', 'navbar-fixed-top', 'scrollbg-show');
    getMainNav.setAttribute('role','navigation');

    var navFirstDxDiv = document.createElement('div');
    navFirstDxDiv.classList.add('container', 'mt45');
    getMainNav.appendChild(navFirstDxDiv);

    var navSecondDxDiv = document.createElement('div');
    navSecondDxDiv.classList.add('navbar-header', 'page-scroll');
    navFirstDxDiv.appendChild(navSecondDxDiv);

    var navThirdDXAnchor = document.createElement('a');
    var anchorTitleContentDX = document.querySelectorAll('.nav-wrapper > #nav > div > .nav-logo-list > div > div')[1].innerText;
    var anchorlinkDX = document.querySelectorAll('.nav-wrapper > #nav > div > .nav-logo-list > div > div')[2].innerText;
    navThirdDXAnchor.setAttribute('class','navbar-brand');
    navThirdDXAnchor.setAttribute('href',anchorlinkDX);
    navThirdDXAnchor.setAttribute('title',anchorTitleContentDX);
    navThirdDXAnchor.setAttribute('aria-label',anchorTitleContentDX);
    navSecondDxDiv.appendChild(navThirdDXAnchor);
    
    var logoPictureSrc = document.querySelector('.nav-wrapper > #nav > div > .nav-logo-list > div > div > picture > img');
    navThirdDXAnchor.appendChild(logoPictureSrc);

    var navSecondContainerDiv = document.createElement('div');
    navSecondContainerDiv.classList.add('header-menu', 'hidden-tab');
    navSecondContainerDiv.style.display = 'block';
    navFirstDxDiv.appendChild(navSecondContainerDiv);

    var getnavUlDXContent = document.querySelector('.nav-wrapper > #nav > div > .nav-logo-list > div > div > ul');
    getnavUlDXContent.classList.add('nav', 'navbar-nav', 'navbar-right', 'pos-right');
    navSecondContainerDiv.appendChild(getnavUlDXContent);

    var searchDX = document.createElement('div');
    searchDX.setAttribute('role','search');
    navFirstDxDiv.appendChild(searchDX);
    searchDX.innerHTML = `
     <div class="search__color">
	<svg class="hidden1">
		<defs>
			<symbol id="icon-search" viewBox="0 0 24 24">
				<title>search</title>
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
			</symbol>
			<symbol id="icon-cross" viewBox="0 0 24 24">
				<title>cross</title>
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
			</symbol>
		</defs>
	</svg>
	<div class="main-wrap">
	<div class="search-wrap search-icon" style="top: 47px;">
		<button id="btn-search" class="btn1 btn--search" aria-label="Click to search" style="color: rgb(255, 255, 255);">
			<svg class="icon icon--search">
					<use xlink:href="#icon-search"></use>
			</svg>
		</button>
	</div>
	</div>
	<div class="search" aria-label="Site Search" style="width: auto;">
		<div class="search__inner search__inner--up">
			<!--action needs to be attached-->
			<form class="search__form" action="/search.html" method="get">
				<input id="k" class="search__input" name="k" type="search" placeholder="What are you looking for?" autocomplete="off" spellcheck="false" title="Search" aria-label="search text" tabindex="-1">
                               <label for="k" class="none">Search</label>
				<span class="search__info">Hit enter to search or ESC to close</span>
				<!-- <sly data-sly-test="false"><input id="search-categories" type="hidden" name="c" value="" /></sly> -->

			</form>
		</div>
                 <button id="btn-search-close" class="btn1 btn--search-close" aria-label="Close search form" style="color: rgb(255, 255, 255);" tabindex="-1">
			<svg class="icon icon--cross">
				<use xlink:href="#icon-cross"></use>
			</svg>
		</button>
		<div class="search__inner search__inner--down">
			<!-- search related content-->
			<div class="search__related"></div>
		</div>
	</div>
	<img src="/content/dam/infosys-web/en/global-resource/images/calendar.png" alt="" class="calendar-img">
<div class="calendar-full-wrapper">
	<div class="calendar-triangle"></div>
	<div class="calendar-box"><button class="calendar-close visible-xs">×</button><div class="calendar-wrap calendar-box1"><div class="calendar-heading"><span>News</span></div><div class="calendar-para"><ul><li><span>Press Release</span><a href="/newsroom/press-releases/2023/leader-5g-engineering-services-assessment2023.html" title="Infosys Positioned as a Leader for the Second Consecutive Year in the Everest Group 5G Engineering Services PEAK Matrix® Assessment 2023" class="calendar-link">Infosys Positioned as a Leader for the Second Consecutive Year in the Everest Group 5G Engineering Services PEAK Matrix® Assessment 2023</a></li></ul><div class="moreText"><ul><li><span>Press Release</span><a href="/investors/reports-filings/quarterly-results/2023-2024/q1.html" title="Financial Information for the First Quarter ended June 30, 2023" class="calendar-link">Financial Information for the First Quarter ended June 30, 2023</a></li><li><span>Press Release</span><a href="/newsroom/press-releases/2023/transforms-banks-customer-employee-experience.html" title="Infosys Transforms Bendigo and Adelaide Bank?s Customer and Employee Experience" class="calendar-link">Infosys Transforms Bendigo and Adelaide Bank?s Customer and Employee Experience</a></li><li><span>Press Release</span><a href="/content/dam/infosys-web/en/newsroom/press-releases/documents/2023/q1-july20-2023.pdf" title="Infosys to Announce First Quarter Results on July 20, 2023" class="calendar-link">Infosys to Announce First Quarter Results on July 20, 2023</a></li><li><span>Press Release</span><a href="/newsroom/press-releases/2023/public-services-expands-canada.html" title="Infosys Public Services Expands in Canada" class="calendar-link">Infosys Public Services Expands in Canada</a></li></ul></div><button class="textButton">Show More <i class="fa fa-plus" aria-hidden="true"></i></button></div></div><div class="calendar-wrap calendar-box2"><div class="calendar-heading"><span>Events</span></div><div class="calendar-para"><ul><li><span>undefined</span><a href="/newsroom/events/2023/business-desk-leadership-forum.html" title="Infosys and BusinessDesk - Leadership Forum" class="calendar-link">Infosys and BusinessDesk - Leadership Forum</a></li></ul><div class="moreText"><ul><li><span>undefined</span><a href="/newsroom/events/2023/startup-day-sap.html" title="Infosys Startup Day ? SAP " class="calendar-link">Infosys Startup Day ? SAP </a></li><li><span>undefined</span><a href="/newsroom/events/2023/ai-first-quality-engineering.html" title="AI-First in Quality Engineering" class="calendar-link">AI-First in Quality Engineering</a></li><li><span>Event</span><a href="/newsroom/events/2023/google-cloud-next-2023.html" title="Infosys Cobalt at Google Cloud Next 2023" class="calendar-link">Infosys Cobalt at Google Cloud Next 2023</a></li><li><span>undefined</span><a href="/newsroom/events/2023/spe-offshore-europe-2023.html" title="Infosys is one of the main partners for the Energy Transition zone at SPE Offshore Europe 2023" class="calendar-link">Infosys is one of the main partners for the Energy Transition zone at SPE Offshore Europe 2023</a></li></ul></div><button class="textButton">Show More <i class="fa fa-plus" aria-hidden="true"></i></button></div></div><div class="calendar-wrap calendar-box3"><div class="calendar-heading"><span>Infosys Stories</span></div><div class="calendar-para"><ul><li><span>undefined</span><a href="/infosys-stories/living-our-purpose/new-age-cyber-heroes.html" title="The rise of the new-age cyber-heroes" class="calendar-link">The rise of the new-age cyber-heroes</a></li></ul><div class="moreText"><ul><li><span>Article</span><a href="/infosys-stories/living-our-purpose/cybersecurity-gamification-way.html" title="Building fun into cybersecurity? Gamification is the way" class="calendar-link">Building fun into cybersecurity? Gamification is the way</a></li><li><span>Article</span><a href="/infosys-stories/nurturing-our-people/abdul-story.html" title="What you seek is seeking you" class="calendar-link">What you seek is seeking you</a></li><li><span>Article</span><a href="/infosys-stories/nurturing-our-people/mission-maatram.html" title="Mission Maatram: Alleviating poverty through education" class="calendar-link">Mission Maatram: Alleviating poverty through education</a></li><li><span>Article</span><a href="/infosys-stories/nurturing-our-people/mark-webber.html" title="Mark Webber | Infosys Stories" class="calendar-link">Mark Webber | Infosys Stories</a></li></ul></div><button class="textButton">Show More <i class="fa fa-plus" aria-hidden="true"></i></button></div></div></div>
</div>
	
		
	
</div>
     `
    // var searchNavDXImg = document.querySelector('.nav-wrapper > #nav > div > p > span ').innerHTML;
    // searchDX.appendChild(searchNavDXImg);
  }
}
