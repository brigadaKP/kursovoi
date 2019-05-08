package Application.Repositores;

import Application.Models.Album;
import org.springframework.data.repository.CrudRepository;

public interface AlbumRepository extends CrudRepository<Album, Integer> {
  Album findAlbumByName(String name);

  //Iterable<Album> findAlbumByGenre(int id);

  //Iterable<Album> findAlbumsByTracksIs(long id);

  //Iterable<Album> findAlbumByAuthor(int id);
}
