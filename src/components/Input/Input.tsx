import { InputHTMLAttributes, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./input.css";


export const Input = ({ type, name, placeholder, value, onChange, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
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
            data-testid="toggle-password-button"
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