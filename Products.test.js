import ProductsPage from "../pageobjects/Products.page.js"

describe('Testing Ecommaerce app', () => {
    it('Buy carrot successfully', async () => {
        
        await ProductsPage.open();
await browser.maximizeWindow();

//buy 5 carrot and validate what you bought
await ProductsPage.buyMany("Carrot", 5)
await expect(ProductsPage.label).toHaveTextContaining("Carrot")

});

it('Buy Beans successfully', async () => {
   
//buy 3 beans and validate what you bought
await ProductsPage.buyMany("Beans", 3)
await expect(ProductsPage.label).toHaveTextContaining("Beans")
});

it('Buy Tomato successfully', async () => {
   
  //buy 7 Tomatoes and validate what you bought
  await ProductsPage.buyMany("Tomato", 7)
  await expect(ProductsPage.label).toHaveTextContaining("Tomato")
  });

  it('Buy Capsicum successfully', async () => {
   
    //buy 9 Capsicum and validate what you bought
    await ProductsPage.buyMany("Capsicum", 9)
    await expect(ProductsPage.label).toHaveTextContaining("Capsicum")
    });

    it('Click the cart and proceed to checkout', async () => {
      
      await ProductsPage.clickTheCart()
      await browser.pause(3000)
      await ProductsPage.clickProceedToCheckoutBtn()
      await browser.pause(3000)
    });

it('Validate the quantities', async () => {
  
  let CarrotQty = 5
  await expect(ProductsPage.tablecells(1, 3)).toHaveText(CarrotQty.toString())
//379
  let BeansQty = 3
  await expect(ProductsPage.tablecells(2, 3)).toHaveText(BeansQty.toString())

  let TomatoQty = 7
  await expect(ProductsPage.tablecells(3, 3)).toHaveText(TomatoQty.toString())

  let CapsicumQty = 9
  await expect(ProductsPage.tablecells(4, 3)).toHaveText(CapsicumQty.toString())

});

it('Validate the price of each product', async () => {
  
  
});

    });
