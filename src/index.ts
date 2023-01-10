import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
// import filtersList from './components/app/filters';
import resetFilters from './components/app/resetFilters';
import drawPageWithSearchParam from './components/app/drawPageWithSearchParam';
import slider from './components/app/card';
import addQueryParamsToUrl from './components/app/addQueryParams';
import removeQueryParamsFromUrl from './components/app/removeQueryParamsFromURL';


drawPageWithSearchParam();


//dual-slider
const multirangeBlockPrice = document.querySelector('.multirange_price');
const multirangeBlockStock = document.querySelector('.multirange_stock');

if (multirangeBlockPrice instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockPrice, true);
}

if (multirangeBlockStock instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockStock, false);
}

/*if (window.location.href !== window.location.pathname) {
    drawPageWithSearchParam();
}*/

const buttonResetfilters = document.querySelector('.reset-link__button');
buttonResetfilters?.addEventListener('click', resetFilters);

const select = document.querySelector('.sort');
if (select instanceof HTMLSelectElement){
    select.addEventListener('change', ()=>{
        const valueParam = select.value;
        const keyParam = 'sort';
        addQueryParamsToUrl(valueParam, keyParam);
    })
}

const viewMode = document.querySelector('.wrapper_view-mode');


if (viewMode){
    viewMode.addEventListener(('click'), (ev) =>{
        console.log(ev.target);
        const keyParam = 'big';
        const valueParam = 'false';
        if (ev.target instanceof HTMLElement){
           if (ev.target.classList.contains('view-mode_small')) {
            console.log('yes');
            addQueryParamsToUrl(valueParam, keyParam);
            } else {
                removeQueryParamsFromUrl(valueParam, keyParam);
            }
        }
    })

}

let copyLinkBtn = document.querySelector('.button_link');

if (copyLinkBtn instanceof HTMLElement) {
	copyLinkBtn.addEventListener('click', () => {
		let tempInput = document.createElement('textarea');

		tempInput.style.fontSize = '12pt';
		tempInput.style.border = '0';
		tempInput.style.padding = '0';
		tempInput.style.margin = '0';
		tempInput.style.position = 'absolute';
		tempInput.style.left = '-9999px';
		tempInput.setAttribute('readonly', '');

		tempInput.value = window.location.href;

        if ((copyLinkBtn instanceof HTMLElement) && (copyLinkBtn.parentNode instanceof HTMLElement)){
            copyLinkBtn.parentNode.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            tempInput.parentNode?.removeChild(tempInput);
            copyLinkBtn.textContent = 'Link was Copied';
        }
       
	});
}

window.onload = () => {
    localStorage.clear();
}


const sliderBlock = document.querySelector('.sliderBlock');
if (sliderBlock){
    window.onload = () => {
        slider();
    };

}

