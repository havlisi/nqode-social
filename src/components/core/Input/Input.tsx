import classes from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  placeholder: string;
  value: string | number;
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, name, value, onChange }) => {
  return (
    <div className={`${classes['c-input']}`}>
      <label>{label}</label>
      <div>
        <input
          className={`${classes['c-input__field']}`}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
