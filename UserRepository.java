package com.example.fullstack_backend.Repository;

import com.example.fullstack_backend.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {

}
