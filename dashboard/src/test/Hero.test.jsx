import React from "react";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend/except';
import Hero from "../Landing_Page/home/Hero.jsx"
//Test Suite
describe('Hero Component',()=>{
test('render hero image',()=>{
render(<Hero/>);
const heroImg = screen.getByAltText('Hero Image');
expect(heroImg).toBeInTheDocument();
});
});