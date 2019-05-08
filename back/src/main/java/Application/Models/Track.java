package Application.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tracks")
public class Track {

  @Id
  @Column(name="id_track")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id_track;

  @Column(name = "name")
  private String name;

  @Column(name = "year")
  private Integer year;

  @Column(name = "time")
  private String time;

  @Column(name = "link")
  private String link;

  @Column(name = "price")
  private String price;

  //ManyToOne Genre
  @JsonBackReference
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "genre_id")
  private Genre genre;

  public Genre getGenre() {
    return genre;
  }

  public void setGenre(Genre genre) {
    this.genre = genre;
  }

  //ManyToMany Album
  @JsonManagedReference
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinTable(name = "tracks_albums", joinColumns = { @JoinColumn(name = "track_id")},
                                      inverseJoinColumns = { @JoinColumn(name = "album_id")})
  private Set<Album> albums = new HashSet<>();

  public Set<Album> getAlbums() {
    return albums;
  }

  public void setAlbums(Set<Album> albums) {
    this.albums = albums;
  }

  //ManyToMany Author
  @JsonManagedReference
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinTable(name = "performers_tracks", joinColumns = { @JoinColumn(name = "track_id")},
                                          inverseJoinColumns = { @JoinColumn(name = "author_id")})
  private Set<Author> authors = new HashSet<>();

  public Set<Author> getAuthors() {
    return authors;
  }

  public void setAuthors(Set<Author> authors) {
    this.authors = authors;
  }

  public Long getId_track() {
    return id_track;
  }

  public void setId_track(Long id_track) {
    this.id_track = id_track;
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

  @Override
  public String toString() {
    return "Track{" +
      "id_track=" + id_track +
      ", name='" + name + '\'' +
      ", year=" + year +
      ", time='" + time + '\'' +
      ", link='" + link + '\'' +
      ", price='" + price + '\'' +
      ", genre=" + genre +
      ", albums=" + albums +
      ", authors=" + authors +
      '}';
  }
}
