declare namespace GlobalState {
    type CellItemType = { index: number; isClicked: boolean };

    type AxisType = {
        axis: {
            x: number;
            y: number;
        };
    };

    type CellType = {
        cells: Array<CellItemType>;
    };

    type PlayType = {
        isPlay: boolean;
        speed: number;
        randomIndex: number;
        gen: number;
    };

    type FormType = {
        name: string;
    };
}

type StateType = GlobalState.AxisType &
    GlobalState.CellType &
    GlobalState.PlayType &
    GlobalState.FormType;

type GridContextType = {
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};
