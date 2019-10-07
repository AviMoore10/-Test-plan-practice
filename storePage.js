const seleniumInfra = require('./seleniumInfra')

const selInf = new seleniumInfra()

class StorePage {
    constructor() {
        selInf.getURL("https://cakes-automation-course.herokuapp.com/store.html")
    }

    async checkCurrentDay() {
        const date = new Date();
        const currentDay = date.getDay();
        console.log(currentDay)
        // function dayCss(element, property) {
        //     return 
        // }
        const a = await selInf.findElementListBy("tr", "tagName")
        console.log(a.getCssValue("font-weight"))
        console.log(a)
        const b = await selInf.getTextFromElement(null, null, a[currentDay])
        console.log(b)
        
        
    }
}

const storePage = new StorePage()
storePage.checkCurrentDay()