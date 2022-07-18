
$(document).ready(function(){

    $('#nome-modal').modal({
        backdrop: 'static',
        keyboard: false
    })
});


$(document).ready(function(){

    function abreModal() {
        $("#nome-modal").modal({
             show: true
           });
        }
       setTimeout(abreModal, 1000);
    
       window.onload = function abreModal(){
        
       }
    
       function getNome(){
        var nome = document.getElementById("getNome").value;
        console.log(nome);
       }
    
       $('#getNome').keydown(function (e) {
        if (e.keyCode == 13) {
            document.getElementById("btnSalvar").click();
        }          
        
    });

    $('.face').on('click', function() {

        let id = $(this).attr('id');

        if(id == 'carta1'){
            document.querySelector('#frente1').classList.toggle("virarFrente");
            document.querySelector('#verso1').classList.toggle("virarVerso");
        }else if(id == 'carta2'){
            document.querySelector('#frente2').classList.toggle("virarFrente");
            document.querySelector('#verso2').classList.toggle("virarVerso");
        }else{
            document.querySelector('#frente3').classList.toggle("virarFrente");
            document.querySelector('#verso3').classList.toggle("virarVerso");
        }
        
    });

    // Parallax
    setTimeout(function(){

        $('#frase').parallax({imageSrc: 'assets/img/parallax.jpg'});

    },250);
});