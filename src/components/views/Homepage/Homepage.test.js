import React from "react";
import { shallow } from "enzyme";
import { HomepageComponent } from "./Homepage";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Component Homepage", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <Provider store={store}>
        <HomepageComponent />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
