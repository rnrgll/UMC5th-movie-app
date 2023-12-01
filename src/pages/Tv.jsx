import React from 'react'
import { tvPrograms } from '../tvDummy'
import TvPrgram from '../components/TvPrgram'

export default function Tv() {
  return (
    <div>
      <div className='movies-container'>
        {
          tvPrograms.results.map((item) => {
            return (
              <TvPrgram
                key = {item.id}
                name = {item.name}
                original_name = {item.original_name}
                poster_path = {item.poster_path}
                vote_average = {item.vote_average}
                overview ={item.overview}
              />
            );
          })
        }
      </div>
    </div>
  );
}
