import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews]=useState([]);//ui te show data by useState


    useEffect(()=>{
      if (id=='0') {
        setCategoryNews(data);
        return;
      }else if (id=='1'){
     const filteredNews=data.filter(
        (news)=>news.others.is_today_pick== true);
     setCategoryNews(filteredNews);
    }else{
        const filteredNews=data.filter((news)=>news.category_id==id);
        // console.log(filteredNews);
        setCategoryNews(filteredNews);
      }
        
    },[id, data]);
    return <div className='font-semibold'>
            <h2 className='font-bold'>News Found <span className='text-blue-700'>({categoryNews.length})</span></h2> 
            <div className='grid grid-cols-1 mt-6 space-y-4 px-2'>
{categoryNews.map((news) => (
  <NewsCard key={news.id} news={news} ></NewsCard>
))}


                
            </div>
        </div>; 
};

export default CategoryNews;