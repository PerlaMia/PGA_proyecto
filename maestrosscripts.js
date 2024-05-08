// JavaScript existente

// Función para mostrar la respuesta correspondiente a la pregunta seleccionada
function showAnswer(questionId) {
    // Ocultar todas las respuestas
    var answers = document.querySelectorAll('.answer');
    answers.forEach(function(answer) {
        answer.classList.remove('active');
    });

    // Mostrar la respuesta correspondiente a la pregunta seleccionada
    var answer = document.getElementById(questionId);
    if (answer) {
        answer.classList.add('active');
    }
}

// Evento para mostrar la respuesta al hacer clic en una pregunta
document.querySelectorAll('.dropdown-content ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que se recargue la página al hacer clic en el enlace
        var questionId = this.getAttribute('href').substring(1); // Obtener el ID de la pregunta
        showAnswer(questionId);
    });
});
