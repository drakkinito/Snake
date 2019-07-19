var snake = document.getElementById("snake");

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
                createSpan.innerText = j;
            }
        }

        div.appendChild(createSpan);
    }
    
    snake.appendChild(div);
}
