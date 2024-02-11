function numberSys() {
    let n = document.getElementById("convertionItem").value;
	if (n == "Binary"){
		binary();
	}
	if (n == "Octal"){
		octal();
	}
	if (n == "Decimal"){
		decimal();
	}	
	if (n == "Hexadecimal"){
		hexadecimal();
	}
		
}
function binary(){  
	let n = document.getElementById("convertionItem2").value;
	let a = document.getElementById("myText").value;
	if (n == "Octal"){ 
		const x = [];
		const z = [];
		let ans = "";		
		for (let i = 0; i < a.length; i++){ 		
			x.push(a[i]);		
        }		
		while (x.length > 0){
      
			const y = [];
			for (let i = 0; i < 3; i++){
				y.push(x.pop());
			
				if (x.length == 0){
					break;
				}			
			}
			z.push(y);
		}
  
		let y = "";
		for (let i = 0; i < z.length; i++){
			let x = 0;
			for (let j = z[i].length - 1; j != -1; j--){
				x += (z[i][j])*(2**j);         
			}    
			y += x;
		}	 
		for (let i = y.length - 1; i > -1; i--){
			ans += y[i];
		}
		document.getElementById("myText2").value =  parseInt(ans);
	} 
	if (n == "Decimal"){    
		let x = 0;
		let count = 0;
		for(let i = a.length - 1; i > -1; i--){         
			y = a[i];
			x += parseInt(y)*(2**count);        
			count += 1;          
		}
		document.getElementById("myText2").value =  x;
    }
	if (n == "Hexadecimal"){	  
		const x = [];
		const z = []; 
		const hex = ["A","B","C","D","E","F"];
		let ans = "";
		for (let i = 0; i < a.length; i++){     
			x.push(a[i]);
        }
		while (x[0] == "0"){
			x.shift();
		}
		while (x.length > 0){     
          const y = [];
          for (let i = 0; i < 4; i++){
			y.push(x.pop());
			if (x.length == 0){
				break;
			}
			}
			z.push(y);
		}
  
		let y = "";		
		for (let i = 0; i < z.length; i++){
			let x = 0;
			for (let j = z[i].length - 1; j != -1; j--){
				x += (z[i][j])*(2**j);         
			}
			if(x > 9){
				x = hex[(x-1)-9];
			}    
			y += x;
		}
		for (let i = y.length - 1; i > -1; i--){
			ans += y[i];
		}		
	
		document.getElementById("myText2").value =  ans;
				
	}
  
    
}
function octal(){
   
   let n = document.getElementById("convertionItem2").value;
   let a = document.getElementById("myText").value;
   const binary = ['000','001','010','011',
                   '100','101','110','111'];
   if (n == "Binary"){     
       let x = "";
       for (let i = 0; i < a.length; i++){       
           for (let j = 0; j < binary.length; j++){
               if(a[i] == j){
                   x += binary[j];
               }
           }
       }
       document.getElementById("myText2").value =  x;
    }
    if (n == "Decimal"){      
        let x = 0;
        i = a.length - 1;
        for (let j = 0; j < a.length; j++){           
            x += (a[j])*(8**i);
            i -= 1;
        }
        document.getElementById("myText2").value =  x;
        
    }
    if (n == "Hexadecimal"){       		
		const hex = ['A','B','C','D','E','F'];
		const y = [];
		let x = "";
		let z = "";
		let count = 0;
		let ans = "";
        for (let i = 0; i < a.length; i++){   
           for (let j = 0; j < binary.length; j++){
               if(a[i] == j){
                   x += binary[j];
				}
			}
		}       
		for (let i = 0; i < x.length; i++){           
           y.push(x[i])           
		}		
		x = [];
		while (y.length > 0){          
			for (let i = 0; i < 4; i++){
				z += y.pop();
				if (y.length == 0){
					break;
				}
			}         
			z = z.split('');
			z.reverse();
			z = z.join('');         
			x.push(z);
			z = "";
		}
		x.reverse();		
		while (x.length > 0){
			for (let i = 0; i < x.length; i++){
				z = 0;
				count = (x[i].length) - 1;
				for (let j = 0; j < x[i].length; j++){
					z += (2**count)*x[i][j];
					count -= 1;                 
				}
				if (z>9){
                   z = hex[(z-9)-1]                  
				}
				y.push(z);          
			}
			while (y[0] == "0"){
				y.pop(0);
			}     
			for(let i = 0; i < y.length; i ++){
				ans += y[i];
			}
			break;
        }
        document.getElementById("myText2").value =  ans;  
    }
}
function hexadecimal(){
          
	let n = document.getElementById("convertionItem2").value;
	let a = document.getElementById("myText").value;
	const binary=['0000','0001','0010','0011',
				  '0100','0101','0110','0111',
                  '1000','1001','1010','1011',
                  '1100','1101','1110','1111'];
	const hex = ["A","B","C","D","E","F"];
	const count = [10,11,12,13,14,15];  
	if (n == "Binary"){    
		let x = "";
		let y = ""
		for(let i = 0; i < a.length; i++){
			y = a[i]
			for(let j = 0; j < hex.length; j++){
				if (y == hex[j]){
					y = count[j];
					break;
				}
			}
			for(let k = 0; k < binary.length; k++){
				if (y == k){
					x += binary[k];
				}
			}
		}
		document.getElementById("myText2").value =  x;      
   }
   if (n == "Octal"){      
       let x = "";
       let y = "";
       let z = "";      
       for(let i = 0; i < a.length; i++){
			y = a[i]
			for(let j = 0; j < hex.length; j++){
				if (y == hex[j]){
					y = count[j];
					break;
				}
			}
			for(let k = 0; k < binary.length; k++){
				if (y == k){
					x += binary[k];
				}
			}
		}       
		y = [];
		for (let i = 0; i < x.length; i++){          
           y.push(x[i]);
           
		}
		x = [];      
		while (y.length > 0){          
			for (let i = 0; i < 3; i++){
				z += y.pop();
				if (y.length == 0){
					break;
				}
			}         
			z = z.split('');
			z.reverse();
			z = z.join('');          
			x.push(z);
			z = "";
		}
		x.reverse();
		let c = 0;
		let ans = "";
		y = [];
		while (x.length > 0){
			for (let i = 0; i < x.length; i++){
				z = 0;
				c = (x[i].length) - 1;
				for (let j = 0; j < x[i].length; j++){
					z += (2**c)*x[i][j];
					c -= 1;
				}
				y.push(z)
			}
			for(let i = 0; i < y.length; i ++){
				ans += y[i];
			}
               
			break;
		}
		document.getElementById("myText2").value =  parseInt(ans);
       
	}
	if (n == "Decimal"){     
		x = 0;
		y = "";
		i = a.length - 1;
		for(let j = 0; j < a.length; j++){
			y = a[j]
			for(let k = 0; k < hex.length; k++){
				if (y == hex[k]){
					y = count[k];
					break;
				}
			}
			x += y*(16**i);
			i -= 1;
		}
		document.getElementById("myText2").value =  x;            
	}
}
function decimal(){
	let n = document.getElementById("convertionItem2").value;
	let a = document.getElementById("myText").value;
	if (n == "Binary"){
		let x = "";
		while(parseInt(a) > 0){
			x += parseInt(a)%2;			
			a = Math.floor(a/2);
		}
		x = x.split('');
		x.reverse();
		x = x.join('');          
		document.getElementById("myText2").value =  parseInt(x);
	}
	if(n == "Octal"){
		let x = "";
		let z = 0;
		while (parseInt(a) > 0){
			z = parseInt(a)/8;	
			x += (z%1)*8
			a = Math.floor(parseInt(a)/8);
		}	
		x = x.split('');
		x.reverse();
		x = x.join(''); 		
		document.getElementById("myText2").value =  x;
	}
	if(n == "Hexadecimal"){
		const hex = ['A','B','C','D','E','F'];
		let x = "";
		let y = 0;
		let z = 0;		
		while (parseInt(a) > 0){
			z = parseInt(a)/16;	
			y = (z%1)*16
			if (y>9){
                y = hex[(y-9)-1]                  
			}
			x += y;
			a = Math.floor(parseInt(a)/16);
		}	
		x = x.split('');
		x.reverse();
		x = x.join(''); 		
		document.getElementById("myText2").value =  x;
	}
}