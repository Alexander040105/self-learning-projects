const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const sliderButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition/ maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left =  `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const  handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button);

            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount =  imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        sliderButtons[0].style.display = imageList.scrollLeft <= 0 ? "none": "block";
        sliderButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none": "block";
    }

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons()
        updateScrollThumbPosition();
    });
}




window.addEventListener("load", initSlider)

export default {initSlider};