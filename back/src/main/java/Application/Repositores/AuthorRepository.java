package Application.Repositores;

import Application.Models.Author;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Author, Integer> {
  Author findAuthorByName(String name);

  //Iterable<Author> findAuthorsByGenres(int id);

  //Iterable<Author> findAuthorsByTracksIn(int id);
}
