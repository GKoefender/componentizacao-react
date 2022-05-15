import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { Button } from './Button'
import { GenreResponseProps } from '../App'

interface sideBarProps {
  selectedGenreId: number
  handleChangeSelectedGenreId: (id: number) => void
  handleChangeSelectedGenre: (genre: GenreResponseProps) => void
}

export function SideBar({selectedGenreId, handleChangeSelectedGenreId, handleChangeSelectedGenre}: sideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      handleChangeSelectedGenre(response.data);
    })
  }, []);

  function handleClickButton(id: number) {
    handleChangeSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
