package Application.Controllers;

import Application.Models.Track;
import Application.Services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TrackController {

  @Autowired
  private TrackService trackService;

  @GetMapping(path = "/tracks-list")
  public @ResponseBody
  Iterable<Track> getAllTracks() {
    System.out.println("/tracks-list");
    return trackService.findAll();
  }


}
