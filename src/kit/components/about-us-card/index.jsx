import React from 'react';
import styles from "./style.module.scss";
import styled from 'styled-components'

const StyledIcon =styled.span`
background: ${props=>`url(${props.icon}) center center/contain no-repeat`}
`
const AboutUsCard = (props) => {
  const{
    icon, 
    title, 
    children
  } = props
  return (
    <div className={styles['about-us-card']}>
      <StyledIcon className={styles.icon} icon={icon} />
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>
        {children}
      </p>
    </div>
  );
};

export default AboutUsCard;