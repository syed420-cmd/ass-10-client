import React from 'react';
import { useLocation } from 'react-router-dom';


const EstateDetails = () => {

    const location = useLocation()
    const jsonData = location.state.jsonData;

    console.log(jsonData);


    return (
        <div class="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">

            <div class="mb-10 rounded overflow-hidden flex flex-col mx-auto">
                <a href="#"
                    class="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{jsonData.estate_title}</a>

                <div class="relative">
                    <a href="#">
                        <img class="w-full"
                            src={jsonData?.image} />
                    </a>


                </div>
                <p class="text-gray-500 mt-2 text-base leading-8">

                </p>

                <div className='flex items-center justify-between mb-1'>
                    <p class="text-gray-500 text-base font-semibold leading-8">
                        {jsonData?.location}
                    </p>
                    {
                        jsonData.status === "rent" ?
                            <p className='px-4 rounded-full mb-1 text-white bg-red-400'>{jsonData.status}</p>
                            :
                            <p className='px-4 rounded-full mb-1 text-white bg-green-400'>{jsonData.status}</p>
                    }
                </div>


                <p class="text-gray-700 py- text-base leading-8">
                    {jsonData.description}
                </p>
                <p className='font-semibold'>Price:
                    <span class="text-blue-400 font-semibold text-base leading-8">
                        {jsonData.price}
                    </span>
                </p>
                <div class=" py-5">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Area: {jsonData.area}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{jsonData.segment_name}</span>
                </div>
                <hr />

            </div>

        </div>
    );
};

export default EstateDetails;