///let a=10;
///function say(){
   /// let name="java script"
    ///console.log("hai global scope");
    ///console.log("within the func"+name);
///}
///say()

///function voting(age){
   /// if(age>=18){
      ///  var iscloudy=true;
        ///var israining=true;
        ///console.log("eligible")
        ///console.log(iscloudy);
    ///}
    ///console.log(israining);
 ///console.log(iscloudy);
 ///}
 ///voting(18)
/// function text(){
   ///  console.log("Message");
 ///}
 ///text();
 ///function send(callback){
   ///  console.log("message sended");
     ///setTimeout(callback,8000)
/// }
 ///send(text);

 let count=0;
 let intervel=()=>{
    count++;
    console.log(count);
    if(count < 3){
        intervel();
    }
 }
 setInterval();
 
