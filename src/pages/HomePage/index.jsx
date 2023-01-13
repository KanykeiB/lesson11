import React from "react";
import PromoBlock from "../../kit/components/promo-block";
import AboutUsCard from "../../kit/components/about-us-card";

import styles from './style.module.scss'
import Diamond from '../../kit/shared/images/Diamond.png'


const HomePage = () => {
  return (
    <div className={styles['promo-block']}>
      <PromoBlock />
      <div className={styles['main-info']}>
        <AboutUsCard title={'About us'} icon={Diamond}>
          Hi 1
        </AboutUsCard>
        <AboutUsCard  title={'Second About Us'} icon={Diamond}>
          Hi 2
        </AboutUsCard>
        <AboutUsCard title={'Third About Us'} icon={Diamond}>
          Hi 3
        </AboutUsCard>
      </div>
    </div>
  )
}

export default HomePage