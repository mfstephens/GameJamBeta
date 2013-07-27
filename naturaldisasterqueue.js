NaturalDisasterQueue = function() 
{
        var queueSize = 10;
        var typesOfDisasters = 3;
        var glbtimer = 0;
        var timer = 0;

        this.queue = new Array(); 
        var disasterTimes = [1500,2000,2500];
        var currentType = 0;
}


function scheduleShit(dt)
{
        if(queue.length < 10)
        {
                append();
        }

        //update global and between-event timers 
        glbtimer += dt;
        timer += dt;

        var returnNum = -1;
        currentType = queue[0];
        if(timer > disasterTimes[currentType])
        {
                returnNum = dequeue();
                console.log(returnNum);
                timer = 0;
        }
        return returnNum;
}

/*
* dequeue 
* removes the first element from the queue
*/
function dequeue()
{
        return queue.shift();
}

/*
* append
* adds more disasters to the queue
*/
function append()
{
        for(var i=0;i<queueSize;i++)
        {
                queue.push(Math.floor(Math.random()*typesOfDisasters));
        }
}