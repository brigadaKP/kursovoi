package Application.DTO.GenreDTO;

import Application.Models.Genre;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GenreDTO {
  @JsonProperty("id")
  private Long id;
  @JsonProperty("name")
  private String name;

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

  public static GenreDTO fromModel(Genre genre) {
    GenreDTO dto = new GenreDTO();
    dto.setId(genre.getId_genre());
    dto.setName(genre.getName());
    return dto;
  }
}
