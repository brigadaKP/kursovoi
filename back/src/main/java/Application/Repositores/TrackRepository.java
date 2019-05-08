package Application.Repositores;

import Application.Models.Genre;
import Application.Models.Track;
import org.springframework.data.repository.CrudRepository;

public interface TrackRepository extends CrudRepository<Track, Integer> {
  Track findTrackByName(String name);

  //Iterable<Track> findTracksByGenre (Genre genre);

  //Iterable<Track> findTracksByAlbums(long id);

  //Iterable<Track> findTracksByAuthors(int id);
}
