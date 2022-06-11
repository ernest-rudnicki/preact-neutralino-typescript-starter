import { h } from "preact";
import { shallow } from "enzyme";

import Button from "components/Button/Button";

describe("Button rendering", () => {
  test("Standard button renders a label", () => {
    const context = shallow(<Button />);
    expect(context.find("button").text()).toBe("Hello world");
  });
});
