function NaturalDisasterQueue(gameObj){
        var queueSize = 10;
        var typesOfDisasters = 3;
        var glbtimer = 0;
        var timer = 0;
        var timeCounter = 0;
        var size = 0;

        this.queue = [];
        var currentType = 0;

        this.deque = function()
        {
                size -= 1;
                var type = this.queue.shift();

                if(type===0){
                        console.log('Asteroid');
                        return new Asteroid;
                }else if(type===1){
                        console.log('Aliens');
                        return new Aliens;
                }else{
                        console.log('Storm');
                        return new Storm;
                }
        };

        this.append = function(){
                for(var i=0;i<(queueSize-size);i++)
                {
                        size++;
                        this.queue.push(Math.floor(Math.random()*typesOfDisasters));
                }
        };

        this.peekItemFromQueue = function(i){
                var type = this.queue[i];

                if(type===0){
                        return new Asteroid;
                }else if(type===1){
                        return new Aliens;
                }else{
                        return new Storm;
                }
        }
}