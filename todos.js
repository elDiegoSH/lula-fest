<<<<<<< HEAD


// Fecha de destino (ejemplo: Año Nuevo)
        var countDownDate = new Date("Nov 09, 2024 16:30:00").getTime();

        // Actualizar el contador cada segundo
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Cálculos de tiempo
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mostrar resultados
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // Si la cuenta termina
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
                alert("¡El tiempo ha terminado!");
            }
        }, 1000);


    // Función para mostrar el botón flotante cuando haces scroll -->
        window.onscroll = function() {
            var btnVolverArriba = document.getElementById("btnVolverArriba");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                btnVolverArriba.style.display = "block";
            } else {
                btnVolverArriba.style.display = "none";
            }
        };

        // Función para volver al inicio
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

     
=======


// Fecha de destino (ejemplo: Año Nuevo)
        var countDownDate = new Date("Nov 09, 2024 16:30:00").getTime();

        // Actualizar el contador cada segundo
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Cálculos de tiempo
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mostrar resultados
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // Si la cuenta termina
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
                alert("¡El tiempo ha terminado!");
            }
        }, 1000);


    // Función para mostrar el botón flotante cuando haces scroll -->
        window.onscroll = function() {
            var btnVolverArriba = document.getElementById("btnVolverArriba");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                btnVolverArriba.style.display = "block";
            } else {
                btnVolverArriba.style.display = "none";
            }
        };

        // Función para volver al inicio
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


         // Función para manejar la animación cuando el elemento entra en pantalla animate__zoomIn
    // Selecciona todos los elementos que quieres animar
    const sections = document.querySelectorAll('section');
>>>>>>> 7c4637ce65ad495ae9a9818ebdc045e54fce0475
