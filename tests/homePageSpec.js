var Homepage = require('../main/AngularHomePage.js');

describe('Home Page Tests', function() {
  
      it('should have a title', function() {
        Homepage.get();

        Homepage.setName('Julie');
        Homepage.setEmail('Test');
        Homepage.clickIceCreamCheckBox();
        Homepage.clickGenderByValue('Female');
        browser.sleep(5000);
        expect(browser.getTitle()).toEqual('ProtoCommerce');

      
          
      });
  
      
  }) 