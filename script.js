var snake = document.getElementById("snake");
var conf = {
    snake: {
        rowPosition: positionPoint(),
        colPosition: positionPoint(),
    },
    point: {
        rowPosition: positionPoint(),
        colPosition: positionPoint(),
    }, 
    sharp: "#"
}

function positionPoint() {
    return  Math.floor(Math.random() * 10) + 1;
}

for(var i = 0; i < 12; i++){
    var div = document.createElement("div");

    for(var j = 0; j < 12; j++){
        var createSpan = document.createElement("sapn");

        if(i == 0 || i == 11) {
            createSpan.innerText = conf.sharp;    
        } else {
            if(j == 0 || j == 11){
                createSpan.innerText = conf.sharp;    
            } else {
                if(i == conf.snake.colPosition && j == conf.snake.rowPosition) {
                    createSpan.style.background = "red";    
                } 
                if(i == conf.point.colPosition && j == conf.point.rowPosition) {
                    createSpan.style.background = "#4caf50";
                }    
                createSpan.innerText = j;
            }
            
        }

        div.appendChild(createSpan);
    }
    
    snake.appendChild(div);
}

addEventListener("keyup", function(e) {
    
    if(e.keyCode == 39)  {
        e.preventDefault();
        for()
        while(true) {
            console.log('position', conf.snake.rowPosition);

            conf.snake.rowPosition += 1; 

            if(conf.snake.rowPosition > 10) {
                break;
            }
        }
    }
});

