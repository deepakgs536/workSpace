import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    workspaceName: "",
    designation: "",
    feedbackStructureSelected: "Only reporting managers can give feedback",
    selected: {
        reportingTo: {
            status: true,
            message: "Only reporting managers can give feedback",
        },
        peerToPeer: {
            status: false,
            message: "Team members can give feedback to another team member except the reporting manager",
        },
        degree: {
            status: false,
            message: "Team members can give feedback to another team member including the reporting manager",
        },
    },
};

const UserSlice = createSlice({
    name: "userdetail",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserPassword: (state, action) => {
            state.password = action.payload;
        },
        setWorkspaceName: (state, action) => {
            state.workspaceName = action.payload;
        },
        setDesignation: (state, action) => {
            state.designation = action.payload;
        },
        setFeedbackStructure: (state, action) => {
            const ariaLabel = action.payload;
            // Reset all statuses to false, and activate the selected one
            state.selected = {
                reportingTo: { ...state.selected.reportingTo, status: false },
                peerToPeer: { ...state.selected.peerToPeer, status: false },
                degree: { ...state.selected.degree, status: false },
                [ariaLabel]: { ...state.selected[ariaLabel], status: true },
            };
            // Update feedbackStructureSelected
            state.feedbackStructureSelected = state.selected[ariaLabel]?.message || "";
        },
    },
});

export const { setUserName, setUserEmail, setUserPassword, setWorkspaceName, setDesignation, setFeedbackStructure } =
    UserSlice.actions;
export default UserSlice.reducer;
