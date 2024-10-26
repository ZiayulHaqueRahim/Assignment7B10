import './selected.css'
const Selected = ({selectedPlayer}) => {
    console.log(selectedPlayer)
    return (
        <div>
            {
                selectedPlayer.map((player) =>(
                            <div className='flex justify-between gap-3'>
                                <div className="flex flex-row gap-3">
                                <div>
                                    <img className="select-img" src={player.image}></img>
                                </div>
                                <div className=" flex flex-col gap-10">
                                    <h3>{player.name}</h3>
                                    <p> {player.category}</p>
                                </div>
                             </div>
                             <button>Delete</button>
                            </div>
                            
                ))
            
            }
        </div>
    );
};

export default Selected;