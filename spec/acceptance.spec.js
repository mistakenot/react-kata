const serve = require('serve');
const webdriver = require('selenium-webdriver');

describe('Application', () => {
  const port = 4444;
  let driver;

  const cssOf = (c) => webdriver.By.css(c);

  beforeAll(async () => {
    server = serve('build', {port, single: true});
    driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.firefox()).
      build();

    await driver.get('http://localhost:' + port);
  });

  beforeEach(async () => {
    await driver.navigate().refresh();
  });

  it('can display a list of search results', async () => {
    const elements = await driver.findElements(cssOf('.search-results-item-name'));
    const actual = await Promise.all(elements.map(e => e.getText()));

    expect(actual).toEqual(['hotelone', 'hoteltwo', 'hotelthree']);
  });

  it('can filter search results by facility', async () => {
    const element = await driver.findElement(cssOf('.facilities-status input'));
    await element.click();

    let filteredElements = await driver.findElements(cssOf('.search-results-item-name'))
    
    expect(filteredElements.length).toEqual(2);
  });

  it('can sort results by rating descending', async () => {
    const sortElement = await driver.findElement(cssOf('.sorting'));
    await sortElement.click();

    const elements = await driver.findElements(cssOf('.search-results-item-name'));
    const actual = await Promise.all(elements.map(e => e.getText()));

    expect(actual).toEqual(['hotelone', 'hotelthree', 'hoteltwo']);
  });

  afterAll(async () => {
    server.stop();
    await driver.quit();
  });

});