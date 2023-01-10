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



// const bigSizeItemsPics = true;

/*window.onload = () => {
    slider();
};*/
