import createMyElement from './createElement.js';

//создаем article
const createArticleEats = (order) => {
    const article = createMyElement('article', {
        className: 'order-result-article-eats',
        id: 'order-article-eats',
    });
    // article.dataset.id = orderes['id'] || '';

    //  <ul class="order-eats-list">
    const ulDet = createMyElement('ul', {
        className: 'order-eats-list',
    });
    //  <li class="order-eats-item">
    for (let i = 0; i < order.length; i++) {
        const liDet = createMyElement('li', {
            className: 'order-eats-item',
        });
        const spanDetCap = createMyElement('span', {
            className: 'order-eats-span order-eats-span__cap',
            textContent: order[i]['title'],
        });
        const spanDetDot = createMyElement('span', {
            className: 'order-eats-span order-eats-span__dot',

        });
        const spanDetCount = createMyElement('span', {
            className: 'order-eats-span order-eats-span__count',
            textContent: order[i]['count'] + ' шт',
        });
        const spanDetprice = createMyElement('span', {
            className: 'order-eats-span order-eats-span__price',
            textContent: order[i]['price'],
        });

        liDet.append(spanDetCap, spanDetDot, spanDetCount, spanDetprice);

        ulDet.append(liDet);
    };

    article.append(ulDet);
    return article;
};

export default createArticleEats;