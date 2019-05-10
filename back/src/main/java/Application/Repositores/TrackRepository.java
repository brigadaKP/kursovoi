package Application.Repositores;

import Application.Models.Genre;
import Application.Models.Track;
import Application.Models.User;
import org.springframework.data.repository.CrudRepository;

public interface TrackRepository extends CrudRepository<Track, Integer> {
  Iterable<Track> findAllByName(String name);

  //Iterable<Track> findTracksByGenre (Genre genre);

  //Iterable<Track> findAllByGenre(long id);

  //Iterable<Track> findTracksByAuthors(int id);
}
