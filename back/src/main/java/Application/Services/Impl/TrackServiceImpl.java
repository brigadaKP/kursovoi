package Application.Services.Impl;

import Application.Models.Track;
import Application.Models.User;
import Application.Repositores.TrackRepository;
import Application.Services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TrackServiceImpl implements TrackService {

  @Autowired
  TrackRepository trackRepository;

  @Override
  public Track addTrack(Track track) {
    Track saveTrack = trackRepository.save(track);
    return saveTrack;
  }

  @Override
  public Iterable<Track> findAllByName(String name) {
    return trackRepository.findAllByName(name);
  }

  @Override
  public Optional<Track> findById(int id) {
    return trackRepository.findById(id);
  }

  @Override
  public Track editTrack(Track track) {
    Track updateTrack = trackRepository.save(track);
    return updateTrack;
  }

  @Override
  public Iterable<Track> findAll() {
    return trackRepository.findAll();
  }

  @Override
  public void delete(Track track) {
    trackRepository.delete(track);
  }

}
