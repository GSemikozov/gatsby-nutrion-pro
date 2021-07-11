import cx from 'classnames';
import React from 'react';


import { Breadcrumbs, BreadcrumbsItem } from '../components/breadcrumbs';
import { CategoriesFilterPanel } from '../components/blog/categories-filter-panel';
import { FilterBtn } from '../components/blog/categories-filter-panel/index.js';
import { Container } from '../components/container';
import { Review } from '../components/review';

import styles from '../components/blog/categories-filter-panel/categories-filter-panel.module.css';

const ReviewsPage = () => (
  
  <Container >
    <Breadcrumbs>
      <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
      <BreadcrumbsItem link="/reviews">Recenze</BreadcrumbsItem>
    </Breadcrumbs>

    <h3 className="fancyUnderlineText sectionTitleNew text-center">
    Všechny <span>recenze</span>
    </h3>

    <CategoriesFilterPanel>
    <div className={styles.filterPanel}>
      <nav>
        <b>Kategorie:</b>
        <FilterBtn text="Hubnoucí program" isActive={true} />
        <FilterBtn text="Nabírací program" />
        <FilterBtn text="Udržovací program" />
        <FilterBtn text="Office pack" /> 
      </nav>
    </div>
    </CategoriesFilterPanel>

     
             
    


        {/* ниже добавил 1 ревью, который надо стилизовать, и наверно какой-то общий враппер надо добавить, через который коллекция отзывов будет выстраиваться в сетку */}
    <Review />
  </Container>
)


export default ReviewsPage
