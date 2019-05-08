package Application.Controllers;

import Application.Models.Album;
import Application.Services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AlbumController {

  @Autowired
  private AlbumService albumService;

  @GetMapping(path = "/albums-list")
  public @ResponseBody
  Iterable<Album> getAllAlbums() {
    System.out.println("/albums-list --- getAllAlbums");
    return albumService.findAll();
  }

  @PostMapping(path = "/albums-list")
  public @ResponseBody
  Iterable<Album> findAlbums(@RequestBody String string) {
    System.out.println("/albums-list --- findAlbums");
    return albumService.findAllByName(string);
  }

  @PostMapping(path = "/albums-list/id")
  public @ResponseBody
  Optional<Album> findById(@RequestBody String id){
    System.out.println("/albums-list/" + id);
    Iterable<Album> albums = albumService.findAll();
    for (Album album: albums) {
      if(album.getId_album().toString().hashCode() == id.hashCode()){
        return Optional.of(album);
      }
    }
    return null;
  }


}
