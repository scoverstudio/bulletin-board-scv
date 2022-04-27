import React from "react";
import { shallow } from "enzyme";
import { PostEditComponent } from "./PostEdit";
import { BrowserRouter } from "react-router-dom";

describe("Component PostEdit", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <BrowserRouter>
        <PostEditComponent />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });
});
