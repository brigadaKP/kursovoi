package Application.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column(name = "active")
  private boolean active;

  @Column(name = "email")
  private String email;

  @Column(name = "login", unique = true)
  private String login;

  @Column(name = "password")
  private String password;

  @Column(name = "number_of_tracks")
  private Integer number_of_tracks;

  @Column(name = "number_of_albums")
  private Integer number_of_albums;

  @Column(name = "time_tracks")
  private String time_tracks;

  @Column(name = "price_tracks")
  private String price_tracks;

  @Column(name = "admin")
  private boolean admin;

  @Column(name = "user")
  private boolean user;

  @JsonBackReference
  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinTable(name = "users_tracks", joinColumns = {@JoinColumn(name = "user_id") },
    inverseJoinColumns = {@JoinColumn(name = "track_id") })
  private Set<Track> tracks = new HashSet<>();

  public Set<Track> getTracks() {
    return tracks;
  }

  public void addTrack(Track track){
    tracks.add(track);
  }

  public void setTracks(Set<Track> tracks) {
    this.tracks = tracks;
  }

  public boolean isAdmin() {
    return admin;
  }

  public void setAdmin(boolean admin) {
    this.admin = admin;
  }

  public boolean isUser() {
    return user;
  }

  public void setUser(boolean user) {
    this.user = user;
  }

  public User(){ }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getLogin() {
    return login;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Integer getNumber_of_tracks() {
    return number_of_tracks;
  }

  public void setNumber_of_tracks(Integer number_of_tracks) {
    this.number_of_tracks = number_of_tracks;
  }

  public Integer getNumber_of_albums() {
    return number_of_albums;
  }

  public void setNumber_of_albums(Integer number_of_albums) {
    this.number_of_albums = number_of_albums;
  }

  public String getTime_tracks() {
    return time_tracks;
  }

  public void setTime_tracks(String time_tracks) {
    this.time_tracks = time_tracks;
  }

  public String getPrice_tracks() {
    return price_tracks;
  }

  public void setPrice_tracks(String price_tracks) {
    this.price_tracks = price_tracks;
  }

  @Override
  public String toString() {
    return "User{" +
      "id=" + id +
      ", active=" + active +
      ", email='" + email + '\'' +
      ", login='" + login + '\'' +
      ", password='" + password + '\'' +
      ", number_of_tracks=" + number_of_tracks +
      ", number_of_albums=" + number_of_albums +
      ", time_tracks='" + time_tracks + '\'' +
      ", price_tracks='" + price_tracks + '\'' +
      '}';
  }
}
