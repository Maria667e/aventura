const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(Button => {
    Button.addEventListener('click', function(){
       const atual = document.querySelector('.ative')
       const proximoPasso = 'passo-' + this.getAttribute ('data-proximo');

       atual.classList.remove('ativo');
       document.getElementById(proximoPasso).classList.add('ativo');
   })
})