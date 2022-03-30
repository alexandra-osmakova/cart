import Button, { IButtonProps } from "./Button";
import { ButtonType } from "../../../interface";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultButtonLabel = "label";

const defaultComponentProps: IButtonProps = {
    type: ButtonType.DEFAULT,
    label: defaultButtonLabel,
};

test("do not renders button without label and icon", () => {
    const componentProps = {
        ...defaultComponentProps,
        label: undefined,
    };
    render(<Button {...componentProps} />);

    expect(screen.queryByRole('button')).toBeFalsy();
});

test("renders button with label", () => {
    render(<Button {...defaultComponentProps} />);
    const element = screen.getByRole('button');

    expect(element).toBeTruthy();
    expect(element).toHaveTextContent(defaultButtonLabel);
});

test("renders button with icon", () => {
    const componentProps = {
        ...defaultComponentProps,
        icon: <div data-testid="test-icon"></div>,
    };
    render(<Button {...componentProps} />);
    const element = screen.getByRole('button');
    const icon = screen.getByTestId('test-icon');

    expect(element).toBeTruthy();
    expect(icon).toBeTruthy();
});

test("renders button with exact button type", () => {
    const componentProps = {
        type: ButtonType.SUBMIT,
        label: "button label",
    };
    render(<Button {...componentProps} />);
    const element = screen.getByRole('button');

    expect(element).toBeTruthy();
    expect(element).toHaveAttribute("type", componentProps.type);
});

test("renders button disabled", () => {
    const componentProps = {
        ...defaultComponentProps,
        label: "button label",
        disabled: true,
    };
    const { rerender } = render(<Button {...componentProps} />);
    const element = screen.getByRole('button');

    expect(element).toBeTruthy();
    expect(element).toBeDisabled();

    const updatedProps = { ...componentProps, disabled: false };

    rerender(<Button {...updatedProps} />);
    expect(element).not.toBeDisabled();
});

test("renders button with formId", () => {
    const componentProps = {
        type: ButtonType.SUBMIT,
        form: "formId",
        label: "button label",
    };
    render(<Button {...componentProps} />);
    const element = screen.getByRole('button');

    expect(element).toBeTruthy();
    expect(element).toHaveAttribute("form", componentProps.form);
});

test("calls onClick function", () => {
    const componentProps = {
        ...defaultComponentProps,
        onClick: jest.fn(),
        label: "button label",
    };
    render(<Button {...componentProps} />);
    const element = screen.getByRole('button');

    expect(element).toBeTruthy();
    userEvent.click(element);
    expect(componentProps.onClick).toHaveBeenCalledTimes(1);
});
