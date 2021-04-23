function LikeButton(e) {
    if (e.classList.contains("far")) {
        e.classList.add("fas");
        e.classList.remove("far");
        e.style.color = "rgba(220, 24, 44, 0.8)";
    } else {
        e.classList.add("far");
        e.classList.remove("fas");
        e.style.color = "#657786";
    }
}

$("#tweet")

$("#tweet").keydown(function(e) {
    if ($("#tweet").val() != "") {
        $("#tweet-btn").css('opacity', '1');
    } else
        $("#tweet-btn").css('opacity', '0.5');
});

function Retweet(e) {
    console.log(e.style.color);
    if (e.style.color != "rgb(106, 214, 86)") {
        e.style.color = "rgb(106, 214, 86)";
    } else
        e.style.color = "#657786";
}