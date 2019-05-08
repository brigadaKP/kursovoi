package Application.Repositores;

import Application.Models.Genre;
import org.springframework.data.repository.CrudRepository;

public interface GenreRepository extends CrudRepository<Genre, Integer> {
  //Genre findGenreByTracks(int id);
}
