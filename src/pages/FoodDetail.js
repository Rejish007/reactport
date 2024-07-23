
import React from 'react'
import { useParams } from 'react-router'
import { useApiHooks } from '../hooks/apiHooks';

const FoodDetail = () => {
  const { id } = useParams();

  const [data] = useApiHooks({ api: 'https://www.themealdb.com/api/json/v1/1/lookup.php', id });


  const meal = data?.meals[0];

  return (
    <div>
      <div className='p-2'>

        <div className="">
          <img src={meal?.strMealThumb} alt="" />
        </div>
        <div className="meal-instruction">
          <p>{meal?.strInstructions}</p>
        </div>

      </div>

    </div>
  )
}

export default FoodDetail