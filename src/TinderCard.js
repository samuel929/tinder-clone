import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import axios from 'axios';
export default function TinderCards() {
    const [people,setPeople]=useState([]);
    const [lastDirect,setLastDirection]=useState()

    useEffect(()=>{
       const fetchData=async()=>{
           const request=await axios.get('https://tinder54-backend.herokuapp.com/tinder/cards')
          if(request != undefined || request != null){
            console.log(request.data)
            setPeople(request.data)
          }
          
        }
        fetchData()
    },[])
    const swiped=(direction,nameToDelete)=>{
        console.log("removing "+nameToDelete)
        //  setLastDirection(direction)
    }

    const outOfFrame=(name)=>{
    console.log(name + " left the screen")
    }
console.log(people.map((item)=>{
    return item.imgUrl
}))
  return (
    <div className='tinder__cards'>
        <div className='tinderCards__cardContainer'>
       {
           people.map((item)=>(
               <TinderCard
                className="swipe"
                key={item.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,item.name)}
                onCardLeftScreen={()=>outOfFrame(item.name)}
                >
                   <div
                   style={{background:`url(${item.imgUrl})`}}
                   className='card'
                   >
                       
                       <h3 className='card__content'>{item.name}</h3>

                     
                   </div>
               </TinderCard>
           ))
       }
       </div>
    </div>
  )
}
