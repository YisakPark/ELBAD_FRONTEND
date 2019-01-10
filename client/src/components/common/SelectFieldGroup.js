import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectFieldGroup = ({
  name,
  placeholder,
  values,
  contents,
  label,
  error,
  info,
  onChange,
  disabled,
  id,
  selected_value
}) => {
  if (values.length !== contents.length) {
    console.log("ERRORS in SelectGroup rendering");
    return <div />;
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className={classnames("form-control", {
          "is-invalid": error
        })}
        name={name}
        onChange={onChange}
        disabled={disabled}
        value={selected_value}
      >
        <option value="" key="0">
          {placeholder}
        </option>
        {values.map((value, index) => {
          return (
            <option value={value} key={index + 1}>
              {contents[index]}
            </option>
          );
        })}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  contents: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  id: PropTypes.string.isRequired,
  selected_value: PropTypes.string
};

SelectFieldGroup.defaultProps = {
  type: "text"
};

export default SelectFieldGroup;
