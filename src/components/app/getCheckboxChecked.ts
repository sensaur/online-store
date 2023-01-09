function getCheckboxChecked(blockCheckboxName: string[] | undefined) {
    if (blockCheckboxName) {
        blockCheckboxName.forEach((e) => {
            const checkbox = document.getElementById(decodeURIComponent(e));
            if (checkbox instanceof HTMLInputElement) {
                checkbox.checked = true;
            }
        });
    }
}

export default getCheckboxChecked;
