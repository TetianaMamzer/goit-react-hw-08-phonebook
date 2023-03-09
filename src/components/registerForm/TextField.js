import css from './textFiled.module.css';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const TextField = ({label, handleChange, ...props}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={css.wrapper}>
      <label htmlFor={id} className={css.label}>{label}</label>
      <input className={css.input} id={id} onChange={handleChange} {...props} />
    </div>
  )
}

export default TextField;