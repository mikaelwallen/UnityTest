var settings_value = localStorage.getItem("settings");
if (settings_value == null) {
    console.log("No stored settings found");
}
else {
    console.log("Found stored settings with value = " + settings_value);
}

localStorage.setItem("settings", "Test settings");