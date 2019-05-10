package Application.Services;

import Application.Models.Track;
import Application.Models.User;

import java.util.Optional;

public interface TrackService {

  Track addTrack(Track track);
  Iterable<Track> findAllByName(String name);
  Optional<Track> findById(int id);
  Track editTrack(Track track);
  Iterable<Track> findAll();
  void delete(Track track);


}
