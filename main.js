let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');

let drag = null;

btn.onclick = () =>{
    let txt = inp.value;
    if(txt != ''){
        boxs[0].innerHTML += ` <p class="item" draggable="true">${txt}</p>`

        inp.value = '';
    }

    dragItem();
}

function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item =>{
        item.addEventListener('dragstart' , () => {
            drag = item;
            item.style.opacity = '0.5';
        })

        item.addEventListener('dragend' , () => {
            drag = null;
            item.style.opacity = '1';
        })

        boxs.forEach(box =>{
            box.addEventListener('dragover', (e) =>{
                e.preventDefault()
                box.style.background = '#090';
                box.style.color = '#fff'
            })

            box.addEventListener('dragleave', () =>{
                box.style.background = '#fff';
                box.style.color = '#000'
            })

            box.addEventListener('drop', () =>{
                box.append( drag );
                box.style.background = '#fff';
                box.style.color = '#000'
            })

        })
    })
}
