import setIsActive from "./setIsActive";

export const SIDE_MENU_ACTIONS = {
    setIsActive
};

const runSideMenuActions = (actionName, state, payload) => {
    return SIDE_MENU_ACTIONS[actionName](state, payload);
};

export default runSideMenuActions;