document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.itemImg');
    images.forEach(function (image) {
        image.addEventListener('mouseenter', function () {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseleave', function () {
            image.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.smallCard p');
    navItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            item.style.color = 'blue';
        });
        item.addEventListener('mouseleave', function () {
            item.style.color = '';
        });
    });
});
