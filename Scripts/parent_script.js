var settings_value = localStorage.getItem("settings");
if (settings_value == null) {
    console.log("No stored settings found");
}
else {
    console.log("Found stored settings with value = " + settings_value);
}

localStorage.setItem("settings", "Test settings");

var iframe =  document.getElementById("unity-frame");
iframe.onload = function() {
    var iframe_window = iframe.contentWindow;
    iframe_window.postMessage(localStorage.getItem("settings"), "https://mikaelwallen.github.io");
};