// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=Object.entries(objeto);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  obj= Object.create({});
  //obj.a=0;obj.b=0;obj.c=0;obj.d=0;obj.e=0;
  //var obj={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,ñ:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
  var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,ñ=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;
  cadena=string.toLowerCase();
  for(var i=0; i<string.length; i++){
    switch(cadena[i]){
        case "a": 
          obj.a=a+1;
          a++;
          break;
        case "b": 
          obj.b=b+1;
          b++;
          break;
        case "c": 
          obj.c=c+1;
          c++;
          break;
        case "d": 
          obj.d=d+1;
          d++;
          break;
        case "e": 
          obj.e=e+1;
          e++;
          break;
        case "f": 
          obj.f=f+1;
          f++;
          break;
        case "g": 
          obj.g=g+1;
          g++;
          break;
        case "h": 
          obj.h=h+1;
          h++;
          break;
        case "i": 
          obj.i=i+1;
          i++;
          break;
        case "j": 
          obj.j=j+1;
          j++;
          break;
        case "k": 
          obj.k=k+1;
          k++;
          break;
        case "l": 
          obj.l=l+1;
          l++;
          break;
        case "m": 
          obj.m=m+1;
          m++;
          break;
        case "n": 
          obj.n=n+1;
          n++;
          break;
        case "ñ": 
          obj.ñ=ñ+1;
          ñ++;
          break;
        case "o": 
          obj.o=o+1;
          o++;
          break;
        case "p": 
          obj.p=p+1;
          p++;
          break;
        case "q": 
          obj.q=q+1;
          q++;
          break;
        case "r": 
          obj.r=r+1;
          r++;
          break;
        case "s": 
          obj.s=s+1;
          s++;
          break;
        case "t": 
          obj.t=t+1;
          t++;
          break;
        case "u": 
          obj.u=u+1;
          u++;
          break;
        case "v": 
          obj.v=v+1;
          break;
        case "w": 
          obj.w=w+1;
          w++;
          break;
        case "x": 
          obj.x=x+1;
          x++;
          break;
        case "y": 
          obj.y=y+1;
          y++;
          break;
        case "z": 
          obj.z=z+1;
          z++;
          break;
    }
  }
  return obj;

  /* const obj = {};
  for(let i=0; i<string.length; i++){
    if (obj.hasOwnProperty(string[i]));{ hasOwnProperty: preginta si la propiedad existe en el objeto
      obj[string[i]]++;
  }
  else obj[string[i]]=1;
   }*/

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringUpp=[],stringLow=[];
  for(var i = 0;i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      stringUpp+=s[i];
    }
    else{
      stringLow+=s[i];
    }
  }
  var stringFinal=stringUpp.concat(stringLow);
  return stringFinal;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 /* var str2=[],str1=[];
  str2=str.split(" ");
  str2=str2.reverse();
  for(var i = 0; i <str.length; i++) {
    str1.push(str2[i]);
  }
  return str1;
  
  
  /*var rever=[];
  for(var i = 0; i <str.length; i++) {
    rever.unshift(str[i]);
  }
  rever=rever.join('');
  var rever1=[];
  for(var t = rever.length-1; t<=0; t--) {
    rever1.push(rever[t]);
  }
  
  return rever1;*/
  return str.split(" ").map(function (palabra){ //split(" ") separa palabra por palabra,map devuelve el resultado de la funcion, split transforma el string en un arreglo de strings
  return palabra.split("").reverse().join(""); }
  ).join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  /*numstr=numero.toString();
  numstr=numero.reverse();

  if(numero==numstr){
    return "es capicua";
  }
  else{
    return "no es capicua";
  }
*/
var numero = numero.toString(),numero2="";
numero2= numero.split("").reverse().join("");
if(numero===numero2) return "Es capicua";
return "No es capicua";
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena2="";
  for(i=0 ; i<cadena.length ; i++){
    if (cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c"){
      cadena2+=cadena[i];
    }
  }
  return cadena2;
}




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  /*var arr1 = [],comp=0;
  for(i=0 ; i<arr.length; i++ ){
    if(arr[i].length>comp){
      arr1.unshift(arr[i]);
      comp=arr[i].length;
    }
    else{
      arr1.push(arr[i]);
    }
  }

  return arr1.join('');*/
  var nuevarr = arr.sort(function(a,b) {
    return a.length - b.length
  } )
  return nuevarr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo=[];
  for(var i=0; i<arreglo1.length; i++){

        for(var j=0; j<arreglo2.length; j++){
          if(arreglo1[i]===arreglo2[j]){
            arreglo.push(arreglo1[i]);
          }
        }
  }
return arreglo;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

