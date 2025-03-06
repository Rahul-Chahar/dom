document.querySelector("body").addEventListener("mousemove", (e)=>{
    // Create a new div for the circle
    const circle = document.createElement("div");
    circle.className = "circle";

    // Position the circle at the mouse coordinates
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;

    // Append the circle to the body
    document.querySelector("body").appendChild(circle);

    // Remove the circle after 2 seconds to avoid overflow
    setTimeout(() => {
        circle.remove();
    }, 7000);
})