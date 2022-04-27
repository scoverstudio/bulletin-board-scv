import React from "react";
import { shallow } from "enzyme";
import { PostComponent } from "./Post";
import { BrowserRouter } from "react-router-dom";

describe("Component Post", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <BrowserRouter>
        <PostComponent />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });
});
