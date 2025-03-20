document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://your-backend-url.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById('message').textContent = data.message;
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').textContent = data.message;
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('message').textContent = 'An error occurred';
        document.getElementById('message').style.color = 'red';
    }
});
