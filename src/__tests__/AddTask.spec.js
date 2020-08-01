import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { AddTask } from "../components/AddTask";
import { useSelectedProjectValue } from "../context";

beforeEach(cleanup);

jest.mock("../context", () => ({
    useSelectedProjectValue: jest.fn(() => ({ selectedProject: 1 })),
    useProjectsValue: jest.fn(() => ({ projects: [] })),
}));

jest.mock("../firebase", () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve("Never mock firebase")),
            })),
        })),
    },
}));

describe("<AddTask />", () => {
    afterEach(() => jest.clearAllMocks());

    describe("Success", () => {

        it("renders the <AddTask /> quick overlay", () => {
            const setShowQuickAddTask = jest.fn();

            const { queryByTestId } = render(
                <AddTask
                    showAddTaskMain
                    shouldShowMain={false}
                    showQuickAddTask
                    setShowQuickAddTask={setShowQuickAddTask}
                />
            );

            expect(queryByTestId("quick-add-task")).toBeTruthy();
        });

        it("renders the <AddTask /> main showable when clicked", () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId("show-main-action"));
            expect(queryByTestId("add-task-main")).toBeTruthy();
        });

        it("renders the <AddTask /> project overlay when clicked", () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId("show-main-action"))
            expect(queryByTestId("add-task-main")).toBeTruthy();

            fireEvent.click(queryByTestId("show-project-overlay"));
            expect(queryByTestId("project-overlay")).toBeTruthy();
        });

        it("renders the <AddTask /> task date overlay when clicked", () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId("show-main-action"))
            expect(queryByTestId("add-task-main")).toBeTruthy();

            fireEvent.click(queryByTestId("show-task-date-overlay"));
            expect(queryByTestId("task-date-overlay")).toBeTruthy();
        });

        it("renders the <AddTask /> main when cancel is clicked", () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId("show-main-action"))
            expect(queryByTestId("add-task-main")).toBeTruthy();

            fireEvent.click(queryByTestId("add-task-main-cancel"));
            expect(queryByTestId("add-task-main")).toBeFalsy();
        });

        it("renders the <AddTask /> for quick add task and then clicks cancel", () => {
            const showQuickAddTask = true;
            const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);

            const { queryByTestId } = render(
                <AddTask
                    setShowQuickAddTask={setShowQuickAddTask}
                    showQuickAddTask={true}
                />
            );

            fireEvent.click(queryByTestId("show-main-action"));
            expect(queryByTestId("add-task-main")).toBeTruthy()

            fireEvent.click(queryByTestId("add-task-quick-cancel"));
            expect(setShowQuickAddTask).toHaveBeenCalled()
        });

        //WROITE THE NEXT FOCKING TEST AT 5:39:49
    });
});
