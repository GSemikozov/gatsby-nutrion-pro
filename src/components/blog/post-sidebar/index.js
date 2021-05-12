import React from 'react';

import imgPlaceholder from '../../../components/blog/card/blog-1-placeholder.jpg';
import styles from './post-sidebar.module.css';

export const PostSidebar = () => (
  <div className={styles.postSidebar}>
    <div className={styles.postSidebarTitle}>Top 5 članků</div>
    <div>
      <a href="#" className={styles.postSidebarCard}>
        <div>
          <img
            src={imgPlaceholder}
            className={styles.postSidebarCardImg}
            alt="img"
          />
        </div>
        <div className={styles.postSidebarCardBody}>
          <div className={styles.postSidebarCardTitle}>
            RECEPTY: INSPIRACE Z PROGRAMU PRO ZDRAVÍ
          </div>
          <div className={styles.postSidebarCardDate}>20.04.21</div>
        </div>
      </a>
      <a href="#" className={styles.postSidebarCard}>
        <div>
          <img
            src={imgPlaceholder}
            className={styles.postSidebarCardImg}
            alt="img"
          />
        </div>
        <div className={styles.postSidebarCardBody}>
          <div className={styles.postSidebarCardTitle}>
            RECEPTY: INSPIRACE Z PROGRAMU PRO ZDRAVÍ
          </div>
          <div className={styles.postSidebarCardDate}>20.04.21</div>
        </div>
      </a>
      <a href="#" className={styles.postSidebarCard}>
        <div>
          <img
            src={imgPlaceholder}
            className={styles.postSidebarCardImg}
            alt="img"
          />
        </div>
        <div className={styles.postSidebarCardBody}>
          <div className={styles.postSidebarCardTitle}>
            RECEPTY: INSPIRACE Z PROGRAMU PRO ZDRAVÍ
          </div>
          <div className={styles.postSidebarCardDate}>20.04.21</div>
        </div>
      </a>
    </div>
  </div>
)
