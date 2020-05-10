let direction = 'right';
let offset = 0;

$("#header").offset({
    left: offset,
    top: offset
});

function moveHeading() {
    if (direction === 'right') {
        $("#header").offset({
            left: offset
        });
        offset++;
        if (offset > 200) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $("#header").offset({
            top: offset
        });
        offset++;
        if (offset > 200) {
            offset = 200;
            direction = "left";
        }
    } else if (direction === "left") {
        $("#header").offset({
            left: offset
        });
        offset--;
        if (offset < 0) {
            offset = 200;
            direction = "up";
        }
    } else if (direction === "up") {
        $("#header").offset({
            top: offset
        });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = "right";
        }
    }
}
let intervalId = setInterval(moveHeading, 10);

$("#header").click(function () {
    intervalId = setInterval(moveHeading, 10);
});