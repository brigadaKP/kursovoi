package Application.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "performers")
public class Author {

  @Id
  @Column(name="id_performer")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id_performer;

  @Column(name = "name")
  private String name;

  @Column(name = "imageID")
  private String imageID;

  //ManyToMany Genre
  @JsonBackReference
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinTable(name = "performers_genres", joinColumns = { @JoinColumn(name = "author_id")},
    inverseJoinColumns = { @JoinColumn(name = "genre_id")})
  private Set<Genre> genres = new HashSet<>();

  public Set<Genre> getGenres() {
    return genres;
  }

  public void setGenres(Set<Genre> genres) {
    this.genres = genres;
  }

  //ManyToMany Track
  @JsonManagedReference
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinTable(name = "performers_tracks", joinColumns = { @JoinColumn(name = "author_id")},
                                          inverseJoinColumns = { @JoinColumn(name = "track_id")})
  private Set<Track> tracks = new HashSet<>();

  public Set<Track> getTracks() {
    return tracks;
  }

  public void setTracks(Set<Track> tracks) {
    this.tracks = tracks;
  }

  public Long getId_performer() {
    return id_performer;
  }

  public void setId_performer(Long id_performer) {
    this.id_performer = id_performer;
  }

  public String getName_performer() {
    return name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setName_performer(String name) {
    this.name = name;
  }

  public String getImageID() {
    return imageID;
  }

  public void setImageID(String imageID) {
    this.imageID = imageID;
  }

  @Override
  public String toString() {
    return "Author{" +
      "id_performer=" + id_performer +
      ", name='" + name + '\'' +
      ", imageID='" + imageID + '\'' +
      ", genres=" + genres +
      ", tracks=" + tracks +
      '}';
  }
}
