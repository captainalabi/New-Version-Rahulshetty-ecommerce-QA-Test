import Page from "./page.js";

class Products extends Page{

//---------------------------------selectors-------------------------

    //to search for a product
    get searchField(){ return $(".search-keyword")}

    //select add to cart button 
    addToCartBtn(){ return $(`div.product-action`) }

    //select the increment button
    get incrementBtn(){ return $('.increment')}

    //select product label
    get label(){ return $("#root div.products-wrapper div:nth-child(1) h4")}

    //select cart
    get cart(){ return $("#root header div.cart a.cart-icon img")}

    //select proceed to checkout button
    get proceedToCheckoutBtn(){ return $("div.cart div.cart-preview.active div.action-block")}

    //select brocolli Table quantity
    tablecells(row, column){ return $(`#productCartTables tbody tr:nth-child(${row}) td:nth-child(${column})`)}

    //select total after discount
    get totalAfterDiscount(){ return $('#root span.discountAmt')}

    //select place order
    get placeOrderBtn(){ return $('//*[@id="root"]/div/div/div/div/button')}

    //select AgreeToTerms
    get agreeToTerms(){ return $('.chkAgree')}

    //select proceedBtn
    get proceedBtn(){ return $('#root button')}

//--------------------------------------------functions-------------------------------------------------

async clickProceedBtn(){
    await this.proceedBtn.click()
    await browser.pause(3000)
}

async clickToAgree(){
    await this.agreeToTerms.click()
    await browser.pause(3000)
}

async clickPlaceOrderBtn(){
    await this.placeOrderBtn.click()
    await browser.pause(3000)
}

/**
 * Perform the process of adding any amount of each product to cart
 * @param {String} productName : name of product to buy
 * @param {Number} amount : amount of product to buy
 */
async buyMany(productName,amount){
    this.searchForProduct(productName)//search for product
    await browser.pause(5000)
    Array(amount - 1).fill().map( async ()=>{//increment no to buy, 1 is already incremented on the site
       await this.clickIncrementBtn()
    })
    await browser.pause(5000) 
    this.clickAddToCartBtn()//add to cart
    await browser.pause(5000)
}

async clickProceedToCheckoutBtn(){ 
    await this.proceedToCheckoutBtn.click()
}

async clickTheCart(){
    await this.cart.click()
}

async clickIncrementBtn(){
    await this.incrementBtn.click()
}

/**
 * search for any product by name
 * @param {String} productName 
 */
async searchForProduct(productName){ 
    await this.searchField.setValue(productName)
}

/**
 * click the add to cart button
 * @param {number} index of button
 */
async clickAddToCartBtn(index){ 
   await this.addToCartBtn(index).click()
}
}
export default new Products()