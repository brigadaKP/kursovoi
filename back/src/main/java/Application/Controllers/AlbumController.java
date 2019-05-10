package Application.Controllers;

import Application.Models.Album;
import Application.Services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("albums")
public class AlbumController {

  @Autowired
  private AlbumService albumService;

  @GetMapping(path = "/albums-list")
  public @ResponseBody
  Iterable<Album> getAllAlbums() {
    System.out.println("/albums-list --- getAllAlbums");
    return albumService.findAll();
  }

  @PostMapping(path = "/albums-find")
  public @ResponseBody
  Iterable<Album> findAlbums(@RequestBody String string) {
    System.out.println("/albums-list --- findAlbums");
    return albumService.findAllByName(string);
  }

  @PostMapping(path = "/albums-find/id")
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
