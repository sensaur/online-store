import ISearchParam from "./ISearchParam";
import productData from "../../productList";

function getFilteredByPrice(objectFromCurrenQueryParams: ISearchParam) {
    const filterByPrice = () => {
        if (!objectFromCurrenQueryParams.price) {
           return productData;
        } else {
            const min = parseInt(objectFromCurrenQueryParams.price[0]);
            const max = parseInt(objectFromCurrenQueryParams.price[1]);
            return productData.filter((el) => {((el.price >= min) && (el.price < max))});
        }
    };
  
}

export default getFilteredByPrice;