import React from 'react';

import { BlogPostsCard } from '../../components/blog/card';
import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import img1 from './post-1.jpg';
import img2 from './post-2.jpg';
import img3 from './post-3.jpg';
import img4 from './post-4.jpg';
import styles from './posts-grid.module.css';

const Posts = () => (
  <Container className={styles.wrapper}>
    <Breadcrumbs>
      <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
      <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
    </Breadcrumbs>
    <h3 className="fancyUnderlineText sectionTitleNew text-center">
      Poslední <span>Články</span>
    </h3>
    {/* <CategoriesFilterPanel /> */}
    <div className={styles.postsGrid}>
      <BlogPostsCard
        img={img1}
        date="20.04.21"
        title="Chia semínka. Super potravina nebo hype?"
        category="Všechno"
        link="/blog/post-1"
      />
      <BlogPostsCard
        img={img2}
        date="20.05.21"
        title="Detox. Ano nebo ne?"
        category="Všechno"
        link="/blog/post-2"
      />
      <BlogPostsCard
        img={img3}
        date="20.05.21"
        title="S vodou je spojeno hodně mýtů. Co je vhodné  pít, kdy a v jakém množství?"
        category="Všechno"
        link="/blog/post-3"
      />
      <BlogPostsCard
        img={img4}
        date="31.05.21"
        title="Krabičkování. Proč je krabičková dieta snadné řešení."
        category="Všechno"
        link="/blog/post-4"
      />
    </div>
  </Container>
)

export default Posts
