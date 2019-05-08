package Application.Services.Impl;

import Application.Models.Author;
import Application.Repositores.AuthorRepository;
import Application.Services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

  @Autowired
  AuthorRepository authorRepository;

  @Override
  public Author addAuthor(Author author) {
    Author savAuthor = authorRepository.save(author);
    return savAuthor;
  }

  @Override
  public Author findAuthorByName(String name) {
    return authorRepository.findAuthorByName(name);
  }

  @Override
  public Optional<Author> findById(int id) {
    return authorRepository.findById(id);
  }

  @Override
  public Author editAuthor(Author author) {
    Author updateAuthor = authorRepository.save(author);
    return updateAuthor;
  }

  @Override
  public Iterable<Author> findAll() {
    return authorRepository.findAll();
  }

  @Override
  public void delete(Author author) {
    authorRepository.delete(author);
  }

}
