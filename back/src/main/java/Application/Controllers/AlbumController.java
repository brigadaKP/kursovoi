package Application.Controllers;

import Application.Models.Album;
import Application.Services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AlbumController {

  @Autowired
  private AlbumService albumService;

  @GetMapping(path = "/albums-list")
  public @ResponseBody
  Iterable<Album> getAllAlbums() {
    System.out.println("/albums-list");
    return albumService.findAll();
  }


}
