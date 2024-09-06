let del_btn = document.querySelectorAll(".del");


del_btn.forEach(button =>{
    button.addEventListener('click', function(e){
        e.preventDefault();
        let product = this.dataset.title;
        let id = this.dataset.id;

        let response = confirm("Do you really really want to DELETE this book  " + product + "? ");

        if(response){
            fetch('delete.php?id=' + id,{
                method: 'GET'
                
            })
            .then(response => response.text())
            .then(data => {
                if(data === 'success'){
                    window.location.href = 'showbook.php'
                }
            })
        }
    });
});