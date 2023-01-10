import productData from '../../productList';
import ISearchParam from './ISearchParam';
import { IproductItem } from './IproductItem';
import addQueryParamsToUrl from './addQueryParams';
import drawProductItems from './drawProductItems';

function getItemsFiltered(objectFromCurrenQueryParams: ISearchParam) {
    if (productData) {
        productData.filter((e) => {
            if (objectFromCurrenQueryParams.category) {
                objectFromCurrenQueryParams.category.includes(e.category);
            }
        });
    }

    try {
        //filtering items
        const filterByBrand = () => {
            if (!objectFromCurrenQueryParams.brand) {
                return productData;
            } else {
                return productData.filter((el) => {
                    if (objectFromCurrenQueryParams.brand) {
                        if (objectFromCurrenQueryParams.brand.includes(encodeURI(el.brand))) {
                            return el;
                        }
                    }
                });
            }
        };
        const filteredByBrand = filterByBrand();
        // console.log('filteredByBrand', filteredByBrand);

        const filterByCategory = () => {
            if (!objectFromCurrenQueryParams.category) {
                return filteredByBrand;
            } else {
                return filteredByBrand.filter((el) => {
                    if (objectFromCurrenQueryParams.category) {
                        if (objectFromCurrenQueryParams.category.includes(el.category.toLowerCase())) {
                            return el;
                        }
                    }
                });
            }
        };

        const filteredByCategory = filterByCategory();

        const filterByPrice = () => {
            if (!objectFromCurrenQueryParams.price) {
                return filteredByCategory;
            } else {
                const min = parseInt(objectFromCurrenQueryParams.price[0]);
                const max = parseInt(objectFromCurrenQueryParams.price[1]);
                return filteredByCategory.filter((el) => el.price >= min && el.price <= max);
            }
        };

        const filteredByPrice = filterByPrice();

        const filterByStock = () => {
            if (!objectFromCurrenQueryParams.stock) {
                return filteredByPrice;
            } else {
                const min = parseInt(objectFromCurrenQueryParams.stock[0]);
                const max = parseInt(objectFromCurrenQueryParams.stock[1]);
                return filteredByPrice.filter((el) => el.stock >= min && el.stock <= max);
            }
        };
        
        // getting result
        const filteredItemsTotal = filterByStock();

        // filtering
        // console.log('filteredItemsTotal=>', filteredItemsTotal);

      
       
        let isBig: boolean;
         if (objectFromCurrenQueryParams.big && objectFromCurrenQueryParams?.big[0] === 'true') {
            isBig = true;
        } else {
            isBig = false;
        }
      //  drawProductItems(filteredItemsTotal, isBig);
        return filteredItemsTotal;
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}



export default getItemsFiltered;
