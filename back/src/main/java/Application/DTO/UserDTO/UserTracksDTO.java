package Application.DTO.UserDTO;

import Application.DTO.TrackDTO.TrackDTO;
import Application.Models.Track;
import Application.Models.User;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class UserTracksDTO extends UserDTO{

  @JsonProperty("tracks")
  private List<TrackDTO> tracks;

  public List<TrackDTO> getTracks() {
    return tracks;
  }

  public void setTracks(List<TrackDTO> tracks) {
    this.tracks = tracks;
  }

  public static UserTracksDTO fromModel(User user) {
    UserTracksDTO dto = new UserTracksDTO();
    dto.init(user);

    List<TrackDTO> trackDTOList = new ArrayList<>();
    for (Track track : user.getTracks()) {
      System.out.println(track.getId_track());
      trackDTOList.add(TrackDTO.fromModel(track));
    }
    dto.setTracks(trackDTOList);

    return dto;
  }
}
