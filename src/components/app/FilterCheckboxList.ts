import addQueryParamsToUrl from './addQueryParams';
import { IproductItem } from './IproductItem';
import removeQueryParamsFromUrl from './removeQueryParamsFromURL';

class FilterCheckboxList {
    block: HTMLElement;
    arrayDataList: string[];
    arrayUniqueDataList: string[];
    arrayFilteredItems: string[];

    constructor(block: HTMLElement, arrayDataList: string[], arrayFilteredItems: string[] = arrayDataList) {
        this.block = block;
        this.arrayDataList = arrayDataList;
        this.arrayUniqueDataList = Array.from(new Set(arrayDataList));
        this.arrayFilteredItems = arrayFilteredItems;
    }

    drawFilterList() {
        this.arrayUniqueDataList.forEach((e) => {
            const amount = this.arrayDataList.reduce((sum, el) => {
                if (el === e) {
                    sum++;
                }
                return sum;
            }, 0);
            const numberFilteredItems = this.arrayFilteredItems.reduce((sum, el) => {
                if (el === e) {
                    sum++;
                }
                return sum;
            }, 0);
            const checkboxLine = document.createElement('div');
            checkboxLine.classList.add('checkbox-line');
            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.classList.add('wrapper_checkbox');
            const checkboxInput = document.createElement('input');
            checkboxInput.classList.add('checkbox-line__checkbox');
            checkboxInput.setAttribute('type', 'checkbox');
            checkboxInput.setAttribute('id', `${e}`);

            checkboxInput.addEventListener('change', (event) => {
                const checkbox = event.target;
                if (checkbox instanceof HTMLInputElement) {
                    const filterItemName = checkbox.getAttribute('id');
                    const filterBlockName = this.block.getAttribute('id');
                    if (checkbox.checked) {
                        if (filterBlockName && filterItemName) {
                            addQueryParamsToUrl(filterItemName, filterBlockName);
                        }
                    } else {
                        if (filterBlockName && filterItemName) {
                            removeQueryParamsFromUrl(filterItemName, filterBlockName);
                        }
                    }
                }
            });

            checkboxWrapper.appendChild(checkboxInput);
            const checkboxLabel = document.createElement('label');
            checkboxLabel.classList.add('checkbox-line__label');
            checkboxLabel.textContent = e[0].toUpperCase() + e.slice(1);
            checkboxWrapper.appendChild(checkboxLabel);
            const dataFilter = document.createElement('span');
            dataFilter.classList.add('data-filter');
            dataFilter.textContent = `(${numberFilteredItems}/${amount})`;
            checkboxLine.appendChild(checkboxWrapper);
            checkboxLine.appendChild(dataFilter);
            this.block.append(checkboxLine);
        });
    }
}

export default FilterCheckboxList;
