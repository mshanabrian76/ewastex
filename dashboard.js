/* =========================
   E-WasteX Dashboard JS
   ========================= */

// Get saved device
let device = JSON.parse(
    localStorage.getItem("ewasteDevice")
);

// Get saved pickup
let pickup = JSON.parse(
    localStorage.getItem("ewastePickup")
);


/* =========================
   UPDATE DASHBOARD
   ========================= */

function updateDashboard() {

    // If there is no device
    if (!device) {
        return;
    }


    // Device name
    const deviceName =
        document.getElementById("deviceName");

    if (deviceName) {
        deviceName.textContent =
            device.brand + " " + device.model;
    }


    // Tracking ID
    const trackingID =
        document.getElementById("trackingID");

    if (trackingID) {
        trackingID.textContent =
            device.id;
    }


    // Status
    const deviceStatus =
        document.getElementById("deviceStatus");

    if (deviceStatus) {
        deviceStatus.textContent =
            device.status;
    }


    // Weight
    const deviceWeight =
        document.getElementById("deviceWeight");

    if (deviceWeight) {
        deviceWeight.textContent =
            (parseFloat(device.weight) || 0) + " kg";
    }


    // Green points
    const greenPoints =
        document.getElementById("greenPoints");

    if (greenPoints) {
        greenPoints.textContent =
            device.reward || 0;
    }

}


/* =========================
   UPDATE PICKUP
   ========================= */

function updatePickup() {

    if (!pickup) {
        return;
    }


    const pickupDate =
        document.getElementById("pickupDate");

    if (pickupDate) {
        pickupDate.textContent =
            pickup.date;
    }


    const pickupTime =
        document.getElementById("pickupTime");

    if (pickupTime) {
        pickupTime.textContent =
            pickup.time;
    }


    const pickupAddress =
        document.getElementById("pickupAddress");

    if (pickupAddress) {
        pickupAddress.textContent =
            pickup.address;
    }

}


/* =========================
   UPDATE STATS
   ========================= */

function updateStats() {

    if (!device) {
        return;
    }


    // Devices recycled
    const recycled =
        document.getElementById("devicesRecycled");

    if (recycled) {

        if (device.status === "Recycled") {
            recycled.textContent = "1";
        } else {
            recycled.textContent = "0";
        }

    }


    // Green points
    const points =
        document.getElementById("greenPoints");

    if (points) {
        points.textContent =
            device.reward || 0;
    }


    // E-waste diverted
    const diverted =
        document.getElementById("ewasteDiverted");

    if (diverted) {
        diverted.textContent =
            (parseFloat(device.weight) || 0) + " kg";
    }

}


/* =========================
   REFRESH DATA
   ========================= */

function refreshDashboard() {

    device = JSON.parse(
        localStorage.getItem("ewasteDevice")
    );

    pickup = JSON.parse(
        localStorage.getItem("ewastePickup")
    );

    updateDashboard();
    updatePickup();
    updateStats();

}


/* =========================
   START
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        refreshDashboard();

    }
);