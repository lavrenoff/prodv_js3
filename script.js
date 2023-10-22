// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

let reviews = [];
loadReviews();

const btn = document.getElementById("review__btn");

btn.addEventListener("click", () => {
    const reviewInput = document.getElementById("review__input");
    const reviewText = document.getElementById("review__txt");

    // let max = 0;
    // if (reviews.length > 0) {
    //     max =
    //         Math.max.apply(
    //             null,
    //             reviews.map((item) => item.id)
    //         ) + 1;
    // } else {
    //     max = 0;
    // }

    const review = {
        // id: max,
        product: reviewInput.value,
        text: reviewText.value,
    };

    reviewInput.value = "";
    reviewText.value = "";

    reviews.push(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));
    loadReviews();
});

function loadReviews() {
    if (localStorage.getItem("reviews"))
        reviews = JSON.parse(localStorage.getItem("reviews"));
    showReviews();
}

function deleteReview(key) {
    reviews.splice(key, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    loadReviews();
}

function showReviews() {
    let commentField = document.getElementById("review__items");
    let out = "";
    let count = 0;
    reviews.forEach(function (item) {
        out += `<div class="review__item"><p class="name" role="alert">${item.product}</p>`;
        out += `<p class="comment" role="alert">${item.text}</p><button class='review__btndel' onclick="deleteReview(${count});">Удалить</button></div>`;
        count++;
    });
    commentField.innerHTML = out;
}
