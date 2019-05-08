package Application.Services;

import Application.Models.User;

import java.util.Optional;

public interface UserService {

    User addUser(User user);
    User findUserByLogin(String login);
    Optional<User> findById(int id);
    User editUser(User user);
    Iterable<User> getAll();
}
