import 'expect-puppeteer';

describe('Game of life', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3999/');
        await page.evaluate(() => {
            localStorage.removeItem('name');
        });
    });

    it('should display "Welcome to Conway`s Game of Life" text on page', async () => {
        await expect(page).toMatch('Welcome to Conway`s Game of Life');
    });

    it('should display name filled in the input on home page', async () => {
        await page.type('input', 'Ivan');
        await page.click('#sbm-btn');
        await expect(page).toMatch('Generation');
    });
});
