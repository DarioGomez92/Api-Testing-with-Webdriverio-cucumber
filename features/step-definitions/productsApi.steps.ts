import {Given, Then} from '@wdio/cucumber-framework'
import productApi from '../pageobjects/productApi'

let response: any

Given('he request the products list', async() => {
    response = await productApi.getAllProducts()
})

Then('with products he should receive a 200 status code', async() => {
    await expect(response.status).toEqual(200)
})

Then('with get the response should contain a list of products', async() => {
    await expect(response.data).toHaveProperty('products')
    await expect(Array.isArray(response.data.products)).toBeTruthy()
    await expect(response.data.products.length).toBeGreaterThan(0)
})

Given('he sends a post request to the products list', async() => {
    response = await productApi.postAllProducts()
})

Then('with products he should receive a 405 status code', async() => {
    await expect(response.data.responseCode).toEqual(405)
})

Then('with post the response should contain an error message', async() => {
    await expect(response.data).toHaveProperty('message')
    await expect(response.data.message).toContain('This request method is not supported.')
})

Given('he request the brands list', async() => {
    response = await productApi.getBrandsList()
})

Then('with brands he should receive a 200 status code', async() => {
    await expect(response.status).toEqual(200)
})

Then('with get the response should contain a list of brands', async() => {
    await expect(response.data).toHaveProperty('brands')
    await expect(Array.isArray(response.data.brands)).toBeTruthy()
    await expect(response.data.brands.length).toBeGreaterThan(0)
})

Given('he sends a put request to the brands list', async() => {
    response = await productApi.putBrandsList()
    console.log(response)
})

Then('with brands he should receive a 405 status code', async() => {
    await expect(response.data.responseCode).toEqual(405)
})

Then('with put the response should contain an error message', async() => {
    await expect(response.data).toHaveProperty('message')
    await expect(response.data.message).toContain('This request method is not supported.')
})

Given('he sends a post request to search for top', async() => {
    response = await productApi.searchProduct("top")
})

Then('with post to search product he should receive a 200 status code', async() => {
    await expect(response.status).toEqual(200)
})

Then('the response should contain a list of searched products', async() => {
    await expect(response.data).toHaveProperty('products')
    await expect(Array.isArray(response.data.products)).toBeTruthy()
    await expect(response.data.products.length).toBeGreaterThan(0)
})

Given('he sends a post request to search product without parameter', async() => {
    response = await productApi.searchProductWithoutParam()
})

Then('with post to search product he should receive a 400 status code', async() => {
    await expect(response.data.responseCode).toEqual(400)
})

Then('the response should contain a missing parameter message', async() => {
    await expect(response.data).toHaveProperty("message")
    await expect(response.data.message).toContain("Bad request, search_product parameter is missing in POST request.")
})