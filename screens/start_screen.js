Array.from(document.querySelectorAll('.window_choice-button')).forEach(el =>{
    el.onclick = (event)=>{
        window.store.dificulty = event.target.id;
        console.log(window.store);
        //тут будет отрисовка экрана игры
    }
})