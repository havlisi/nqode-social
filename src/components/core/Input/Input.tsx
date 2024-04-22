import ValidationMessage from '../ValidationMessage/ValidationMessage';
import classes from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  error?: string;
  placeholder: string;
  value: string | number;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  error,
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    <div className={`${classes['c-input']}`}>
      <label>{label}</label>
      <div>
        <input
          className={`${classes['c-input__field']} ${error ? classes['c-input__field--error'] : ''}`}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error ? <ValidationMessage message={error} /> : <></>}
      </div>
    </div>
  );
};

export default Input;
