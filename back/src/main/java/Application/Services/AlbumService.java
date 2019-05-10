package Application.Services;

import Application.Models.Album;

import java.util.Optional;

public interface AlbumService {

  Album addAlbum(Album album);
  Iterable<Album>  findAllByName(String name);
  Optional<Album> findById(int id);
  Album editAlbum(Album album);
  Iterable<Album> findAll();
  void delete(Album album);

}
