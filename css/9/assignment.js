let changeColorBtn = document.getElementById("change-color-btn");

changeColorBtn.addEventListener("click", () => {
    const colorHex = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += colorHex[randomIndex];
    }

    document.body.style.backgroundColor = color;
})