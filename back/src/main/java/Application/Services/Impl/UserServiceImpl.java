package Application.Services.Impl;

import Application.Models.Role;
import Application.Models.User;
import Application.Repositores.UserRepository;
import Application.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service("userService")
public class UserServiceImpl implements UserDetailsService, UserService {

  @Autowired
  private UserRepository userRepository;

  //@Autowired
  //BCryptPasswordEncoder bCrypt;

  @Override
  public User addUser(User user) {
    //user.setPassword(bCrypt.encode(user.getPassword()));
    User savedUser = userRepository.save(user);
    return savedUser;
  }

  @Override
  public User findUserByLogin(String login) {
    return userRepository.findUserByLogin(login);
  }

  @Override
  public Optional<User> findById(int id) {
    return userRepository.findById(id);
  }

  @Override
  public User editUser(User user) {
    User updateUser = userRepository.save(user);
    return updateUser;
  }

  @Override
  public Iterable<User> getAll() {
    return userRepository.findAll();
  }


  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findUserByLogin(username);
    if(user == null){
      throw new UsernameNotFoundException("Invalid username or password.");
    }
    return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), getAuthority(user));
  }

  private Set getAuthority(User user) {
    Set authorities = new HashSet<>();
    if(user.isAdmin()){
      authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
    } else if(user.isUser()){
      authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
    }
    return authorities;
  }






}
