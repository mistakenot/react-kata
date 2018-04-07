const url = require('../package.json').deployedHomepage;
const webdriver = require('selenium-webdriver');

describe('Deployment process', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.firefox()).
      build();
    
    await driver.get(url);
  });

  it('can successfully deploy application', async () => {
    const element = driver.findElement(webdriver.By.css('h1'));
    const actual = await element.getText();
    expect(actual).toEqual('Search Results');
  });

  afterAll(async () => {
    await driver.quit();
  })
})