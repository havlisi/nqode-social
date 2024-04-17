import classes from './ValidationMessage.module.scss';

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
  return message !== '' && <span className={`${classes['c-validation-message']}`}>{message}</span>;
};

export default ValidationMessage;
