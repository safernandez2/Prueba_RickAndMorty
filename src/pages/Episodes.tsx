import {fetchRickAndMorty, rickAndMortyEpisodes} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'


interface EpisodeData {
  results: Array<{
      id: number;
      name: string;
      air_date:string;
      episode:string;
  }>;
}

export const Episodes: React.FC = () => {
  const { data, error } = useSWR<EpisodeData>(rickAndMortyEpisodes, fetchRickAndMorty, {
    suspense: false,
});
  return(
      <>
        <h1>Episodes</h1>
        <div className={styles.container}>
                    {data?.results.map((episode) => (
                        <AntCard  key={episode.id} name={episode.name} image={episode.air_date}  description={episode.episode} ></AntCard>

                    ))}
                </div>

      </>

  )
}
