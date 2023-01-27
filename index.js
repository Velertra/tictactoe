
  
      function Playerone() {
        
        
      }


      function Playertwo() {
        
      }    

       let aVariable = "on";

       function placemark() {
          let marker = document.querySelectorAll('div.slot');
          marker.forEach((slot) => {        
          slot.addEventListener('click', () => {                  // click function that adds innerHTML                                   
          switch (aVariable) {
          case "on":
            
            if(document.getElementById(slot.id).innerHTML === '') {
              aVariable = "off";
              document.getElementById(slot.id).innerHTML = 'x';
            
              switch(slot.id) {
          case "1":
            if(document.getElementById(2).innerHTML === 'x' && document.getElementById(3).innerHTML === 'x' || 
                document.getElementById(4).innerHTML === 'x' && document.getElementById(7).innerHTML === 'x' || 
                document.getElementById(5).innerHTML === 'x' && document.getElementById(9).innerHTML === 'x') {
                  console.log('gotchastill1')
                }
            break;
          case "2":
            if(document.getElementById(1).innerHTML === 'x' && document.getElementById(3).innerHTML === 'x' || 
                document.getElementById(5).innerHTML === 'x' && document.getElementById(8).innerHTML === 'x') {
                  console.log('gotchastill2')
                }
            break;
          case "3":      
            if(document.getElementById(1).innerHTML === 'x' && document.getElementById(2).innerHTML === 'x' || 
              document.getElementById(6).innerHTML === 'x' && document.getElementById(9).innerHTML === 'x' || 
              document.getElementById(5).innerHTML === 'x' && document.getElementById(7).innerHTML === 'x') {
                console.log('gotchastill3')
              }
            break;
          case "4":    
            if(document.getElementById(1).innerHTML === 'x' && document.getElementById(7).innerHTML === 'x' || 
              document.getElementById(5).innerHTML === 'x' && document.getElementById(6).innerHTML === 'x') {
                console.log('mid win4')
              }
            break;  
          case "5":
            if(document.getElementById(4).innerHTML === 'x' && document.getElementById(6).innerHTML === 'x' || 
              document.getElementById(2).innerHTML === 'x' && document.getElementById(8).innerHTML === 'x' || 
              document.getElementById(1).innerHTML === 'x' && document.getElementById(9).innerHTML === 'x' || 
              document.getElementById(3).innerHTML === 'x' && document.getElementById(7).innerHTML === 'x') {
                console.log('mid win5')
              }
            break;  
          case "6":
            if(document.getElementById(3).innerHTML === 'x' && document.getElementById(9).innerHTML === 'x' || 
              document.getElementById(4).innerHTML === 'x' && document.getElementById(5).innerHTML === 'x') {
                console.log('mid win6')
              }
            break;
          case "7":
            if(document.getElementById(1).innerHTML === 'x' && document.getElementById(4).innerHTML === 'x' || 
              document.getElementById(3).innerHTML === 'x' && document.getElementById(5).innerHTML === 'x' || 
              document.getElementById(8).innerHTML === 'x' && document.getElementById(9).innerHTML === 'x') {
                console.log('mid win7')
              }
            break;
          case "8":
            if(document.getElementById(2).innerHTML === 'x' && document.getElementById(5).innerHTML === 'x' || 
              document.getElementById(7).innerHTML === 'x' && document.getElementById(9).innerHTML === 'x') {
                console.log('mid win8')
              }
            break;
          case "9":
        
            if(document.getElementById(1).innerHTML === 'x' && document.getElementById(5).innerHTML === 'x' || 
              document.getElementById(3).innerHTML === 'x' && document.getElementById(6).innerHTML === 'x' || 
              document.getElementById(7).innerHTML === 'x' && document.getElementById(8).innerHTML === 'x') {
                console.log('mid win')
              }
        }
     }
            break;
          case "off":
            
            if(document.getElementById(slot.id).innerHTML === '') {
              aVariable = "on";
              document.getElementById(slot.id).innerHTML = 'o';
            
              switch(slot.id) {
          case "1":
            if(document.getElementById(2).innerHTML === 'o' && document.getElementById(3).innerHTML === 'o' || 
                document.getElementById(4).innerHTML === 'o' && document.getElementById(7).innerHTML === 'o' || 
                document.getElementById(5).innerHTML === 'o' && document.getElementById(9).innerHTML === 'o') {
                  console.log('gotchastill1oooooo')
                }
            break;
          case "2":
            if(document.getElementById(1).innerHTML === 'o' && document.getElementById(3).innerHTML === 'o' || 
                document.getElementById(5).innerHTML === 'o' && document.getElementById(8).innerHTML === 'o') {
                  console.log('gotchastill2ooooooo')
                }
            break;
          case "3":      
            if(document.getElementById(1).innerHTML === 'o' && document.getElementById(2).innerHTML === 'o' || 
              document.getElementById(6).innerHTML === 'o' && document.getElementById(9).innerHTML === 'o' || 
              document.getElementById(5).innerHTML === 'o' && document.getElementById(7).innerHTML === 'o') {
                console.log('gotchastill3oooooo')
              }
            break;
          case "4":    
            if(document.getElementById(1).innerHTML === 'o' && document.getElementById(7).innerHTML === 'o' || 
              document.getElementById(5).innerHTML === 'o' && document.getElementById(6).innerHTML === 'o') {
                console.log('mid win4ooooooo')
              }
            break;  
          case "5":
            if(document.getElementById(4).innerHTML === 'o' && document.getElementById(6).innerHTML === 'o' || 
              document.getElementById(2).innerHTML === 'o' && document.getElementById(8).innerHTML === 'o' || 
              document.getElementById(1).innerHTML === 'o' && document.getElementById(9).innerHTML === 'o' || 
              document.getElementById(3).innerHTML === 'o' && document.getElementById(7).innerHTML === 'o') {
                console.log('mid win5ooooo')
              }
            break;  
          case "6":
            if(document.getElementById(3).innerHTML === 'o' && document.getElementById(9).innerHTML === 'o' || 
              document.getElementById(4).innerHTML === 'o' && document.getElementById(5).innerHTML === 'o') {
                console.log('mid win6oooooo')
              }
            break;
          case "7":
            if(document.getElementById(1).innerHTML === 'o' && document.getElementById(4).innerHTML === 'o' || 
              document.getElementById(3).innerHTML === 'o' && document.getElementById(5).innerHTML === 'o' || 
              document.getElementById(8).innerHTML === 'o' && document.getElementById(9).innerHTML === 'o') {
                console.log('mid win7oooooo')
              }
            break;
          case "8":
            if(document.getElementById(2).innerHTML === 'o' && document.getElementById(5).innerHTML === 'o' || 
              document.getElementById(7).innerHTML === 'o' && document.getElementById(9).innerHTML === 'o') {
                console.log('mid win8oooooo')
              }
            break;
          case "9":
        
            if(document.getElementById(1).innerHTML === 'o' && document.getElementById(5).innerHTML === 'o' || 
              document.getElementById(3).innerHTML === 'o' && document.getElementById(6).innerHTML === 'o' || 
              document.getElementById(7).innerHTML === 'o' && document.getElementById(8).innerHTML === 'o') {
                console.log('mid winoooooo')
              }
        }
              ;
            }
        }
           
            });
          });
        }

      

      /* function placemark() {
        let varChange = document.getElementById("div.slot")
        
        switch (aVariable) {
          case "on":
            aVariable = off;
            console.log('yoyoma');
            break;
          case "off":

              
              console.log('damn')
        }
      ;} */


      function Gameboard() {
        this.slots = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        this.render = function() {
          for (let x = 0; x < this.slots.length; x++) {
            gameDiv = document.createElement('div');          //creates divs with gameSlots array
            gameDiv.classList.add("slot")
            gameDiv.setAttribute('id', this.slots[x])
            gameboard.appendChild(gameDiv);
          }                 
        }

          return [render()];
      }


  


      Gameboard();
      placemark();
       
