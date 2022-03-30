import { store } from "../reduxCode/store";

declare global {
    interface Window {
        parentRedux?: typeof store;
    }
}

export function exposeReduxStore(): void {
    if (window.opener) {
        throw new Error("Cannot expose redux store in a child window!");
    }
    window.parentRedux ??= store;
}

export function getParentReduxStore(): typeof store {
    if (!window.opener) {
        throw new Error("Must have access to parent window!");
    }
    const parentRedux = window.opener?.parentRedux;
    if (!parentRedux) {
        throw new Error("Could not find the parent redux store. Was it exposed in the parent app?");
    }
    return parentRedux;
}