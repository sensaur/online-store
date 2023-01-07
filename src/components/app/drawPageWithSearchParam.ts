import ISearchParam from './ISearchParam';
import productData from '../../productList';

function drawPageWithSearchParam() {
    const currentUrl = new URL(window.location.href);
    let objectFromCurrenQueryParams: ISearchParam = {};
    const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
    const arFromCurrentQueryParams = currentQueryParamsString.map((e) => {
        return e.split('=');
    });
    objectFromCurrenQueryParams = arFromCurrentQueryParams.reduce((obj: { [key: string]: string[] }, e) => {
        obj[e[0]] = e[1].split('↕');
        return obj;
    }, {});
    getCheckboxChecked(objectFromCurrenQueryParams.category);
    getCheckboxChecked(objectFromCurrenQueryParams.brand);
    if (productData) {
        productData.filter((e) => {
            if (objectFromCurrenQueryParams.category) {
                objectFromCurrenQueryParams.category.includes(e.category);
            }
        });
    }
}

function getCheckboxChecked(blockCheckboxName: string[] | undefined) {
    if (blockCheckboxName) {
        blockCheckboxName.forEach((e) => {
            const checkbox = document.getElementById(e);
            if (checkbox instanceof HTMLInputElement) {
                checkbox.checked = true;
            }
        });
    }
}

export default drawPageWithSearchParam;
