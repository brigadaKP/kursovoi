package Application.Services;

import Application.Models.Track;

import java.util.Optional;

public interface TrackService {

  Track addTrack(Track track);
  Iterable<Track> findAllByName(String name);
  Optional<Track> findById(int id);
  Track editTrack(Track track);
  Iterable<Track> findAll();
  void delete(Track track);

 // Iterable<Track> findTracksByGenre(Genre genre);
 //  Iterable<Track> findAllByGenre(int id);
 // Iterable<Track> findTracksByAlbums(int id);
}
