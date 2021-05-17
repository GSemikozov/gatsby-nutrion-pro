import React from 'react';

import imgPlaceholder from '../../../components/blog/card/blog-1-placeholder.jpg';
import styles from './post-sidebar.module.css';

export const PostSidebar = () => (
  <div className={styles.postSidebar}>
    <div className={styles.postSidebarTitle}>Top 5 članků</div>
    <div>
      <a href="/blog/post-1" className={styles.postSidebarCard}>
        <div>
          <img
            src={imgPlaceholder}
            className={styles.postSidebarCardImg}
            alt="img"
          />
        </div>
        <div className={styles.postSidebarCardBody}>
          <div className={styles.postSidebarCardTitle}>
            Chia semínka. Super potravina nebo hype?
          </div>
          <div className={styles.postSidebarCardDate}>20.05.21</div>
        </div>
      </a>
      <a href="/blog/post-2" className={styles.postSidebarCard}>
        <div>
          <img
            src={imgPlaceholder}
            className={styles.postSidebarCardImg}
            alt="img"
          />
        </div>
        <div className={styles.postSidebarCardBody}>
          <div className={styles.postSidebarCardTitle}>Detox. Ano nebo ne?</div>
          <div className={styles.postSidebarCardDate}>20.05.21</div>
        </div>
      </a>
      <a href="/blog/post-3" className={styles.postSidebarCard}>
        <div>
          <img
            src={imgPlaceholder}
            className={styles.postSidebarCardImg}
            alt="img"
          />
        </div>
        <div className={styles.postSidebarCardBody}>
          <div className={styles.postSidebarCardTitle}>
            S vodou je spojeno hodně mýtů. Co je vhodné pít, kdy a v jakém
            množství?
          </div>
          <div className={styles.postSidebarCardDate}>20.04.21</div>
        </div>
      </a>
    </div>
  </div>
)
