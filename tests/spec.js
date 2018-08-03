describe('Protractor Demo App', function() {

  function calculation(a,b,dropOption)
{
  element(by.model('first')).sendKeys(a);
  element(by.model('second')).sendKeys(b);
  element.all(by.tagName("option")).each(function(item)
    {
    item.getAttribute("value").then(function(values)
      {
      if(values==dropOption)
         {
          item.click();
         }
  
      })
    });
  element(by.id("gobutton")).click();
  }


    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
        expect(browser.getTitle()).toEqual('Super Calculator');
        
        calculation(2,4,"MULTIPLICATION");
        expect(element(by.binding('latest')).getText()).toEqual('8'); 
    });

    it('devision', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
        
      calculation(6,3,"DIVISION");
        

        expect(element(by.binding('latest')).getText()).toEqual('2'); 
    });

    it('addition', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
        
      calculation(1,6,"ADDITION");
        expect(element(by.binding('latest')).getText()).toEqual('7'); 
    });

    xit('dropdown', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
        
       
        expect(element(by.binding('latest')).getText()).toEqual('7'); 
    });
}) 