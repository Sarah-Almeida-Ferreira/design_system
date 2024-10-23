import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute | undefined;
  name: string;
  placeholder: string;
  value: string;
}

export const Input = ({ type, name, placeholder, value, onChange, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-field">
      <div className="input-wrapper">
        <input
          id={name}
          className="input"
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="toggle-password"
            onClick={handleTogglePassword}
          >
            {
              showPassword ?
                <FaEyeSlash /> :
                <FaEye />
            }
          </button>
        )}
      </div>
    </div>
  );
};