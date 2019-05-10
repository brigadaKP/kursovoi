package Application.DTO.UserDTO;

import Application.Models.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

public class UserDTO {
  @JsonProperty("id")
  private String id;
  @JsonProperty("active")
  private boolean active;
  @JsonProperty( "email")
  private String email;
  @JsonProperty("login")
  private String login;
  @JsonProperty("password")
  private String password;
  @JsonProperty("number_of_tracks")
  private Integer number_of_tracks;
  @JsonProperty("number_of_albums")
  private Integer number_of_albums;
  @JsonProperty("time_tracks")
  private String time_tracks;
  @JsonProperty("price_tracks")
  private String price_tracks;
  @JsonProperty("admin")
  private boolean admin;
  @JsonProperty("user")
  private boolean user;

  public String getId() {
    return id;
  }

  public void setId(String id) {
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

  public void init(User user){
//    this.setUsername(String.valueOf(user.getLogin()));
//    this.setPassword(user.getPassword());
//    this.setAge(user.getNumber_of_albums());
//    this.setSalary(user.getNumber_of_tracks());

    this.setId(String.valueOf(user.getId()));
    this.setLogin(user.getLogin());
    this.setPassword(user.getPassword());
    this.setEmail(user.getEmail());
    this.setNumber_of_albums(user.getNumber_of_albums());
    this.setNumber_of_tracks(user.getNumber_of_tracks());
    this.setActive(user.isActive());
    this.setAdmin(user.isAdmin());
    this.setUser(user.isUser());
    this.setTime_tracks(user.getTime_tracks());
    this.setPrice_tracks(user.getPrice_tracks());

  }

  public static UserDTO fromModel(User user) {
    UserDTO dto = new UserDTO();
    dto.init(user);
    return dto;
  }

//    private String username;
//    private String password;
//    private int age;
//    private int salary;
//
//    public String getUsername() {
//      return username;
//    }
//
//    public void setUsername(String username) {
//      this.username = username;
//    }
//
//    public String getPassword() {
//      return password;
//    }
//
//    public void setPassword(String password) {
//      this.password = password;
//    }
//
//    public int getAge() {
//      return age;
//    }
//
//    public void setAge(int age) {
//      this.age = age;
//    }
//
//    public int getSalary() {
//      return salary;
//    }
//
//    public void setSalary(int salary) {
//      this.salary = salary;
//    }
  }

