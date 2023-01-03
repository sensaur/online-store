class FilterCheckboxList {
    block: HTMLElement;
    arrayDataList: string[]

    constructor(block: HTMLElement, arrayDataList: string[]) {
        this.block = block;
        this.arrayDataList = arrayDataList;
    }

    drawFilterList() {
        this.arrayDataList.forEach((e) => {
            const checkboxLine = document.createElement('div');
            checkboxLine.classList.add('checkbox-line');
            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.classList.add('wrapper_checkbox');
            const checkboxInput = document.createElement('input');
            checkboxInput.classList.add('checkbox-line__checkbox');
            checkboxInput.setAttribute('type', 'checkbox');
            checkboxWrapper.appendChild(checkboxInput);
            const checkboxLabel = document.createElement('label');
            checkboxLabel.classList.add('checkbox-line__label');
            checkboxLabel.textContent = e[0].toUpperCase() + e.slice(1);
            checkboxWrapper.appendChild(checkboxLabel);
            const dataFilter = document.createElement('span');
            dataFilter.classList.add('data-filter');
            checkboxLine.appendChild(checkboxWrapper);
            checkboxLine.appendChild(dataFilter);
            this.block.append(checkboxLine);
    });
}
}

export default FilterCheckboxList;
