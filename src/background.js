WSC.DEBUG = true;

var app = new WSC.WebApplication();
console.log(app);

var opt = {
    type: "basic",
    title: "Hypnos",
    message: "Primary message to display",
    iconUrl: "images/get_started48.png"
}

app.start(function() {
    console.log("start");

    chrome.notifications.create(getNotificationId(), opt, function() {});

});


// Returns a new notification ID used in the notification.
function getNotificationId() {
    var id = Math.floor(Math.random() * 9007199254740992) + 1;
    return id.toString();
}