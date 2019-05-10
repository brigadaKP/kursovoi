package Application.Controllers;

import Application.DTO.UserDTO.UserDTO;
import Application.DTO.UserDTO.UserTracksDTO;
import Application.Models.Track;
import Application.Models.User;
import Application.Repositores.UserRepository;
import Application.Services.TrackService;
import Application.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("user")
public class UserController {

  @Autowired
  private UserService userService;

  @Autowired
  private TrackService trackService;

  @Autowired
  private UserRepository userRepository;


  @GetMapping(path = "/users-list")
  public @ResponseBody
  Iterable<User> getAllUsers() {
    System.out.println("/users-list");
    System.out.println(userService.getAll());
    return userService.getAll();
  }

  @GetMapping(path = {"/{id}"})
  public Optional<User> findById(@PathVariable("id") int id){
    System.out.println(id);
    return userService.findById(id);
  }

  @PostMapping("/users-edit")
  public @ResponseBody
  ResponseEntity<User> editUser(@RequestBody User user) {
    System.out.println(user.isActive());
    return ResponseEntity.ok(userService.editUser(user));
  }

  @GetMapping(path = {"/login/{login}"})
  public @ResponseBody
  User findUserByLogin(@PathVariable("login") String login){
    System.out.println(login);
    return userService.findUserByLogin(login);
  }

  @PostMapping("/users-settings")
  public @ResponseBody
  Optional<User> findUserById(@RequestBody String id) {
    System.out.println("/users-settings --- findUserById -- " + id);
    return userService.findById(Integer.parseInt(id));
  }

  @PostMapping("/registration")
  public @ResponseBody
  String addUser(@RequestBody User user){
    System.out.println(user.toString());
    //return userService.addUser(user);
    return "addUser";
  }


  //@Secured({"ROLE_ADMIN", "ROLE_USER"})
  @PreAuthorize("hasRole('ADMIN')")
  @RequestMapping(value="/users", method = RequestMethod.GET)
  public Iterable<User> listUser(){
    return userService.getAll();
  }

  //@Secured("ROLE_USER")
  @PreAuthorize("hasRole('USER')")
  ////@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
  @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
  public Optional<User> getOne(@PathVariable(value = "id") String id){
    return userService.findById(Integer.parseInt(id));
  }



  @PostMapping(path = "/{id}")
  public @ResponseBody
  UserDTO findUserTracks(@PathVariable("id") String id) {
    System.out.println("/userTracks --- findUserTracks");

    Optional<User> user = userService.findById(Integer.parseInt(id));

    //TrackService trackService = new TrackServiceImpl();

    UserDTO userDTO = new UserDTO();
    if (user.get() != null) {
        userDTO = UserTracksDTO.fromModel(user.get());
      return userDTO;
      //return trackService.findAllByUsers(user.get());
    } else {
      return null;
      //return trackService.findAllByUsers(user.get());
    }
  }


  /////////////////////

    @PostMapping(path = "/buyTrack")
    public
    ResponseEntity<User> buyTrack(@RequestBody String id_user,@RequestBody Track trackBuy){
    System.out.println(id_user+"/buyTrack "+trackBuy);
    Optional<User> user = userService.findById(Integer.parseInt(id_user));

    Iterable<Track> tracks = trackService.findAllByName(trackBuy.getName());

    for (Track track: tracks) {
      if (trackBuy.getId_track() == track.getId_track()) {
        user.get().addTrack(track);
        return ResponseEntity.ok(userRepository.save(user.get()));
      }
    }
      return null;
    }



}
