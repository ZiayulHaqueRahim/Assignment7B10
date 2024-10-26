import Playerslist from "../playerslist/Playerslist";
import Selected from "../selected/Selected";

const Section = ({handleIsActive,isActive,coin,handleSelectedPlayer,selectedPlayer}) => {
   
    return (
        <div>




            <div className="py-20 mx-auto md:container flex justify-between">
                <div>
                    <h2 className="text-xl font-bold ">Available Players
                        
                    </h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={()=> handleIsActive("Available")}  className={`${isActive.Available?"btn btn-outline btn-info":"btn"}`} >Available</button>
                    <button onClick={()=> handleIsActive("Selected")} className={`${isActive.Selected?"btn btn-outline btn-info":"btn"}`} >Selected {selectedPlayer.length}</button>
                </div>
            </div>
            <div className="py-20 mx-auto md:container  text-center">
            {
            isActive.Available?<Playerslist handleSelectedPlayer={handleSelectedPlayer} coin={coin}></Playerslist>:<Selected selectedPlayer={selectedPlayer}></Selected>
            }
            </div>
        </div>
       
    );
};

export default Section;