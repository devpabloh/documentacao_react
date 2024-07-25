const user = {
    name: 'Hedy Lammar',
    imageUrl: 'https://imgv3.fotor.com/images/cover-photo-image/a-game-character-enchantress-wearing-red-clothes-and-horns-created-by-Fotor-ai-image-generator.jpg',
    imageSize: 90,
  };

  export default function profile(){
    return (
        <>
        <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl} alt={`foto de ${user.name}`} style={{width: user.imageSize, height: user.imageSize}}></img> 
        </>
    )
  }