package Application.Controllers;

import Application.DTO.TrackDTO.TrackDTO;
import Application.Models.Genre;
import Application.Models.Track;
import Application.Services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

  @PostMapping(path = "/genres-list")
  public @ResponseBody
  String findTracksAndAlbumsByGenre(@RequestBody String string) {
    System.out.println("/genres-list --- findTracksAndAlbumsByGenre: " + string);

    //Iterable<Track> tracks = genreService.findAllByName(string);

    return string;
  }

}
