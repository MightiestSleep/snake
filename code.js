
function genApple()
{
    var randomNumber = Math.floor(Math.random()*576);
    let apple = "#id_" + randomNumber.toString();
    const the_cell = document.querySelector(apple);
    if(the_cell.style.background == "white")
    {
        
        the_cell.style.background = 'red';
    }
    else
    {
        genApple();
    }
    
}
function controller()
{
    if(PLAY)
    {
        findNextID(MOVEMENT);
    }
    
    
}

function reset_game()
{
    //the_controller = setInterval(controller,SPEED);
    const bta = document.querySelector("#retry");
    if (bta.innerHTML == "Begin")
    {
        
        the_controller = setInterval(controller,SPEED);
        bta.innerHTML = "Retry";
    }
    else
    {
        
        the_controller = clearInterval(the_controller);
        const cells = document.querySelectorAll('.cell');

        for(let i = 0; i<cells.length;i++)
        {
            
            cells[i].style.background = "white";

        }
        queue.length = 3;
        queue.push('#id_55');
        queue.push('#id_79');
        queue.push('#id_103');
        MOVEMENT = "down";
        genApple();
        queue.length = 3;
        CURRENT_POSITION = queue[queue.length-1];
        PLAY = true;   
            
    
        
        
        SCORE = 0;
        SCR.innerHTML = "Score: " + SCORE;
        const spd = document.querySelector('#spad');
        
        console.log(spd.value);
        
        if(spd.value == "low")
        {
            console.log("are we here?");
            //clearInterval(the_controller);
            SPEED = 100;
            
        }
        if(spd.value== "medium")
        {
            SPEED = 70;
        }
        if(spd.value == "high")
        {
            SPEED = 40;
        }
        console.log(SPEED.toString());

        //setInterval(controller, SPEED);
        if(!the_controller)
        {
            the_controller = setInterval(controller, SPEED);
        }
        
    }
    
}

function findNextID(action)
{
    let id_number = queue[queue.length-1].substring(4);
    //alert(id_number);
    id_number = parseInt(id_number);
    //alert(id_number);
    if(action == "down")
    {
        next_id_number = id_number + 24;
        if((id_number + 24) > 575)
        {
            next_id_number = (id_number + 24) - 576;
        }
        next_id = '#id_' + next_id_number.toString();
       // alert(next_id);


        

        /*
        const wha = document.querySelector(CURRENT_POSITION);
        wha.style.background = 'white';
        */
        
        const next_item = document.querySelector(next_id);
        // alert(next_item.style.background);
        if(next_item.style.background == "red")
        {
            next_item.style.background = 'black';
            queue.push(next_id);
            SCORE = SCORE + 1;
            SCR.innerHTML = "Score: " + SCORE.toString();
            genApple();
        }
        else if(next_item.style.background == 'black')
        {
            PLAY = false;
            SCR.innerHTML = "Final score: " + SCORE.toString();
        }

        else {
            next_item.style.background = 'black';
                // push new position into queue
            queue.push(next_id);
            // make last element white again
            var i = queue.shift();
            const abtr = document.querySelector(i);
            abtr.style.background = 'white';
        }
    }

    if(action == "up")
    {
        next_id_number = id_number - 24;
        if((id_number - 24) < 0)
        {
            next_id_number = (id_number - 24) + 576;
        }
        next_id = '#id_' + next_id_number.toString();
       // alert(next_id);
       const next_item = document.querySelector(next_id);
       // alert(next_item.style.background);
       if(next_item.style.background == "red")
       {
           next_item.style.background = 'black';
           queue.push(next_id);
           genApple();
           SCORE = SCORE + 1;
           SCR.innerHTML = "Score: " + SCORE.toString();
       }
       else if(next_item.style.background == 'black')
        {
            PLAY = false;
            
            SCR.innerHTML = "Final score: " + SCORE.toString();
        }
       else {
           next_item.style.background = 'black';
               // push new position into queue
           queue.push(next_id);
           // make last element white again
           var i = queue.shift();
           const abtr = document.querySelector(i);
           abtr.style.background = 'white';
       }

    }

    if(action == "left")
    {
        next_id_number = id_number - 1;
        if(id_number%24==0)
        {
            next_id_number = next_id_number + 24;
        }
        next_id = '#id_' + next_id_number.toString();
       // alert(next_id);
        
       const next_item = document.querySelector(next_id);
       // alert(next_item.style.background);
       if(next_item.style.background == "red")
       {
           next_item.style.background = 'black';
           queue.push(next_id);
           genApple();
           
           SCORE = SCORE + 1;
           SCR.innerHTML = "Score: " + SCORE.toString();
       }
       else if(next_item.style.background == 'black')
        {
            PLAY = false;
            SCR.innerHTML = "Final score: " + SCORE.toString();
        }
       else {
           next_item.style.background = 'black';
               // push new position into queue
           queue.push(next_id);
           // make last element white again
           var i = queue.shift();
           const abtr = document.querySelector(i);
           abtr.style.background = 'white';
       }
    }

    if(action == "right")
    {
        next_id_number = id_number +1;
        if(next_id_number%24==0)
        {
            next_id_number = next_id_number - 24;
        }
        next_id = '#id_' + next_id_number.toString();
        
       const next_item = document.querySelector(next_id);
       if(next_item.style.background == "red")
       {
           next_item.style.background = 'black';
           queue.push(next_id);
           genApple();
           SCORE = SCORE + 1;
           SCR.innerHTML = "Score: " + SCORE.toString();
       }
       else if(next_item.style.background == 'black')
        {
            PLAY = false;
            SCR.innerHTML = "Final score: " + SCORE.toString();
        }
       else {
           next_item.style.background = 'black';
               // push new position into queue
           queue.push(next_id);
           // make last element white again
           var i = queue.shift();
           const abtr = document.querySelector(i);
           abtr.style.background = 'white';
       }

    }


}

