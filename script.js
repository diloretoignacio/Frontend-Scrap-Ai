function analizarImagen() {
    const inputElement = document.getElementById('inputImage');
    const file = inputElement.files[0];

    if (file) {
        const reader = new FileReader();
        var miToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWxvcmV0b2lnbmFjaW8iLCJpYXQiOjE2OTc1MTQzNTAsImV4cCI6MTY5NzUxNzk1MH0.ghMaumpoH8LzpK9fRFIkfAnhQXEDR033lsIjhNH870wIMXAA2C6zI6OJlleylD2WtV17LsG_neoX01G03yl9mw"

        reader.onloadend = function () {
            const base64Image = reader.result.split(',')[1];
            // Supongamos que "miToken" contiene el token que deseas enviar
            enviarAPI(base64Image, miToken);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona una imagen.');
    }
}

function mostrarResultado(data) {
    const resultContainer = document.getElementById('resultContainer');
    const apiResult = document.getElementById('apiResult');
    const resultImage = document.getElementById('resultImage');

    apiResult.innerHTML = `<p>Resultado de la API: ${JSON.stringify(data)}</p>`;

    if (data.image) {
        resultImage.src = `data:image/png;base64, ${data.image}`;
        resultImage.style.display = 'block';
    } else {
        resultImage.style.display = 'none';
    }

    resultContainer.style.display = 'block';
}

function enviarAPI(base64Image, token) {
    const apiUrl = 'http://localhost:8080/check';

    const requestBody = {
        BytesImage: base64Image
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, // Agregar el token al encabezado
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta de la API y mostrar en el HTML
        mostrarResultado(data);
    })
    .catch(error => {
        console.error('Error al enviar la imagen a la API:', error);
        alert('Hubo un error al analizar la imagen. Por favor, intenta de nuevo.');
    });
}
