type ArgsType = (
    obj: GlobalState.CellItemType,
    index: number,
    arr: Array<GlobalState.CellItemType>,
    state: StateType,
    rightColumn?: Array<number>,
    leftColumn?: Array<number>
) => GlobalState.CellItemType;

export const splitCells = (state: StateType): Array<Array<number>> => {
    const leftColumn: Array<number> = [];
    const rightColumn: Array<number> = [];
    const upRow: Array<number> = [];
    const bottomRow: Array<number> = [];

    for (
        let index = 0;
        index < state.cells.length;
        index = index + state.axis.x
    ) {
        leftColumn.push(index);
    }

    for (
        let index = state.axis.x - 1;
        index < state.cells.length;
        index = index + state.axis.x
    ) {
        rightColumn.push(index);
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

    return [leftColumn, rightColumn, upRow, bottomRow];
};

export const checkRulesForRightColumn: ArgsType = (
    obj,
    index,
    arr,
    state,
    rightColumn
) => {
    if (obj.index === rightColumn[0]) {
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
    } else if (obj.index === rightColumn[rightColumn.length - 1]) {
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

export const checkRulesForLeftColumn: ArgsType = (
    obj,
    index,
    arr,
    state,
    leftColumn
) => {
    if (obj.index === leftColumn[0]) {
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
    } else if (obj.index === leftColumn[leftColumn.length - 1]) {
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

export const checkBottomRow: ArgsType = (obj, index, arr, state) => {
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

export const checkUpRow: ArgsType = (obj, index, arr, state) => {
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

export const checkRestElems: ArgsType = (obj, index, arr, state) => {
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

export const simulateLife: ArgsType = (obj, index, arr, state) => {
    const [leftColumn, rightColumn, upRow, bottomRow] = splitCells(state);

    if (rightColumn.includes(obj.index)) {
        return checkRulesForRightColumn(obj, index, arr, state, rightColumn);
    } else if (leftColumn.includes(obj.index)) {
        return checkRulesForLeftColumn(obj, index, arr, state, leftColumn);
    } else if (upRow.includes(obj.index)) {
        return checkUpRow(obj, index, arr, state);
    } else if (bottomRow.includes(obj.index)) {
        return checkBottomRow(obj, index, arr, state);
    } else {
        return checkRestElems(obj, index, arr, state);
    }
};
