package Application.Controllers;

import Application.Models.Genre;
import Application.Services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GenreController {

  @Autowired
  private GenreService genreService;

  @GetMapping(path = "/genres-list")
  public @ResponseBody
  Iterable<Genre> getAllGenres() {
    System.out.println("/genres-list");
    return genreService.findAll();
  }


}
