from flask import Flask, request, jsonify
import asyncio
from playwright.async_api import async_playwright


app = Flask(__name__)

data = []
def scrape_data(query):
    
    
    async def main():
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()
            await page.goto("https://halal.muis.gov.sg/halal/establishments")
            print(await page.title())
            field =  page.get_by_placeholder("Search for halal establishments")
            lst = []
            await field.click()
            await field.fill(query)
            await field.press('Enter')
            await page.wait_for_selector('.establishment-item')
            items = await page.locator('.establishment-item').all()
            for item in items:
                name = await item.locator('.ps-1').text_content()
                address_row = item.locator('.mt-1:not(.d-none)').last
                second_child = address_row.locator('> div').nth(1)
                address = await second_child.text_content()
                type_of_place_row_container = item.locator('> div').nth(1)
                type_of_place_row = type_of_place_row_container.locator('> div').nth(0)
                second_child2 = type_of_place_row.locator('> div').nth(1)
                eatery_type = await second_child2.text_content()
                lst.append({'name': name, 'address':address, 'eatery_type': eatery_type})
            
            await browser.close()
            return lst
            
    return asyncio.run(main())


@app.route("/api/search", methods = ['POST'])
def searchData():
    data = request.get_json()
    searchParm = data.get('q')
    
    
    retrieved_data = scrape_data(searchParm)
    print(retrieved_data)
    return jsonify({"message": retrieved_data})

if __name__ == "__main__":
    app.run(debug=True)
    
    