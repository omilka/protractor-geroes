var AngularHomepage = function()

    {

        var SearchInput = element(by.css("input[id='search-box']"));

       // var nameInput = element(by.css("input[name='name'][minlength='2']"));
        var emailInput = element(by.name('email'));
        var passwordInput = element(by.id('exampleInputPassword1'));
        var IceCreamCheckBox=element(by.css("input[id='exampleCheck1']"));
        var GenderDropDown=element(by.id("exampleFormControlSelect1"));
        var EmplStatusAllRadioButton = element(by.css('div[class="form-group"]')).all(by.name('inlineRadioOptions'));
    
    
      
        this.get = function() {
          browser.get('http://localhost:4200/dashboard');
        };
      
        this.setSearch = function(search) {
            SearchInput.sendKeys(search);
           
        };
      
        this.setEmail = function(email) {
        emailInput.sendKeys(email);
        };

        this.setPassword = function(password) {
            passwordInput.sendKeys(password);
            }; 

         this.clickIceCreamCheckBox = function () {
            IceCreamCheckBox.click();
            }  

    this.clickGenderByValue = function (value) {
    element(by.cssContainingText("[id='exampleFormControlSelect1'] option",value)).click();
        }

    this.clickStatusRadioButtonByIndex = function (index) {
        this.EmplStatusAllRadioButton.get(index).click();
        }  
        
    this.getGreetingText = function() {
        return greeting.getText();
        };    


    };
module.exports= new AngularHomepage();
