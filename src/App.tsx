import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function handleChangeSelectedGenreId (id: number) {
    setSelectedGenreId(id);
  }

  function handleChangeSelectedGenre (genre: GenreResponseProps) {
    setSelectedGenre(genre);
  }  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleChangeSelectedGenreId={handleChangeSelectedGenreId}
        handleChangeSelectedGenre={handleChangeSelectedGenre}
      />  

      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId}/>
    </div>
  )
}
