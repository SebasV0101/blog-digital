document.getElementById('emailForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('/api/send-suscription', {
            method: 'POST',
            headers: {
    'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        const result = await response.json();
    
        if (response.ok) {
            document.getElementById('responseMessage').innerHTML = `
    <div class="alert alert-success" role="alert">
        ${result.message}
    </div>
            `;
            form.reset(); // Limpia el formulario
    
            // Elimina el mensaje después de 5 segundos
            setTimeout(() => {
                responseMessage.innerHTML = '';
            }, 5000);
        } else {
            document.getElementById('responseMessage').innerHTML = `
    <div class="alert alert-danger" role="alert">
        Error: ${result.message}
    </div>
            `;
    
            // Elimina el mensaje después de 5 segundos
            setTimeout(() => {
                responseMessage.innerHTML = '';
            }, 5000);
        }
    } catch (error) {
        document.getElementById('responseMessage').innerHTML = `
            <div class="alert alert-danger" role="alert">
    Error: ${error.message}
            </div>
        `;
    }
    });