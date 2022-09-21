import React, { useEffect, useLayoutEffect } from 'react';
import useAxios from '../hooks/useAxios';

const RandomMeal = () => {
    const { fetchData, response, loading } = useAxios();
    console.log(response);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const ingredients = [
        {
            ingredient: 'penne rigate',
            measure: '1 pound'
        }
    ];

    const renderList = (item, i) => (
        <div className="flex text-sm" key={i}>
            <li>{item.ingredient} - </li>
            <span className="italic text-gray-500">
                {item.measure}
            </span>
        </div>
    )

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <button 
                className="bg-blue-800 text-white px-4 py-2 w-full rounded-md md:w-40"
            >
                Get New Meal
            </button>
            <h1
                className="text-4xl font-bold mt-6 underline-none"
            >
                This is the title
            </h1>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div className="mt-4 border-orange-500 border-4 rounded-md h-80">
                    <img 
                        className="w-full h-full object-cover"
                        src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" 
                        alt="meal-img" 
                    />
                </div>
                <div className="my-6">
                    <h3 className="text-4xl font-bold mb-2">
                        Ingredients:
                    </h3>
                    {ingredients.map((item, i) => renderList(item, i))}
                </div>
            </div>
            <div>
                <h3 className="text-4xl font-bold mb-2">
                    Instructions:
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus dolorum odio, sapiente ut eveniet quo labore autem nostrum 
                    eligendi necessitatibus.
                </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 mt-6">
                <iframe 
                    title="youtube"
                    src="https://www.youtube.com/embed/r9jwGansp1E" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default RandomMeal;
