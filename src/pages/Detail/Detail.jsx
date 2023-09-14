import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();


  useEffect(() => {
    let isActive = true;

      if(!data){
        fetch("../../../public/projects.json")
      
        .then(response => response.json())
        .then(response => {
          console.log(response.json())
          // if(isActive) {
          //   setData(response.filter(project => (project._id) === id)[0])
          // }
      })
    }


      return () => isActive = false;
  }, [])

  console.log(id);
  console.log(data);


  return (
    <div>
    </div>
  );
};

export default Detail;