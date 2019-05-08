package Application.Controllers;

import Application.Models.Author;
import Application.Services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorController {

  @Autowired
  private AuthorService authorService;

  @GetMapping(path = "/authors-list")
  public @ResponseBody
  Iterable<Author> getAllAuthors() {
    System.out.println("/authors-list");
    return authorService.findAll();
  }
}
