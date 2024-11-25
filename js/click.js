document.addEventListener('DOMContentLoaded', function() {
    const a = document.getElementById('title-link');
    let b = 0, d = null;

    a.addEventListener('click', function(e) {
        e.preventDefault();
        b++;
        if (b === 1) {
            d = setTimeout(() => {
                window.location.href = a.getAttribute('data-url');
                b = 0;
            }, 50);
        }
        if (b === 2) {
            clearTimeout(d);
            b = 0;
            alert('Welcome to the dark side!');
        }
    });
});