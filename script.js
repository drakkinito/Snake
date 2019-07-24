var snake = document.getElementById("snake");
var conf = {
    snake: {
        rowPosition: 5,
        colPosition: 5,
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
        var createSpan = document.createElement("span");

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
                createSpan.innerText = '0';
            }
            
        }

        div.appendChild(createSpan);
    }
    
    snake.appendChild(div);
}

addEventListener("keyup", function(e) {
    var coutnSnake = 1;
    var span = document.getElementsByName('span');
    

    if(e.keyCode == 39)  {
        e.preventDefault();

        var moveRight = conf.snake.rowPosition += 1;
        
        var i = 0;
        (function() {
            if (moveRight <= 10) {
                snake.childNodes[5].childNodes[moveRight].style.background = 'red'
                moveRight++;
                setTimeout(arguments.callee, 500);
            } else {
                alert('Закончили');
            } 
        })();

        // while(true) {
            
        //     var col =  conf.snake.colPosition;
        //     console.log('---', moveRight);
        //     this.setInterval(function(){
        //     }, 1000);
        //     snake.childNodes[5].childNodes[moveRight].style.background = 'red'
            
        //     if(conf.snake.rowPosition > 9) {
        //         break;
        //     }
        // }
    }
});

