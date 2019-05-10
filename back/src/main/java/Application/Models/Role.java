package Application.Models;

import org.springframework.security.core.GrantedAuthority;

import java.util.HashSet;
import java.util.Set;

public enum Role implements GrantedAuthority {
  ADMIN,
  USER;

  public static boolean hasAuthorities(Set<Role> clientAuthorities, Set<Role> allowedAuthorities) {
    Set<Role> intersection = new HashSet<>(allowedAuthorities);
    intersection.retainAll(clientAuthorities);
    return intersection.containsAll(clientAuthorities);
  }

  @Override
  public String getAuthority() {
    return name();
  }
}
