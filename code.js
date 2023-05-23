function controller()
{
    findNextID(CURRENT_POSITION,MOVEMENT);
    
}
function findNextID(last_id,action)
{
    let id_number = last_id.substring(4);
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
        const wha = document.querySelector(CURRENT_POSITION);
        wha.style.background = 'white';
        const what = document.querySelector(next_id);
        what.style.background = 'black';
        CURRENT_POSITION = next_id;
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
        const wha = document.querySelector(CURRENT_POSITION);
        wha.style.background = 'white';
        const what = document.querySelector(next_id);
        what.style.background = 'black';
        CURRENT_POSITION = next_id;
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
        const wha = document.querySelector(CURRENT_POSITION);
        wha.style.background = 'white';
        const what = document.querySelector(next_id);
        what.style.background = 'black';
        CURRENT_POSITION = next_id;
    }

    if(action == "right")
    {
        next_id_number = id_number +1;
        if(next_id_number%24==0)
        {
            next_id_number = next_id_number - 24;
        }
        next_id = '#id_' + next_id_number.toString();
       // alert(next_id);
        const wha = document.querySelector(CURRENT_POSITION);
        wha.style.background = 'white';
        const what = document.querySelector(next_id);
        what.style.background = 'black';
        CURRENT_POSITION = next_id;
    }


}
let CURRENT_POSITION = '#id_28';
let MOVEMENT = 'down';

const container = document.querySelector('.container');
for(let i=0;i<576;i++)
{
    const cell = document.createElement('div');
    cell.id = "id_"+i.toString();
    cell.classList.add('cell');
    container.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');

for(let i = 0; i<cells.length;i++)
{
    
    // cells[i].addEventListener('mouseover',makeSolid);
    cells[i].addEventListener('mouseover', function (e) {
        e.target.style.background = "black";
    });

}

const test = document.querySelector('#id_28');
test.style.background = 'black';

document.addEventListener("keydown",function(e) {
    if(e.key == "s")
    {
        
        MOVEMENT = 'down';
    }
    if(e.key == "w")
    {
        //alert("Found it");
        MOVEMENT = 'up';
    }
    
    if(e.key == "a")
    {
        //alert("Found it");
        MOVEMENT = 'left';
    }
    if(e.key == "d")
    {
        //alert("Found it");
        MOVEMENT = 'right';
    }
    
})
const the_controller = setInterval(controller, 100);