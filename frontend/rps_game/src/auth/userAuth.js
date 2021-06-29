const logedIn = () =>{
 if(document.cookie){
  return true;
 }else{return false;}
}
export default logedIn;