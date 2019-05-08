package Application.Controllers;

import Application.DTO.TrackDTO.TrackDTO;
import Application.DTO.TrackDTO.TrackWithGenreAndAlbumAndAuthorDTO;
import Application.Models.Track;
import Application.Models.User;
import Application.Services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TrackController {

  @Autowired
  private TrackService trackService;

  private TrackWithGenreAndAlbumAndAuthorDTO trackWithGenreDTO = new TrackWithGenreAndAlbumAndAuthorDTO();

  @GetMapping(path = "/tracks-list")
  public @ResponseBody
  ResponseEntity<List<TrackDTO>> getAllTracks() {
    System.out.println("/tracks-list --- AllTracks");

    Iterable<Track> tracks = trackService.findAll();

    return getTracks(tracks);
  }

  @PostMapping(path = "/tracks-list")
  public @ResponseBody
  ResponseEntity<List<TrackDTO>> findTracks(@RequestBody String string) {
    System.out.println("/tracks-list --- findTracks: " + string);

    Iterable<Track> tracks = trackService.findAllByName(string);

    return getTracks(tracks);
  }

  @PostMapping(path = "/tracks-list/find")
  public @ResponseBody
  ResponseEntity<List<TrackDTO>> findTracksAndAlbumsByGenre(@RequestBody String id_genre) {
    System.out.println("/tracks-list --- findTracksAndAlbumsByGenre: " + id_genre);

    Iterable<Track> tracks = trackService.findAll();
    if (id_genre.hashCode() == "0".hashCode()) {
      return getTracks(tracks);
    } else {
      List<TrackDTO> trackDTOList = new ArrayList<>();
      if (tracks.iterator().hasNext()) {
        for (Track track : tracks) {
          if (id_genre.hashCode() == track.getGenre().getId_genre().toString().hashCode()) {
            trackDTOList.add(TrackWithGenreAndAlbumAndAuthorDTO.fromModel(track));
          }
        }
        return ResponseEntity.ok(trackDTOList);
      } else {
        return ResponseEntity.notFound().build();
      }
    }
  }

  ResponseEntity<List<TrackDTO>> getTracks(Iterable<Track> tracks){
    List<TrackDTO> trackDTOList = new ArrayList<>();
    if (tracks.iterator().hasNext()) {
      for (Track track : tracks) {
        trackDTOList.add(TrackWithGenreAndAlbumAndAuthorDTO.fromModel(track));
      }
      return ResponseEntity.ok(trackDTOList);
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
