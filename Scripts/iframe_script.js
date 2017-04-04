window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
    // For Chrome, the origin property is in the event.originalEvent object.
    var origin = event.origin || event.originalEvent.origin;
    // if (origin !== "http://example.org:8080")
    //     return;

    console.log("iframe receiving event from origin " + origin + ", data = " + event.data);
}