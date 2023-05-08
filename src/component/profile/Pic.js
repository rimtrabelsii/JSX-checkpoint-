import React from 'react'

function Pic() { const listpic=[{src:"gmc1.jpg" , alt:"im1" },{src:"gmc2.jpg" , alt:"im2" },{src:"gmc3.jpg" , alt:"im3" },{src:"gmc4.jpg" , alt:"im4" },{src:"gm5.jpg" , alt:"im5" },{src:"gm6.jpg" , alt:"im6" },]
// retourner les images comme dans un profil instagramm 
return (
  <div className='waw' > 
      {listpic.map((el) => (<img  src={el.src} alt={el.alt} width={'250px'} height={'250px'} /> ))} 
       </div>

  )
}

export default Pic