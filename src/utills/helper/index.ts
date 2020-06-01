export const checkGridMaxHeight = () => {
    let maxHeight;
    maxHeight = Math.floor(document.documentElement.clientHeight / 27);
    return maxHeight;
};

export const checkGridMaxWidth = () => {
    let maxWidth;
    maxWidth = Math.floor(document.documentElement.clientWidth / 26);
    return maxWidth;
};

export const randomCells = (
    obj: GlobalState.CellItemType,
    state: StateType
) => {
    if (Math.random() > state.randomIndex) {
        return { ...obj, isClicked: true };
    }
    return obj;
};

export const setLogIn = (name: string) => {
    localStorage.setItem('name', name);
};

export const logOut = () => {
    localStorage.removeItem('name');
};

export const getLogIn = () => {
    return localStorage.getItem('name');
};

export const isLoggedIn = () => {
    const checkIsLoggedIn = localStorage.getItem('name');

    return !!checkIsLoggedIn;
};
