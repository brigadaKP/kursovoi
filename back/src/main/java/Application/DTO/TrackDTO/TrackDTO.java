package Application.DTO.TrackDTO;

import Application.Models.Track;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackDTO {
  @JsonProperty("id")
  private Integer id;
  @JsonProperty("name")
  private String name;
  @JsonProperty("year")
  private Integer year;
  @JsonProperty("time")
  private String time;
  @JsonProperty("link")
  private String link;
  @JsonProperty("price")
  private String price;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getYear() {
    return year;
  }

  public void setYear(Integer year) {
    this.year = year;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }

  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public String getPrice() {
    return price;
  }

  public void setPrice(String price) {
    this.price = price;
  }

  public void init(Track track){
    this.setId(track.getId_track());
    this.setName(track.getName());
    this.setYear(track.getYear());
    this.setTime(track.getTime());
    this.setLink(track.getLink());
    this.setPrice(track.getPrice());
  }

  public static TrackDTO fromModel(Track track) {
    TrackDTO dto = new TrackDTO();
    dto.init(track);
    return dto;
  }
}
