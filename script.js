
// Get billing buttons
const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");

// Get all prices and billing labels
const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

// Function to change billing period
function setPeriod(period) {

    // Change all prices
    prices.forEach(function(price) {
        price.textContent = price.dataset[period];
    });

    // Change billing labels
    units.forEach(function(unit) {
        unit.textContent = period === "monthly"
            ? "per month"
            : "per year";
    });

    // Update button appearance and accessibility
    monthlyBtn.classList.toggle("active", period === "monthly");
    yearlyBtn.classList.toggle("active", period === "yearly");

    monthlyBtn.setAttribute(
        "aria-pressed",
        String(period === "monthly")
    );

    yearlyBtn.setAttribute(
        "aria-pressed",
        String(period === "yearly")
    );
}

// Monthly button click
monthlyBtn.addEventListener("click", function() {
    setPeriod("monthly");
});

// Yearly button click
yearlyBtn.addEventListener("click", function() {
    setPeriod("yearly");
});

// Handle plan selection
const chooseButtons = document.querySelectorAll(".choose-btn");

chooseButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const planName = button.dataset.plan;

        alert("You selected the " + planName + " plan!");
    });
});

// Set default billing period
setPeriod("monthly");
