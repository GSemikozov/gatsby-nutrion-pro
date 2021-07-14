import cx from 'classnames';
import React from 'react';

import { CategoriesFilterPanel } from '../components/blog/categories-filter-panel';
import { Breadcrumbs, BreadcrumbsItem } from '../components/breadcrumbs';
import { Container } from '../components/container';
import { Review } from '../components/review';

const ReviewsPage = () => (
  <Container>
    <Breadcrumbs>
      <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
      <BreadcrumbsItem link="/reviews">Recenze</BreadcrumbsItem>
    </Breadcrumbs>

    <h3 className="fancyUnderlineText sectionTitleNew text-center">
      Všechny <span>recenze</span>
    </h3>

    {/* <CategoriesFilterPanel /> */}
    <Review />
  </Container>
)

export default ReviewsPage
