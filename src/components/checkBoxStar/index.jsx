import { FaStar } from 'react-icons/fa';
import { StyledCheckbox } from './styles';

export function CheckboxStar({ isChecked, onChange }) {
  return (
    <StyledCheckbox $isChecked={isChecked} onClick={onChange}>
      <FaStar />
    </StyledCheckbox>
  );
};

