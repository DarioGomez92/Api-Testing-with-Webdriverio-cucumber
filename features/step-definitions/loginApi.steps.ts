import {Given, Then} from '@wdio/cucumber-framework'
import loginApi from '../pageobjects/loginApi'

let response: any

Given('he sends a post request to verify login with valid credentials', async() => {
    response = await loginApi.verifyLogin("noe@gmail.com", "noe")
})

Then('he should receive a 200 status code for login', async() => {
    await expect(response.data.responseCode).toEqual(200)
})

Then('the response should confirm that user exists', async() => {
    await expect(response.data).toHaveProperty("message")
    await expect(response.data.message).toContain("User exists!")
})

Given('he sends a post request to verify login without email parameter', async() => {
    response = await loginApi.verifyLoginWithoutEmail("noe")
})

Then('he should receive a 400 status code for login', async() => {
    await expect(response.data.responseCode).toEqual(400)
})

Then('the response should indicate a missing parameter error', async() => {
    await expect(response.data).toHaveProperty("message")
    await expect(response.data.message).toContain("Bad request, email or password parameter is missing in POST request.")
})

Given('he sends a delete request to verify login', async() => {
    response = await loginApi.deleteVerifyLogin()
})

Then('he should receive a 405 status code for login', async() => {
    await expect(response.data.responseCode).toEqual(405)
})

Then('the response should indicate that method is not supported', async() => {
    await expect(response.data).toHaveProperty("message")
    await expect(response.data.message).toContain("This request method is not supported.")
})

Given('he sends a post request to verify login with invalid details', async() => {
    response = await loginApi.verifyLogin("noelia@gmail.com", "noelia")
})

Then('he should receive a 404 status code for login', async() => {
    await expect(response.data.responseCode).toEqual(404)
})

Then('the response should indicate that user was not found', async() => {
    await expect(response.data).toHaveProperty("message")
    await expect(response.data.message).toContain("User not found!")
})