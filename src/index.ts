import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
// import filtersList from './components/app/filters';
import resetFilters from './components/app/resetFilters';
import drawPageWithSearchParam from './components/app/drawPageWithSearchParam';
import slider from './components/app/card';
import addQueryParamsToUrl from './components/app/addQueryParams';


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
const vieModeSmall = document.querySelector('.view-mode_small');
const vieModeBig = document.querySelector('.view-mode_big');

if (viewMode){
    viewMode.addEventListener(('click'), (ev) =>{
        if (ev.target instanceof HTMLElement){
           if (ev.target.classList.contains('.view-mode_small')) {
            vieModeBig?.classList.add('selected');
            const keyParam = 'big';
            const valueParam = 'false';
            addQueryParamsToUrl(valueParam, keyParam);
            }
        }
    })

}



// const bigSizeItemsPics = true;

/*window.onload = () => {
    slider();
};*/
