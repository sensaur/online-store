import productData from '../../productList';
import FilterCheckboxList from './FilterCheckboxList';
import { IproductItem } from './IproductItem';

const filtersList = (filteredItemsTotal: IproductItem[] = productData) => {
    const arrayDataCategory = productData.map((e) => e.category);
    const filterCategoryBlock = document.querySelector('.filter__list_category');
    const arrayDataBrand = productData.map((e) => e.brand);
    const filterBrandBlock = document.querySelector('.filter__list_brand');
    const arrayDataCategoryFiltered = filteredItemsTotal.map((e) => e.category);
    const arrayDataBrandFiltered = filteredItemsTotal.map((e) => e.brand);

    if (filterCategoryBlock instanceof HTMLElement) {
        filterCategoryBlock.setAttribute('id', 'category');
        const filterCategory = new FilterCheckboxList(
            filterCategoryBlock,
            arrayDataCategory,
            arrayDataCategoryFiltered
        );
        filterCategory.drawFilterList();
    }

    if (filterBrandBlock instanceof HTMLElement) {
        filterBrandBlock.setAttribute('id', 'brand');
        const filterBrand = new FilterCheckboxList(filterBrandBlock, arrayDataBrand, arrayDataBrandFiltered);
        filterBrand.drawFilterList();
    }
};

export default filtersList;
