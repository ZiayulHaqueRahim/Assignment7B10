import './singleplayer.css'

const SinglePlayer = ({player,handleSelectedPlayer}) => {
   const{image,name,profile_pic,nationality,category,rating,price} = player

    return (
        <div>
            <div className='card flex flex-col gap-3'>
            <img className='img' src={image}></img>
            <div className='flex gap-2'>
                <div>
                    <img   className='profile-img' src={profile_pic}></img>
                </div>
                <h3>{name}</h3>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-400'>{nationality}</p>
                <p>{category}</p>
            </div>
            <div className='flex justify-between'>
                <h3>Price: ${price}</h3>
                <button  onClick={()=>handleSelectedPlayer(player)} className='btn btn-outline btn-info'>Choose Player</button>
            </div>


        </div>
        </div>
    );
};

export default SinglePlayer;