import css from './registerForm.module.css';
import useForm from 'hooks/useForm';
import initialStateForm from './initialStateForm';
import TextField from './TextField';
import Button from './RegisterButton';


const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateForm,
    onSubmit,
  });

  const {name, email, password} = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={name} onChange={handleChange} type='text' required name='name' label='Name' placeholder='User name'/>
      <TextField value={email} onChange={handleChange} type='email' required name='email' label='Email' placeholder='User email'/>
      <TextField value={password} onChange={handleChange} type='password' required name='password' label='Password' placeholder='User password'/>
      <Button type='submit'>Register</Button>
    </form>
  );
};
export default RegisterForm;
