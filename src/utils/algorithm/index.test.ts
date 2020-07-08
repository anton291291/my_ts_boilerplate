import { simulateLife } from '.';

describe('algorithm', () => {
    test('test simulateLife left top', () => {
        const input: any = {
            axis: { x: 3, y: 3 },
            cells: [
                { index: 0, isClicked: false },
                { index: 1, isClicked: true },
                { index: 2, isClicked: false },
                { index: 3, isClicked: true },
                { index: 4, isClicked: true },
                { index: 5, isClicked: false },
                { index: 6, isClicked: false },
                { index: 7, isClicked: false },
                { index: 8, isClicked: false }
            ]
        };
        let output = [
            { index: 0, isClicked: true },
            { index: 1, isClicked: true },
            { index: 2, isClicked: false },
            { index: 3, isClicked: true },
            { index: 4, isClicked: true },
            { index: 5, isClicked: false },
            { index: 6, isClicked: false },
            { index: 7, isClicked: false },
            { index: 8, isClicked: false }
        ];

        expect(
            input.cells.map((obj, index, arr) =>
                simulateLife(obj, index, arr, input)
            )
        ).toEqual(output);
    });
    test('test simulateLife left bottom', () => {
        const input: any = {
            axis: { x: 3, y: 3 },
            cells: [
                { index: 0, isClicked: false },
                { index: 1, isClicked: false },
                { index: 2, isClicked: false },
                { index: 3, isClicked: true },
                { index: 4, isClicked: true },
                { index: 5, isClicked: false },
                { index: 6, isClicked: true },
                { index: 7, isClicked: false },
                { index: 8, isClicked: false }
            ]
        };
        let output = [
            { index: 0, isClicked: false },
            { index: 1, isClicked: false },
            { index: 2, isClicked: false },
            { index: 3, isClicked: true },
            { index: 4, isClicked: true },
            { index: 5, isClicked: false },
            { index: 6, isClicked: true },
            { index: 7, isClicked: true },
            { index: 8, isClicked: false }
        ];

        expect(
            input.cells.map((obj, index, arr) =>
                simulateLife(obj, index, arr, input)
            )
        ).toEqual(output);
    });

    test('test simulateLife right bottom', () => {
        const input: any = {
            axis: { x: 3, y: 3 },
            cells: [
                { index: 0, isClicked: false },
                { index: 1, isClicked: false },
                { index: 2, isClicked: false },
                { index: 3, isClicked: false },
                { index: 4, isClicked: true },
                { index: 5, isClicked: true },
                { index: 6, isClicked: false },
                { index: 7, isClicked: true },
                { index: 8, isClicked: false }
            ]
        };
        let output = [
            { index: 0, isClicked: false },
            { index: 1, isClicked: false },
            { index: 2, isClicked: false },
            { index: 3, isClicked: false },
            { index: 4, isClicked: true },
            { index: 5, isClicked: true },
            { index: 6, isClicked: false },
            { index: 7, isClicked: true },
            { index: 8, isClicked: true }
        ];

        expect(
            input.cells.map((obj, index, arr) =>
                simulateLife(obj, index, arr, input)
            )
        ).toEqual(output);
    });
    test('test simulateLife center when true', () => {
        const input: any = {
            axis: { x: 3, y: 3 },
            cells: [
                { index: 0, isClicked: true },
                { index: 1, isClicked: false },
                { index: 2, isClicked: true },
                { index: 3, isClicked: false },
                { index: 4, isClicked: true },
                { index: 5, isClicked: false },
                { index: 6, isClicked: true },
                { index: 7, isClicked: false },
                { index: 8, isClicked: true }
            ]
        };
        let output = [
            { index: 0, isClicked: false },
            { index: 1, isClicked: true },
            { index: 2, isClicked: false },
            { index: 3, isClicked: true },
            { index: 4, isClicked: false },
            { index: 5, isClicked: true },
            { index: 6, isClicked: false },
            { index: 7, isClicked: true },
            { index: 8, isClicked: false }
        ];

        expect(
            input.cells.map((obj, index, arr) =>
                simulateLife(obj, index, arr, input)
            )
        ).toEqual(output);
    });
    test('test simulateLife center when false', () => {
        const input: any = {
            axis: { x: 3, y: 3 },
            cells: [
                { index: 0, isClicked: true },
                { index: 1, isClicked: true },
                { index: 2, isClicked: true },
                { index: 3, isClicked: false },
                { index: 4, isClicked: false },
                { index: 5, isClicked: false },
                { index: 6, isClicked: false },
                { index: 7, isClicked: false },
                { index: 8, isClicked: false }
            ]
        };
        let output = [
            { index: 0, isClicked: false },
            { index: 1, isClicked: true },
            { index: 2, isClicked: false },
            { index: 3, isClicked: false },
            { index: 4, isClicked: true },
            { index: 5, isClicked: false },
            { index: 6, isClicked: false },
            { index: 7, isClicked: false },
            { index: 8, isClicked: false }
        ];

        expect(
            input.cells.map((obj, index, arr) =>
                simulateLife(obj, index, arr, input)
            )
        ).toEqual(output);
    });
});
