package Application.Services;

import Application.Models.Author;

import java.util.Optional;

public interface AuthorService {

  Author addAuthor(Author author);
  Author findAuthorByName(String name);
  Optional<Author> findById(int id);
  Author editAuthor(Author author);
  Iterable<Author> findAll();
  void delete(Author author);


}
