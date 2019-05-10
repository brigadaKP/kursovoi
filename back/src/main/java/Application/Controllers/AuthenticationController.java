package Application.Controllers;

import Application.Config.TokenProvider;
import Application.DTO.UserDTO.UserDTO;
import Application.Models.AuthToken;
import Application.Models.LoginUser;
import Application.Models.User;
import Application.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/auth")
public class AuthenticationController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private TokenProvider jwtTokenUtil;

  @Autowired
  private UserService userService;

  @RequestMapping(value = "/token", method = RequestMethod.POST)
  public ResponseEntity register(@RequestBody LoginUser loginUser) {

    System.out.println("register --- " + loginUser.getPassword());
    final Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(
        loginUser.getUsername(),
        loginUser.getPassword()
      )
    );
    SecurityContextHolder.getContext().setAuthentication(authentication);
    final String token = jwtTokenUtil.generateToken(authentication);
    return ResponseEntity.ok(new AuthToken(token));
  }

  @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
  public ResponseEntity<User> saveUser(@RequestBody User newUser){
    System.out.println("saveUser --- " + newUser);

    newUser.setUser(true);

    User userFind = userService.findUserByLogin(newUser.getLogin());

    if( userFind != null ){
      System.out.println("NOT CREATE NEW USER");
      return ResponseEntity.badRequest().build();
    } else{
      User userResult = userService.addUser(newUser);
      if(userResult == null) {
        return ResponseEntity.badRequest().build();
      } else {
        return ResponseEntity.ok(userResult);
      }
    }
  }

  @GetMapping("/signin")
  public ResponseEntity<UserDTO> signinUser(User userInfo){
    System.out.println("signinUser");

    UserDTO userDTO = new UserDTO();
    User user = userService.findUserByLogin(userInfo.getLogin());
    if(user != null){
      return ResponseEntity.ok(UserDTO.fromModel(user));
    }else{
      return ResponseEntity.notFound().build();
    }
  }

}
