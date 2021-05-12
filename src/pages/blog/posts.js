import React from 'react';

import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import { BlogPostsCard } from './card';
import imgPlaceholder from './card/blog-1-placeholder.jpg';
import { CategoriesFilterPanel } from './categories-filter-panel';
import styles from './posts-grid.module.css';

const Posts = () => (
  <Container>
    <Breadcrumbs>
      <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
      <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
    </Breadcrumbs>
    <h3 className="fancyUnderlineText sectionTitleNew text-center">
      Poslední <span>Články</span>
    </h3>
    <CategoriesFilterPanel />
    <div className={styles.postsGrid}>
      <BlogPostsCard
        img={imgPlaceholder}
        date="20.04.21"
        title="RECEPTY: INSPIRACE Z PROGRAMU PRO ZDRAVÍ"
        category="RECEPTY"
      />
      <BlogPostsCard
        img={imgPlaceholder}
        date="20.04.21"
        title="RECEPTY: INSPIRACE Z PROGRAMU PRO ZDRAVÍ"
        category="RECEPTY"
      />
      <BlogPostsCard
        img={imgPlaceholder}
        date="20.04.21"
        title="RECEPTY: INSPIRACE Z PROGRAMU PRO ZDRAVÍ"
        category="RECEPTY"
      />
    </div>
  </Container>
)

export default Posts
