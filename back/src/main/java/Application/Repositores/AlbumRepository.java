package Application.Repositores;

import Application.Models.Album;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AlbumRepository extends CrudRepository<Album, Integer> {
  Iterable<Album> findAllByName(String name);

  //Iterable<Album> findAlbumByGenre(int id);

  //Iterable<Album> findAlbumsByTracksIs(long id);

  //Iterable<Album> findAlbumByAuthor(int id);
}
