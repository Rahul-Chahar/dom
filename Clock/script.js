function updateClock(){
    const timeElement = document.querySelector('#time');
    const dateElement = document.querySelector('#date');

    const now = new Date();
    const hours = now.getHours() % 12 || 12; // 12-hour format with 12 instead of 0 for midnight and noon
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed for minutes less than 10
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Add leading zero if needed for seconds less than 10
    const ampm = now.getHours() >=12 ? 'PM' : 'AM'; // Determine if it's AM or PM based on the hour value 

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}
setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Update the clock immediately when the page loads