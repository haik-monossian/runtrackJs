const footer = document.querySelector("footer");

footer.style.backgroundColor = "rgb(13, 83, 62)";

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const r = Math.round(13 + (30 * scrollPercent));
    const g = Math.round(83 + (120 * scrollPercent));
    const b = Math.round(62 + (100 * scrollPercent));

    footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});