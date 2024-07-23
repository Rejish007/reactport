import React from 'react'
import { useParams } from 'react-router'
import EcommercCard from '../components/EcommercCard';
import { useApiHooks } from '../hooks/apiHooks';

const CategoryItems = () => {
  const { cata } = useParams();
  const [data] = useApiHooks({ api: 'https://www.themealdb.com/api/json/v1/1/filter.php', query: cata })


  return (
    <div>
      <div className='p-2 grid grid-cols-4 gap-2'>

        {data?.meals.map((meal, i) => {
          return <EcommercCard meal={meal} key={i} />
        })}

      </div>

    </div>
  )
}

export default CategoryItems