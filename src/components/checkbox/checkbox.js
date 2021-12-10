import './checkbox.scss';

export const Checkbox = ({ task }) => {
  return (
    <label className="CheckboxContainer">
      <input type="checkbox" hidden />
      <div className="Checkbox" />
      <span className="Text">{task}</span>
    </label>
  );
};
