package Application.Services;

import Application.Models.Album;

import java.util.Optional;

public interface AlbumService {

  Album addAlbum(Album album);
  Album findAlbumByName(String name);
  Optional<Album> findById(int id);
  Album editAlbum(Album album);
  Iterable<Album> findAll();
  void delete(Album album);

  //Iterable<Album> findAlbumByGenre(int id);
  //Iterable<Album> findAlbumsByTracksIs(int id);
  //Iterable<Album> findAlbumByAuthor(int id);
}
