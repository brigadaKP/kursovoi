package Application.Services.Impl;

import Application.Models.Genre;
import Application.Repositores.GenreRepository;
import Application.Services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GenreServiceImpl implements GenreService {

  @Autowired
  GenreRepository genreRepository;

  @Override
  public Iterable<Genre> findAll() {
    return genreRepository.findAll();
  }

  @Override
  public Optional<Genre> findById(int id) {
    return genreRepository.findById(id);
  }

  @Override
  public Genre save(Genre genre) {
    Genre saveGenre = genreRepository.save(genre);
    return saveGenre;
  }


//  @Override
//  public Genre findGenreByTracks(int id) {
//    return genreRepository.findGenreByTracks(id);
//  }
}
