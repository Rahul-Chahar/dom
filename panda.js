// Add event listener to track mouse movement
document.querySelector("body").addEventListener("mousemove", (e) => {
    // Create a div for the panda emoji
    const panda = document.createElement("div");
    panda.className = "panda";
    panda.style.left = `${e.pageX}px`;
    panda.style.top = `${e.pageY}px`;
    panda.textContent = "🐼"; // Use panda emoji directly

    // Append the panda to the body
    document.body.appendChild(panda);

    // Remove the panda after 2 seconds to avoid DOM overload
    setTimeout(() => {
        panda.remove();
    }, 7000);
});
