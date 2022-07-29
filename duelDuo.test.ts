
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('characters appear when draw is pressed', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choicesdiv= await driver.findElement(By.id('choices')).getText()
    expect(choicesdiv.length).toBeGreaterThan(0)
})

test('draw button goes away  when draw is pressed', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choicesdiv= await driver.findElement(By.id('draw')).getText()
    expect(choicesdiv).toBe('')
})