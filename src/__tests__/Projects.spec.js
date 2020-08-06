// import React from "react";
// import { render, cleanup, fireEvent } from "@testing-library/react";
// import { Projects } from "../components/Projects";

// beforeEach(cleanup);

// jest.mock("../context", () => ({
//     useSelectedProjectsValue: jest.fn(() => ({
//         selectedProject: jest.fn(() => "INBOX")
//     })),
//     useProjectsValue: jest.fn(() => ({
//         projects: [
//             {
//                 name: "🙌 THE OFFICE",
//                 projectId: "1",
//                 userId: "jlIFXIwyAL3tzHMtzRbw",
//                 docId: "michael-scott",
//             },
//         ],
//     })),
// }));

// describe("<ProjectOverlay", () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     describe("Success", () => {
//         it("renders the projects", () => {
//             const { queryByTestId } = render(<Projects />);

//             expect(queryByTestId("project-action")).toBeTruthy();
//         });
//     });
// });
