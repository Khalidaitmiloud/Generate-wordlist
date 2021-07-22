/* script js for generate wordlist.
>you can help u to generate word of your choice */
function genWords(d,q,u){ 
	var a = d.split('');
	var f='';
	var f1='';
	var n='';
	
	   for (var i = 0; i < q; i++) {
		 f +='for(var i'+i+'= 0; i'+i+'< a.length; i'+i+'++){';
		    if(i>0){n +='+';}
	 	 n +='a[i'+i+']';
		 f1 +='}';            
	   }
z = f+u+'('+n+')'+f1;
eval(z);
	
}
function getWord(r){
console.log(r)
}
//key that will be on the word. 
var d ="qwertyuiopasdfghjklzxcvbnm0123456789" ;
//word(password) length. try making it small to be faster
var q = 8;
genWords(d,q,'getWord');
//@khalid_aitmiloud
