    //function abrirPDF() {
                // Reemplaza 'ruta/del/archivo.pdf' con la ubicación de tu archivo PDF
                //var archivoPDF = 'C:/Users/gean/Downloads/ellibrorojo.pdf';
                //dejo esta funcion por que me gusto xd
                // Abre el archivo PDF en una nueva pestaña
                //window.open(archivoPDF, '_blank');
            //}

document.addEventListener("DOMContentLoaded", function() {
                var likeButton = document.getElementById("like-button");
                var likeCount = document.getElementById("like-count");
                var storedLikes = localStorage.getItem("likes");
                if (storedLikes) {
                    likeCount.textContent = storedLikes;
                    likeButton.setAttribute("data-count", storedLikes);
                }
        
                likeButton.addEventListener("click", function(event) {
                    event.preventDefault(); 
                    var currentLikes = parseInt(likeButton.getAttribute("data-count"));
                    var newLikes = currentLikes + 1;
                    likeCount.textContent = newLikes;
                    likeButton.setAttribute("data-count", newLikes);
                    localStorage.setItem("likes", newLikes);
                });
            });
            var imgDor = document.getElementById("imgDor");
            imgDor.addEventListener("click", function() {
                alert("YAY");
            });
        