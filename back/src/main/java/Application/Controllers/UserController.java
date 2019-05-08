package Application.Controllers;

import Application.Models.User;
import Application.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping(path = "/users-list")
  public @ResponseBody
  Iterable<User> getAllUsers() {
    System.out.println("/users-list");
    return userService.getAll();
  }

  @GetMapping(path = {"/users-list/{id}"})
  public Optional<User> findById(@PathVariable("id") int id){
    System.out.println(id);
    return userService.findById(id);
  }

  @PostMapping("/users-list")
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

  @PostMapping("/registration")
  public @ResponseBody
  String addUser(@RequestBody User user){
    System.out.println(user.toString());
    //return userService.addUser(user);
    return "addUser";
  }

}
