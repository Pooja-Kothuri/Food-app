
import cdn_link from "../utilis/constants";

export  const RestroCard=(props)=>{ //object destructering
    const {resName}=props;//destructing
    const {name,cloudinaryImageId,cuisines,avgRating}=resName?.info;//optional chaining
  return (
    <div className="w-[300px] h-[300px] border">
    <img className="res-logo" src={cdn_link + cloudinaryImageId}/>
    <h2 className="name">{name}</h2>
    <h3 className="cuisines">{cuisines.join(',')}</h3>
    <h3>AvgRating: {avgRating}</h3>
    </div>
  )
};