const slider = function () {
    const slides = document.getElementsByClassName('sliderBlock_items__itemPhoto');
    const next = document.getElementsByClassName('sliderBlock_controls__arrowForward')[0];
    const previous = document.getElementsByClassName('sliderBlock_controls__arrowBackward')[0];
    const items = document.getElementsByClassName('sliderBlock_positionControls')[0];
    const currentSlideItem = document.getElementsByClassName('sliderBlock_positionControls__paginatorItem');

    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n: number) {
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
        items.children[currentSlide].className =
            'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }

    if (next) {
        next.addEventListener('click', () => nextSlide());
    }

    if (previous) {
        previous.addEventListener('click', () => previousSlide());
    }

    function goToSlideAfterPushTheMiniBlock() {
        for (let i = 0; i < currentSlideItem.length; i++) {
            currentSlideItem[i].addEventListener(
                'click',
                () =>
                    function (i: number) {
                        const index = Array.prototype.indexOf.call(currentSlideItem, currentSlideItem[i]);
                        goToSlide(index);
                    }
            );
        }
    }
};

export default slider;
