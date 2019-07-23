var snake = document.getElementById("snake");
var rowPosition = Math.floor(Math.random() * 10) + 1;
var colPosition = Math.floor(Math.random() * 10) + 1;

console.log("row", rowPosition);
console.log("col", colPosition);

for(var i = 0; i < 12; i++){
    var div = document.createElement("div");

    for(var j = 0; j < 12; j++){
        var createSpan = document.createElement("sapn");

        if(i == 0 || i == 11) {
            createSpan.innerText = "#";    
        } else {
            if(j == 0 || j == 11){
                createSpan.innerText = "#";    
            } else {
                if(i == rowPosition && j == colPosition) {
                    createSpan.style.color = "red";    
                }
                createSpan.innerText = j;
            }
        }

        div.appendChild(createSpan);
    }
    
    snake.appendChild(div);
}


