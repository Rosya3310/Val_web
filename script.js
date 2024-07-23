// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cards = document.querySelectorAll('.yoru');

    // Открытие модального окна при клике на карточку
    cards.forEach(yoru => {
        yoru.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.yoru');

    cards.forEach(yoru => {
        yoru.addEventListener('click', function() {
            // Удаляем класс clicked у всех элементов
            cards.forEach(y => y.classList.remove('clicked'));
            // Добавляем класс clicked к текущему элементу
            this.classList.add('clicked');
            // Удаляем класс clicked через 0.5 секунды (длительность анимации)
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
});

""
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cards = document.querySelectorAll('.KYO');

    // Открытие модального окна при клике на карточку
    cards.forEach(KYO => {
        KYO.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.KYO');

    cards.forEach(KYO => {
        KYO.addEventListener('click', function() {
            // Удаляем класс clicked у всех элементов
            cards.forEach(y => y.classList.remove('clicked'));
            // Добавляем класс clicked к текущему элементу
            this.classList.add('clicked');
            // Удаляем класс clicked через 0.5 секунды (длительность анимации)
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
});

""
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cards = document.querySelectorAll('.Neon');

    // Открытие модального окна при клике на карточку
    cards.forEach(Neon => {
        Neon.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.Neon');

    cards.forEach(Neon => {
        Neon.addEventListener('click', function() {
            // Удаляем класс clicked у всех элементов
            cards.forEach(y => y.classList.remove('clicked'));
            // Добавляем класс clicked к текущему элементу
            this.classList.add('clicked');
            // Удаляем класс clicked через 0.5 секунды (длительность анимации)
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
});

""
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cards = document.querySelectorAll('.killjoy');

    // Открытие модального окна при клике на карточку
    cards.forEach(killjoy => {
        killjoy.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.killjoy');

    cards.forEach(killjoy => {
        killjoy.addEventListener('click', function() {
            // Удаляем класс clicked у всех элементов
            cards.forEach(y => y.classList.remove('clicked'));
            // Добавляем класс clicked к текущему элементу
            this.classList.add('clicked');
            // Удаляем класс clicked через 0.5 секунды (длительность анимации)
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
});
""
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cards = document.querySelectorAll('.Chamber');

    // Открытие модального окна при клике на карточку
    cards.forEach(Chamber => {
        Chamber.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.Chamber');

    cards.forEach(Chamber => {
        Chamber.addEventListener('click', function() {
            // Удаляем класс clicked у всех элементов
            cards.forEach(y => y.classList.remove('clicked'));
            // Добавляем класс clicked к текущему элементу
            this.classList.add('clicked');
            // Удаляем класс clicked через 0.5 секунды (длительность анимации)
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
});
""
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cards = document.querySelectorAll('.Viper');

    // Открытие модального окна при клике на карточку
    cards.forEach(Viper => {
        Viper.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.Viper');

    cards.forEach(Viper => {
        Viper.addEventListener('click', function() {
            // Удаляем класс clicked у всех элементов
            cards.forEach(y => y.classList.remove('clicked'));
            // Добавляем класс clicked к текущему элементу
            this.classList.add('clicked');
            // Удаляем класс clicked через 0.5 секунды (длительность анимации)
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
});





