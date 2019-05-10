package Application.DTO.TrackDTO;

import Application.DTO.AlbumDTO.AlbumDTO;
import Application.DTO.AuthorDTO.AuthorDTO;
import Application.DTO.GenreDTO.GenreDTO;
import Application.Models.Album;
import Application.Models.Author;
import Application.Models.Genre;
import Application.Models.Track;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class TrackWithGenreAndAlbumAndAuthorDTO extends TrackDTO {

  @JsonProperty("genre")
  private GenreDTO genre;

  @JsonProperty("albums")
  private List<AlbumDTO> albums;

  @JsonProperty("authors")
  private List<AuthorDTO> authors;

  public GenreDTO getGenre() {
    return genre;
  }

  public void setGenre(GenreDTO genre) {
    this.genre = genre;
  }

  public List<AlbumDTO> getAlbums() {
    return albums;
  }

  public void setAlbums(List<AlbumDTO> albums) {
    this.albums = albums;
  }

  public List<AuthorDTO> getAuthors() {
    return authors;
  }

  public void setAuthors(List<AuthorDTO> authors) {
    this.authors = authors;
  }

  public static TrackWithGenreAndAlbumAndAuthorDTO fromModel(Track track) {
    TrackWithGenreAndAlbumAndAuthorDTO dto = new TrackWithGenreAndAlbumAndAuthorDTO();
    dto.init(track);

    Genre genre = track.getGenre();
    GenreDTO genreDTO = GenreDTO.fromModel(genre);
    dto.setGenre(genreDTO);

    List<AlbumDTO> albumDTOList = new ArrayList<>();
    for (Album album : track.getAlbums()) {
      albumDTOList.add(AlbumDTO.fromModel(album));
    }
    dto.setAlbums(albumDTOList);

    List<AuthorDTO> authorDTOList = new ArrayList<>();
    for (Author author : track.getAuthors()) {
      authorDTOList.add(AuthorDTO.fromModel(author));
    }
    dto.setAuthors(authorDTOList);

    return dto;
  }

}
