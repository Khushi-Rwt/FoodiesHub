import { fireEvent, render } from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name : "Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
}); 

it("Should render Header Component with a cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByRole("Cart (0 items)");
    // const loginButton = screen.getByText("Login");

    expect(cartItems).toBeInTheDocument();
}); 

it("Should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button",{name : "Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name : "LogOut"});

    expect(logoutButton).toBeInTheDocument();
}); 