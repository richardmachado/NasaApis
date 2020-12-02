import React from "react";
// import axios from "axios";

// import classNames from 'classnames';

// import NEOKey from "./NEOKey"
// import "./NEO.css"

// function for today so that it automatically updates the site

// var today = new Date()
// var dd = String(today.getUTCDate()).padStart(2, '0');
// var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = yyyy + '-' + mm + '-' + dd;


// end of today function

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// const KEY = process.env.REACT_APP_KEY;

function NEO2() {
//   const [neo, setNeo] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://api.nasa.gov/neo/rest/v1/feed/?date=${today}?detailed=true&api_key=${KEY}`)   
//       .then(response => {
//         console.log(response.data.near_earth_objects[today])
//         setNeo(response.data.near_earth_objects[today])

//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },[]);

  return (
    <div className="body">
      <div className="container">
        <h1 className="display-4 my3"><span className="text-dark"> Near Earth Objects </span>  for  TODAY</h1>        
 
        {/* {neo.map(rock => {
          return (
           <div key={rock.id}>
            <h4 className="mb3" key={rock.name} >Object Name: <span className={classNames({
              'text-danger': !rock.name,
              'text-success': rock.name
            })}>{rock.name}</span></h4> 
             
              <p className="size">
              Size(Maximum Diameter): {Math.round(((rock.estimated_diameter.feet.estimated_diameter_max)) * 100) / 100} feet
              </p> 
               <p className="size">
                Closest Approach Date: {rock.close_approach_data[0].close_approach_date}
                </p>
                <p className="size">
                Miss Distance : {numberWithCommas(Math.round(rock.close_approach_data[0].miss_distance.miles))}
                    <span> </span>miles
                </p>
                <p className="size">
                Relative Velocity : {numberWithCommas(Math.round(rock.close_approach_data[0].relative_velocity.miles_per_hour))}
                    <span> </span>miles per hour
                </p>


            </div>                   
  )
  })} */}
      </div>
    </div>
  );
}

export default NEO2;