import { getAllByRole, render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",()=>{
    it("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument(); 
    });
    
    it("Should load input name inside Contact component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        // Assertion
        expect(button).toBeInTheDocument(); 
    });
    
    it("Should load input name by placeholder inside Contact component", () => {
        render(<Contact />);
    
        const input_name = screen.getByPlaceholderText("name");
        // Assertion
        expect(input_name).toBeInTheDocument(); 
    });
    
    it("Should load 2 input boxes on the Contact",() =>{
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes).toBeInTheDocument();
    })
})