import React from 'react';

import { BlogPostsCard } from '../../components/blog/card';
import imgPlaceholder from '../../components/blog/card/blog-1-placeholder.jpg';
import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
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
        img={imgPlaceholder}
        date="20.04.21"
        title="Chia semínka. Super potravina nebo hype?"
        category="Všechno"
        link="/blog/post-1"
      />
      <BlogPostsCard
        img={imgPlaceholder}
        date="20.05.21"
        title="Detox. Ano nebo ne?"
        category="Všechno"
        link="/blog/post-2"
      />
      <BlogPostsCard
        img={imgPlaceholder}
        date="20.05.21"
        title="S vodou je spojeno hodně mýtů. Co je vhodné  pít, kdy a v jakém množství?"
        category="Všechno"
        link="/blog/post-3"
      />
    </div>
  </Container>
)

export default Posts
