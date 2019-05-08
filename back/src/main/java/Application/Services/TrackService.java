package Application.Services;

import Application.Models.Genre;
import Application.Models.Track;

import java.util.Optional;

public interface TrackService {

  Track addTrack(Track track);
  Track findTrackByName(String name);
  Optional<Track> findById(int id);
  Track editTrack(Track track);
  Iterable<Track> findAll();
  void delete(Track track);

 // Iterable<Track> findTracksByGenre(Genre genre);
 // Iterable<Track> findTracksByAlbums(int id);
 // Iterable<Track> findTracksByAlbums(int id);
}