let MOVEMENT = 'down';

var queue = [];
queue.push('#id_55');
queue.push('#id_79');
queue.push('#id_103');
let CURRENT_POSITION = queue[queue.length-1];
let SCORE = queue.length - 3;
let PLAY = true;
let SPEED = 100;

const container = document.querySelector('.container');
for(let i=0;i<576;i++)
{
    const cell = document.createElement('div');
    cell.id = "id_"+i.toString();
    cell.style.background = 'white';
    cell.classList.add('cell');
    container.appendChild(cell);
}


const wsg = document.querySelector('#id_55');
wsg.style.background = 'black';
const ctm = document.querySelector(queue[1]);
ctm.style.background = 'black';
const btb = document.querySelector(queue[2]);
btb.style.background = 'black';
genApple();

var ar = [];
document.addEventListener("keyup",function(e) {
    if(ar.length != 0)
    {
        ar.pop();
    }
})
document.addEventListener("keydown",function(e) {
    console.log(ar.length);
    ar.push(1);
        if(e.key == "s")
        {
            
                if(MOVEMENT != 'up')
                {
                    MOVEMENT = 'down';
                }
            
            //ar.pop();
        }
        if(e.key == "w")
        {
            //alert("Found it");
            
            
                if(MOVEMENT != 'down')
                {
                    MOVEMENT = 'up';
                }
            
            //ar.pop();
        }
    
        if(e.key == "a")
        {
            //alert("Found it");
        
            
            
                if(MOVEMENT != 'right')
                {
                    MOVEMENT = 'left';
                }
            
            //ar.pop();
        }
        if(e.key == "d")
        {
            //alert("Found it");
            
                if(MOVEMENT != 'left')
                {
                    MOVEMENT = 'right';
                }
            
            //ar.pop();
            
        }
    
})




const btn = document.querySelector('#retry');
btn.addEventListener('click', reset_game);
const SCR = document.querySelector('.top');
SCR.innerHTML = "Score: " + SCORE.toString();



