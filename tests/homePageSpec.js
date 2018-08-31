var Homepage = require('../main/AngularHomePage.js');

describe('Home Page Tests', function() {

  xit('should have a title', function(){
    Homepage.get();
    expect(browser.getTitle()).toEqual('Tour of Heroes');

  });
  
  xit('should search hero', function() {
    Homepage.get();
    //Homepage.setSearch('Narco');


        var SearchInput = element(by.css("input[id='search-box']"));
        SearchInput.sendKeys('Narco');

        var navigationMenu = element(by.css('div ul li a'));

  
        browser.actions().mouseMove(navigationMenu).perform();
        navigationMenu.click().then(function(){
          browser.sleep(5000);
        })
     

        //browser.actions().mouseMove(element(by.linkText(' Narco ')).click()).perform().then(function(){

        //browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
          
        

        
        
        // Homepage.setName('Julie');
       // Homepage.setEmail('Test');
       // Homepage.clickIceCreamCheckBox();
       // Homepage.clickGenderByValue('Female');
    
        
        expect(element(by.tagName('h2')).getText()).toBe('NARCO Details');
       
      
          
      });
  
      xit('should have top heroes', function() {
        Homepage.get();
        //Homepage.setSearch('Narco');


        var topHeroesTable = element.all(by.css("a[class='col-1-4']"));
        
        topHeroesTable.each(function(item)
        
        {
        item.element(by.css("h4")).getText().then(function(text)
        
        {
        
        console.log(text);
        
        })
        
      })
      expect(topHeroesTable.count()).toBe(4);
      
       // expect(element(by.tagName('h2')).getText()).toBe('NARCO Details');
       
      
  });



  it('should add hero to the list', async function() {
    Homepage.get();
    element(by.css('a[routerlink="/heroes"]')).click();
    $("input[_ngcontent-c4]").sendKeys('LudaHero');
    $("button[_ngcontent-c4]").click();
   
    let az = false; 
    var myHeroesTable = element.all(by.css("li[_ngcontent-c4]"));
    await myHeroesTable.each(async function(item){

      item.element(by.css("a[_ngcontent-c4]")).getText().then(function(text){
        if(text.includes("LudaHero")){ 
          az = true;
        }
      })
    })
    expect(az).toBe(true); 
    console.log('End Test'); 
  });


  it('should delete added hero', async function() {
    Homepage.get();
    element(by.css('a[routerlink="/heroes"]')).click();
    $("input[_ngcontent-c4]").sendKeys('LudaHero');
    $("button[_ngcontent-c4]").click();

    var myHeroesTable = element.all(by.css("li[_ngcontent-c4]"));
    await myHeroesTable.each(async function(item){

      item.element(by.css("a[_ngcontent-c4]")).getText().then(function(text){
        if(text.includes("LudaHero")){ 
          item.element(by.className('delete')).click();
        }
      })
    })
    let a = false;
    await myHeroesTable.each(async function(item){
     
      item.element(by.css("a[_ngcontent-c4]")).getText().then(function(text){
        if(text.includes("LudaHero")){ 
          a = true;
        }
      })
    })
    expect(a).toBe(false); 

   
   
  });


}) 