class Form{
  construtor(){

  }  

  display(){
  
    var title = createElement('h2');
   title.html("Car Racing Game");
   title.position(130,10);

   var input = createInput("name");
   input.position(130,160);
    
   var button = createButton('Play');
    button.position(200,200);

    var greeting=createElement('h3');

     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();
        
        //playerCount = playerCount+1;
         playerCount+=1;

         player.update(name);
         player.updateCount(playerCount);

           greeting.html("Welcome Player "+name);
           greeting.position(130,160);


  
     });

  }


   





}