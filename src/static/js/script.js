document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.detail-item-top').forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.detail-item').classList.toggle('open');
        });
    });

});