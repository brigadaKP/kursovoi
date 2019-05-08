package Application.Services.Impl;

import Application.Models.User;
import Application.Repositores.UserRepository;
import Application.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public User addUser(User user) {
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
}
