document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.info-item .info-item-top').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.info-item');
            const content = item.querySelector('.info-item-bottom');

            if (item.classList.contains('open')) {
                // Kapat
                content.style.height = content.scrollHeight + 'px'; // önce gerçek boyutu ayarla
                requestAnimationFrame(() => {
                    content.style.height = '0px'; // sonra kapat
                });
                item.classList.remove('open');
            } else {
                // Aç
                content.style.height = '0px'; // önce sıfırla
                item.classList.add('open');
                requestAnimationFrame(() => {
                    content.style.height = content.scrollHeight + 'px'; // sonra aç
                });
            }

            // Temizleme işlemi
            content.addEventListener('transitionend', () => {
                if (item.classList.contains('open')) {
                    content.style.height = 'auto'; // içerik sonradan uzarsa kırpılmaz
                }
            }, { once: true });
        });
    });


});