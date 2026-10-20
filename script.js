//your JS code here. If required.


const squares = document.querySelectorAll(".square");

squares.forEach(function (square) {
    square.addEventListener("mouseenter", function () {
        squares.forEach(function (otherSquare) {
            if (otherSquare !== square) {
                otherSquare.style.backgroundColor = "#6F4E37";
            } else {
                otherSquare.style.backgroundColor = "#E6E6FA";
            }
        });
    });

    square.addEventListener("mouseleave", function () {
        squares.forEach(function (item) {
            item.style.backgroundColor = "#E6E6FA";
        });
    });
});
