import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({
  adapter: new Adapter(),
});

describe("<BurgerBuilder/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredient={() => {}} />);
  });

  it("should render buildControls when receving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });

    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});

// describe("<NavigationItems />", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow();
//   });

//   it("should render two <NavigationItems/> elements if not autneticated", () => {
//     expect(wrapper.find()).toHaveLength(2);
//   });
// });
