document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('user', JSON.stringify({name, email, password}));
            alert('Registrazione completata. Ora puoi effettuare il login.');
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            if (user.email === email && user.password === password) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Credenziali non valide');
            }
        });
    }

    const search = document.getElementById('search');
    if (search) {
        search.addEventListener('input', (e) => {
            const filter = e.target.value.toLowerCase();
            document.querySelectorAll('#offersList li').forEach(li => {
                li.style.display = li.textContent.toLowerCase().includes(filter) ? '' : 'none';
            });
        });
    }
});
