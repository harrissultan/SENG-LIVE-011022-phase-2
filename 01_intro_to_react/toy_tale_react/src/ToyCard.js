
function ToyCard({name, image, likes, id}) {
    return (
        <div className="card">
            <h2>{ name }</h2>
            <img src={image} className='toy-avatar' alt={name} />
            <p>{likes}</p>
            <button className="like-btn" id={id} >Like</button>
        </div>
      );
  }

export default ToyCard;