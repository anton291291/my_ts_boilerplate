export const splitCells = (state) => {
    const firstElems = [];
    const lastElems = [];
    const upRow = [];
    const bottomRow = [];

    for (
        let index = 0;
        index < state.cells.length;
        index = index + state.axis.x
    ) {
        firstElems.push(index);
    }

    for (
        let index = state.axis.x - 1;
        index < state.cells.length;
        index = index + state.axis.x
    ) {
        lastElems.push(index);
    }

    for (let index = 1; index < state.axis.x - 1; index++) {
        upRow.push(index);
    }

    for (
        let index = state.cells.length - state.axis.x + 1;
        index < state.cells.length - 1;
        index++
    ) {
        bottomRow.push(index);
    }

    return [firstElems, lastElems, upRow, bottomRow];
};

export const checkLastElems = (obj, index, arr, lastElems, state) => {
    if (obj.index === lastElems[0]) {
        let count = 0;
        arr[index - 1].isClicked === true && count++;
        arr[index + state.axis.x].isClicked === true && count++;
        arr[index + state.axis.x - 1].isClicked === true && count++;

        if (obj.isClicked === false && count === 3) {
            return { ...obj, isClicked: true };
        } else if (obj.isClicked === true && (count == 2 || count == 3)) {
            return obj;
        } else {
            return { ...obj, isClicked: false };
        }
    } else if (obj.index === lastElems[lastElems.length - 1]) {
        let count = 0;
        arr[index - 1].isClicked === true && count++;
        arr[index - state.axis.x].isClicked === true && count++;
        arr[index - state.axis.x - 1].isClicked === true && count++;

        if (obj.isClicked === false && count === 3) {
            return { ...obj, isClicked: true };
        } else if ((obj.isClicked === true && count == 2) || count == 3) {
            return obj;
        } else {
            return { ...obj, isClicked: false };
        }
    } else {
        let count = 0;
        arr[index - state.axis.x].isClicked === true && count++;
        arr[index - state.axis.x - 1].isClicked === true && count++;
        arr[index - 1].isClicked === true && count++;
        arr[index + state.axis.x].isClicked === true && count++;
        arr[index + state.axis.x - 1].isClicked === true && count++;

        if (obj.isClicked === false && count == 3) {
            return { ...obj, isClicked: true };
        } else if ((obj.isClicked === true && count == 2) || count == 3) {
            return obj;
        } else {
            return { ...obj, isClicked: false };
        }
    }
};

export const checkFirstElems = (obj, index, arr, firstElems, state) => {
    if (obj.index === firstElems[0]) {
        let count = 0;
        arr[index + 1].isClicked === true && count++;
        arr[index + state.axis.x].isClicked === true && count++;
        arr[index + state.axis.x + 1].isClicked === true && count++;

        if (obj.isClicked === false && count === 3) {
            return { ...obj, isClicked: true };
        } else if (obj.isClicked === true && (count == 2 || count == 3)) {
            return obj;
        } else {
            return { ...obj, isClicked: false };
        }
    } else if (obj.index === firstElems[firstElems.length - 1]) {
        let count = 0;
        arr[index + 1].isClicked === true && count++;
        arr[index - state.axis.x].isClicked === true && count++;
        arr[index - state.axis.x + 1].isClicked === true && count++;

        if (obj.isClicked === false && count === 3) {
            return { ...obj, isClicked: true };
        } else if (obj.isClicked === true && (count == 2 || count == 3)) {
            return obj;
        } else {
            return { ...obj, isClicked: false };
        }
    } else {
        let count = 0;
        arr[index - state.axis.x].isClicked === true && count++;
        arr[index - state.axis.x + 1].isClicked === true && count++;
        arr[index + 1].isClicked === true && count++;
        arr[index + state.axis.x].isClicked === true && count++;
        arr[index + state.axis.x + 1].isClicked === true && count++;

        if (obj.isClicked === false && count == 3) {
            return { ...obj, isClicked: true };
        } else if (obj.isClicked === true && (count == 2 || count == 3)) {
            return obj;
        } else {
            return { ...obj, isClicked: false };
        }
    }
};

export const checkBottomRow = (obj, index, arr, state) => {
    let count = 0;
    arr[index - 1].isClicked === true && count++;
    arr[index + 1].isClicked === true && count++;
    arr[index - state.axis.x].isClicked === true && count++;
    arr[index - state.axis.x - 1].isClicked === true && count++;
    arr[index - state.axis.x + 1].isClicked === true && count++;

    if (obj.isClicked === false && count == 3) {
        return { ...obj, isClicked: true };
    } else if (obj.isClicked === true && (count == 2 || count == 3)) {
        return obj;
    } else {
        return { ...obj, isClicked: false };
    }
};

export const checkUpRow = (obj, index, arr, state) => {
    let count = 0;
    arr[index - 1].isClicked === true && count++;
    arr[index + 1].isClicked === true && count++;
    arr[index + state.axis.x].isClicked === true && count++;
    arr[index + state.axis.x - 1].isClicked === true && count++;
    arr[index + state.axis.x + 1].isClicked === true && count++;

    if (obj.isClicked === false && count == 3) {
        return { ...obj, isClicked: true };
    } else if (obj.isClicked === true && (count == 2 || count == 3)) {
        return obj;
    } else {
        return { ...obj, isClicked: false };
    }
};

export const checkRestElems = (obj, index, arr, state) => {
    let count = 0;
    arr[index - state.axis.x - 1].isClicked === true && count++;
    arr[index - state.axis.x].isClicked === true && count++;
    arr[index - state.axis.x + 1].isClicked === true && count++;
    arr[index - 1].isClicked === true && count++;
    arr[index + 1].isClicked === true && count++;
    arr[index + state.axis.x - 1].isClicked === true && count++;
    arr[index + state.axis.x].isClicked === true && count++;
    arr[index + state.axis.x + 1].isClicked === true && count++;

    if (obj.isClicked === false && count == 3) {
        return { ...obj, isClicked: true };
    } else if (obj.isClicked === true && (count == 2 || count == 3)) {
        return obj;
    } else {
        return { ...obj, isClicked: false };
    }
};


export const simulateLife = (obj, index, arr,state) => {
    const [firstElems, lastElems, upRow, bottomRow] = splitCells(state);

    if (lastElems.includes(obj.index)) {
        return checkLastElems(obj, index, arr, lastElems, state);
    } else if (firstElems.includes(obj.index)) {
        return checkFirstElems(obj, index, arr, firstElems, state);
    } else if (upRow.includes(obj.index)) {
        return checkUpRow(obj, index, arr, state);
    } else if (bottomRow.includes(obj.index)) {
        return checkBottomRow(obj, index, arr, state);
    } else {
        return checkRestElems(obj, index, arr, state);
    }
};