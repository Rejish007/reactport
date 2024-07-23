
import React from 'react';
import CatagoriesDisplay from '../components/CatagoriesDisplay';
import { useApiHooks } from '../hooks/apiHooks';




const Home = () => {


  const [data] = useApiHooks({ api: 'https://www.themealdb.com/api/json/v1/1/categories.php' })

  return (
    <div className='p-2 grid grid-cols-4 gap-2'>

      {data?.categories.map((cata, i) => {
        return <CatagoriesDisplay cata={cata} key={i} />
      })}

    </div>
  )
}

export default Home