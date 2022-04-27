import React from "react";
import { shallow } from "enzyme";
import { PostAddComponent } from "./PostAdd";
import { BrowserRouter } from "react-router-dom";

describe("Component PostAdd", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <BrowserRouter>
        <PostAddComponent />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });
});
