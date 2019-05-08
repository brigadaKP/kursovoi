package Application.Services.Impl;

import Application.Models.Album;
import Application.Repositores.AlbumRepository;
import Application.Services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AlbumServiceImpl implements AlbumService {

  @Autowired
  AlbumRepository albumRepository;

  @Override
  public Album addAlbum(Album album) {
    Album saveAlbum = albumRepository.save(album);
    return saveAlbum;
  }

  @Override
  public Album findAlbumByName(String name) {
    return albumRepository.findAlbumByName(name);
  }

  @Override
  public Optional<Album> findById(int id) {
    return albumRepository.findById(id);
  }

  @Override
  public Album editAlbum(Album album) {
    Album updateAlbum = albumRepository.save(album);
    return updateAlbum;
  }

  @Override
  public Iterable<Album> findAll() {
    return albumRepository.findAll();
  }

  @Override
  public void delete(Album album) {
    albumRepository.delete(album);
  }


}
