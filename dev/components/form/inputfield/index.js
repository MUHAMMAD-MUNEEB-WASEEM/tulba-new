import PropTypes from "prop-types";

const InputField = (props) => {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.labeluse} className="labels">
          {props.label}{" "}
          {props.desc && <span className="desc-input">{props.desc}</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={props.labeluse}
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          value={props.vlaue}
          autoFocus={false}
          bordered={"false"}
          className="inputfield"
          style={{
            height: props.height,
            width: props.width,
            border: props.border,
          }}
          required
        />
        {props.icons ? props.icons : ""}
      </div>
    </div>
  );
};
InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.array,
  onChange: PropTypes.any,
  minLength: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  InputTextClass: PropTypes.string,
  prefix: PropTypes.any,
  id: PropTypes.string,
  icons: PropTypes.any,
  label: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  labeluse: PropTypes.string,
  desc: PropTypes.string,
};
export default InputField;
