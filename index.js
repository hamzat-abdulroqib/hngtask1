function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };

    // Update current time
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    currentTimeElement.textContent = now.toLocaleTimeString('en-US', options);

    // Update current day
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    currentDayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}

// Update the time and day every second
setInterval(updateDateTime, 1000);

// Initial call to display the time and day immediately on load
updateDateTime();