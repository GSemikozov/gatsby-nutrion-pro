import React from 'react';

import { Container } from '../components/container';
import { Review } from '../components/review';

const ReviewsPage = () => {
  return (
    <section className="section">
      <Container isWide={true}>
        <Review text="lorem ipsum" />
      </Container>
    </section>
  )
}

export default ReviewsPage
