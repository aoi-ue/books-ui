import React from "react";
import Books from "./Books";
import ShallowRenderer from "react-test-renderer/shallow";


it("renders correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Books />);

  const instance = renderer.getMountedInstance();
  instance.componentDidMount();
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it("renders title and booklist after component mounts", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        title: "happy feet",
        _id: "1234"
      }
    ])
  );
});
