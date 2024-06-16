
window.onload=function(){
    const downloadBtn = document.getElementById('btnSellier');
    const modal = document.getElementById('myModal');
    downloadBtn.addEventListener("click", (event) => {
        modal.style.display = 'block';
    });
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fermer la modal lorsque l'utilisateur clique en dehors de la modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
  }
