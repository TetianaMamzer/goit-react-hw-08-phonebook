import React from 'react';
import { Audio } from 'react-loader-spinner';


import css from './Loader.module.css';


const Loader = ({text}) => {
  return (
<div className={css.loader}>
<Audio
    height="80"
    width="80"
    radius="9"
    color="red"
    ariaLabel="loading"
  />
  <h2 className={css.title}>{text}</h2>
</div>
  )
}

export default Loader;