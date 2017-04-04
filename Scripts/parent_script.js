
var iframe =  document.getElementById("unity-frame");
iframe.onload = function() {
    var iframe_window = iframe.contentWindow;
    var settings_value = localStorage.getItem("settings");
    if (settings_value != null) {
        console.log("Parent found stored settings with value = " + settings_value);
        iframe_window.postMessage(settings_value, "https://mikaelwallen.github.io");
    }
    else {
        console.log("No settings found.");
    }
};

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
    // For Chrome, the origin property is in the event.originalEvent object.
    var origin = event.origin || event.originalEvent.origin;
 
    console.log("Parent receiving event from origin " + origin + ", data = " + event.data);
    localStorage.setItem("settings", event.data);
}