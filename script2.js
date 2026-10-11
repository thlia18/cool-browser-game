document.addEventListener("DOMContentLoaded", () => {
    const magazine = document.getElementById("magazine-container");

    if (!magazine) {
        console.error("Magazine container not found.");
        return;
    }

    if (!window.St || !window.St.PageFlip) {
        console.error("PageFlip library did not load.");
        return;
    }

    const flipbook = new St.PageFlip(magazine, {
        width: 400,
        height: 550,
        size: "stretch",
        minWidth: 280,
        maxWidth: 800,
        minHeight: 350,
        maxHeight: 700,
        maxShadowOpacity: 0.35,
        showCover: true,
        usePortrait: true,
        startPage: 0,
        drawShadow: false,
        flippingTime: 800,
        mobileScrollSupport: true,
        autoSize: true
    });

    const pages = magazine.querySelectorAll(".page");

    if (pages.length === 0) {
        console.error("No pages found. Check the page classes.");
        return;
    }

    flipbook.loadFromHTML(pages);
});