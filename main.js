require('dotenv').config();
const driver = require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Log in to augsburg.', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Login to Augsburg', async function() {
        // Load the page
        await driver.get('https://augnet.augsburg.edu/');
    });

    it('Enter Username', async function() {
        // enter username
        driver.findElement(By.id('username')).sendKeys(process.env.USERNAME);
    });

    it('Enter password', async function() {
        // enter password
        driver.findElement(By.id('password')).sendKeys(process.env.PASSWORD);
    });

    it('Submit Form', async function() {
        // submit form
        //let text = await driver.findElement(By.xpath("//*[contains(text(), 'login')]")).click();
        driver.findElement(By.xpath("//*[@id='login_alert']/div/form/input[4]")).click();
    });

    // close the browser after running tests
    // after(() => driver && driver.quit());
})