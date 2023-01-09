import ISearchParam from './ISearchParam';
import productData from '../../productList';

function getFilteredByPrice(objectFromCurrenQueryParams: ISearchParam) {
    const filterByPrice = () => {
        if (!objectFromCurrenQueryParams.price) {
            return productData;
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const min = parseInt(objectFromCurrenQueryParams.price[0]);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const max = parseInt(objectFromCurrenQueryParams.price[1]);
            return productData.filter((el) => {
                el.price >= min && el.price < max;
            });
        }
    };
}

export default getFilteredByPrice;
