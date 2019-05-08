package Application.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "genres")
public class Genre {

  @Id
  @Column(name="id_genre")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id_genre;

  @Column(name = "name")
  private String name;

  //OneToMany Track
  @JsonManagedReference
  @OneToMany(cascade = CascadeType.ALL, mappedBy = "genre")
  private Set<Track> tracks = new HashSet<>();

  public Set<Track> getTracks() {
    return tracks;
  }

  public void setTracks(Set<Track> tracks) {
    this.tracks = tracks;
  }

  //ManyToMany Author
  @JsonManagedReference
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinTable(name = "performers_genres", joinColumns = { @JoinColumn(name = "genre_id")},
                                          inverseJoinColumns = { @JoinColumn(name = "author_id")})
  private Set<Author> authors = new HashSet<>();

  public Set<Author> getAuthors() {
    return authors;
  }

  public void setAuthors(Set<Author> authors) {
    this.authors = authors;
  }

  public Long getId_genre() {
    return id_genre;
  }

  public void setId_genre(Long id_genre) {
    this.id_genre = id_genre;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Genre{" +
      "id_genre=" + id_genre +
      ", name='" + name + '\'' +
      ", tracks=" + tracks +
      ", authors=" + authors +
      '}';
  }
}
