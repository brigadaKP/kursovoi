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
@Table(name = "albums")
public class Album {

  @Id
  @Column(name="id_album")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id_album;

  @Column(name = "name")
  private String name;

  @Column(name = "year")
  private String year;

  @Column(name = "number_of_tracks")
  private Integer number_of_tracks;

  @Column(name = "time")
  private String time;

  @Column(name = "price")
  private String price;

  @Column(name = "link_on_cover")
  private String link_on_cover;

  //ManyToMany Track
  @JsonBackReference
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinTable(name = "tracks_albums", joinColumns = { @JoinColumn(name = "album_id")},
  inverseJoinColumns = { @JoinColumn(name = "track_id")})
  private Set<Track> tracks = new HashSet<>();

  public Set<Track> getTracks() {
    return tracks;
  }

  public void setTracks(Set<Track> tracks) {
    this.tracks = tracks;
  }

  public Long getId_album() {
    return id_album;
  }

  public void setId_album(Long id_album) {
    this.id_album = id_album;
  }

  public String getName_album() {
    return name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setName_album(String name) {
    this.name = name;
  }

  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }

  public Integer getNumber_of_tracks() {
    return number_of_tracks;
  }

  public void setNumber_of_tracks(Integer number_of_tracks) {
    this.number_of_tracks = number_of_tracks;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }

  public String getPrice() {
    return price;
  }

  public void setPrice(String price) {
    this.price = price;
  }

  public String getLink_on_cover() {
    return link_on_cover;
  }

  public void setLink_on_cover(String link_on_cover) {
    this.link_on_cover = link_on_cover;
  }

  @Override
  public String toString() {
    return "Album{" +
      "id_album=" + id_album +
      ", name='" + name + '\'' +
      ", year='" + year + '\'' +
      ", number_of_tracks=" + number_of_tracks +
      ", time='" + time + '\'' +
      ", price='" + price + '\'' +
      ", link_on_cover='" + link_on_cover + '\'' +
      ", tracks=" + tracks +
      '}';
  }
}


/*
INSERT INTO storeaudiotracks.albums (id_album, name, year, number_of_tracks, time, price, link_on_cover) VALUES (1, 'Help!', '1965', 1, '35.25', '25', 'The Beatles\\Help!\\Help!.jpg');
INSERT INTO storeaudiotracks.albums (id_album, name, year, number_of_tracks, time, price, link_on_cover) VALUES (2, 'News of the World', '1977', 1, '35.0', '24', 'Queen\\News of the World\\News of the World.jpg');
INSERT INTO storeaudiotracks.albums (id_album, name, year, number_of_tracks, time, price, link_on_cover) VALUES (3, 'Waking Up', '2009 ', 1, '31.45', '30', 'OneRepublic\\Waking Up\\Waking Up.jpg');
INSERT INTO storeaudiotracks.albums (id_album, name, year, number_of_tracks, time, price, link_on_cover) VALUES (4, 'Out of Our Heads', '1965', 1, '34.75', '24.5', '');
 */
