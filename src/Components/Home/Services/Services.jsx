import { async } from '@firebase/util';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHead from '../../ReusableUI/SectionHead';

const Services = () => {

 
  const [jsonData, setJsonData] = useState(null)

   
    const navigate = useNavigate()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  console.log(data)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No data available</div>;

  const handelsetCourseData = (course) => {
    setJsonData(course)
    navigate("/estate-details",
      {
        state: { jsonData: course }
      })
  }


  return (
    <div className='w-full mt-8'>
      <div className='mx-auto max-w-screen-2xl px-4 my-20'>
        <SectionHead
          title='All Craft Items'
        />
        {/* all services wrap  */}
        <div className='grid gap-10 content-center justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          {

            data?.map((data, index)=> (
              <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={data?.image}alt="Sunset in the mountains" />


                <div class="px-6 py-4">
                  <div className='flex items-center justify-between mb-1'>
                    <p className='text-xl mb-1 text-blue-400'>{data.price}</p>
                  
                  </div>
                  <div class="font-bold text-xl mb-2">{data.subcategory_name}</div>
                  <p class="text-gray-600 text-base">
                    {data.short_description}
                  </p>
                  <p className='mt-3 text-gray-600'><span className='font-semibold'>Rating :</span> {data.rating}</p>
                </div>

                <div className='flex justify-center mb-10'>
                  <button onClick={() => handelsetCourseData(data)} className='text-white bg-blue-300 hover:bg-blue-400 transition-all font-semibold rounded-full px-10 py-2 '>View Property</button>
                </div>

              </div>
            ))
          }


        </div>
      </div>
    </div>
  );
};
export default Services;
