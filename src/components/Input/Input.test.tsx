import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Input } from "./Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { afterEach, describe, expect, it} from "vitest";

describe("Input Component", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders the input with the correct attributes", () => {
        render(
            <Input
                type="text"
                name="username"
                placeholder="Enter your username"
                value="testuser"
                onChange={() => { }}
            />
        );

        const inputElement = screen.getByPlaceholderText("Enter your username");
        expect(inputElement).not.toBeNull();
        expect(inputElement.getAttribute("name")).toBe("username");
        expect(inputElement.getAttribute("value")).toBe("testuser");
    });

    it("toggles the password visibility when the button is clicked", () => {
        render(
            <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value="mypassword"
                onChange={() => { }}
            />
        );

        const faEyeLash = render(<FaEyeSlash />)
        const faEye = render(<FaEye />)

        const inputElement = screen.getByPlaceholderText("Enter your password");
        const toggleButton = screen.getByRole("button");

        expect(inputElement.getAttribute("type")).toBe("password");

        fireEvent.click(toggleButton);

        expect(inputElement.getAttribute("type")).toBe("text");
        expect(screen.getByTestId("toggle-password-button").firstChild).toEqual(faEyeLash.baseElement.getElementsByTagName('svg')[0]);

        fireEvent.click(toggleButton);

        expect(inputElement.getAttribute("type")).toBe("password");
        expect(screen.getByTestId("toggle-password-button").firstChild).toEqual(faEye.baseElement.getElementsByTagName('svg')[0]);
    });
});
