package Application.Services;

import Application.Models.Genre;

import java.util.Optional;

public interface GenreService {

  Iterable<Genre> findAll();
  Optional<Genre> findById(int id);
  Genre save(Genre genre);

}
