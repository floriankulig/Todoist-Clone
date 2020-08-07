import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Projects } from "../components/Projects";

beforeEach(cleanup);

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => "INBOX"),
  })),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "🙌 THE OFFICE",
        projectId: "1",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "michael-scott",
      },
    ],
  })),
}));

describe("<Projects />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Success", () => {
    it("renders the projects", () => {
      const { queryByTestId } = render(<Projects />);
      expect(queryByTestId("project-action")).toBeTruthy();
    });

    it("renders the projects and selects an active project using onClick", () => {
      const { queryByTestId } = render(<Projects activeValue="1" />);

      fireEvent.click(queryByTestId("project-action"));
      expect(
        queryByTestId("project-action-parent").classList.contains("active")
      ).toBeTruthy();
    });

    it("renders the projects and selects an active project using onKeyDown", () => {
      const { queryByTestId } = render(<Projects activeValue="1" />);

      fireEvent.keyDown(queryByTestId("project-action"));
      expect(
        queryByTestId("project-action-parent").classList.contains("active")
      ).toBeTruthy();
    });

    it("renders the projects with no active value", () => {
      const { queryByTestId } = render(<Projects activeValue="1" />);

      fireEvent.keyDown(queryByTestId("project-action"));
      expect(
        queryByTestId("project-action-parent").classList.contains(
          "sidebar__project"
        )
      ).toBeTruthy();
    });
  });
});
