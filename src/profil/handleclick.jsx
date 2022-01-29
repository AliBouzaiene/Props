const ActionLink = () => {
 const handleClick = e => {
   e.preventDefault();   
   alert("c'est le profil de Bouzaiene Ali");
 }

 return (
   <a href="#" onClick={handleClick}>
     Click me
   </a>
 );
}
export default ActionLink;