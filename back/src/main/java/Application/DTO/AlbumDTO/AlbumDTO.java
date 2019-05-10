package Application.DTO.AlbumDTO;

import Application.Models.Album;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AlbumDTO {

  @JsonProperty("id")
  private Long id;
  @JsonProperty("name")
  private String name;
//  @JsonProperty("number_of_tracks")
//  private Integer number_of_tracks;
//  @JsonProperty("time")
//  private String time;
//  @JsonProperty("price")
//  private String price;
//  @JsonProperty("link_on_cover")
//  private String link_on_cover;


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public static AlbumDTO fromModel(Album album) {
    AlbumDTO dto = new AlbumDTO();
    dto.setId(album.getId_album());
    dto.setName(album.getName());
    return dto;
  }
}
