import React from 'react';

import { Container } from '../components/container';
import { Review } from '../components/review';

const ReviewsPage = () => {
  return (
    <section className="section">
      <Container isWide={true}>
        {/* тут заголовок */}
        {/* фильтры из кнопок */}
        {/* ниже добавил 1 ревью, который надо стилизовать, и наверно какой-то общий враппер надо добавить, через который коллекция отзывов будет выстраиваться в сетку */}
        <Review text="lorem ipsum" />
      </Container>
    </section>
  )
}

export default ReviewsPage
