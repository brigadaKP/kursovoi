package Application.Repositores;

import Application.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

  User findUserByLogin(String login);

  Boolean existsByLogin(String username);
  Boolean existsByEmail(String email);

}
