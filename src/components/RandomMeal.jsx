import React, { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import Skeleton from './Skeleton';

const RandomMeal = () => {
    const { fetchData, response, loading } = useAxios();
    const { strMeal, strMealThumb, strInstructions, strYoutube } = response;
    const youtubeUrl = strYoutube?.replace('watch?v=', 'embed/');

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-10">
                <Skeleton className="h-10 md:w-40" />
                <Skeleton className="h-10 w-72 mt-6" />
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <Skeleton className="md:h-72 h-52" />
                    <Skeleton className="md:h-72 h-52" />
                </div>
                <Skeleton className="h-10 w-72 mt-6" />
                <Skeleton className="h-64 mt-6" />
                <Skeleton className="h-72 mt-6" />
            </div>
        );
    }

    let ingredients = [];
    Object.keys(response).forEach((item, index) => {
        if (response[`strIngredient${index}`]) {
            ingredients.push({
                "ingredient": response[`strIngredient${index}`],
                "measure": response[`strMeasures${index}`]
            });
        }
    });
    
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
                onClick={() => fetchData()}
            >
                Get New Meal
            </button>
            <h1
                className="text-4xl font-bold mt-6 underline-none"
            >
                {strMeal}
            </h1>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div className="mt-4 border-orange-500 border-4 rounded-md h-80">
                    <img 
                        className="w-full h-full object-cover"
                        src={strMealThumb} 
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
                <p>{strInstructions}</p>
            </div>
            <div className="aspect-w-16 aspect-h-9 mt-6">
                <iframe 
                    title="youtube"
                    src={youtubeUrl} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default RandomMeal;
