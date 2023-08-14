document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const generateForm = document.getElementById('generateForm');
    const codeResult = document.getElementById('codeResult');
    const generatedCode = document.getElementById('generatedCode');

    generateButton.addEventListener('click', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        if (email && phoneNumber) {
            const code = generateUniqueCode(email, phoneNumber);
            generatedCode.textContent = code;
            codeResult.classList.remove('d-none');
        }
    });

    function generateUniqueCode(email, phoneNumber) {
        const input = email + phoneNumber + Date.now();
        const hash = generateHash(input);
        return hash.substr(0, 7).toUpperCase();
    }

    function generateHash(input) {
        return Array.from(new Uint8Array(new TextEncoder().encode(input))).map(b => b.toString(16).padStart(2, '0')).join('');
    }
});
