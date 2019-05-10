package Application.DTO.AuthorDTO;

import Application.DTO.GenreDTO.GenreDTO;
import Application.Models.Author;
import Application.Models.Genre;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthorDTO {

  @JsonProperty("id")
  private Long id;
  @JsonProperty("name")
  private String name;
//  @JsonProperty("imageID")
//  private String imageID;

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

  public static AuthorDTO fromModel(Author author) {
    AuthorDTO dto = new AuthorDTO();
    dto.setId(author.getId_performer());
    dto.setName(author.getName());
    return dto;
  }
}
