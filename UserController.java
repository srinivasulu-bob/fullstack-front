package com.example.fullstack_backend.Controller;

import com.example.fullstack_backend.Entities.User;
import com.example.fullstack_backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/user")
    User saveDta(@RequestBody User newUser){
        return repo.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllData(){
        return repo.findAll();
    }

    @GetMapping("/user/{id}")
    ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/user/{id}")
    User updateId(@RequestBody User newUser , @PathVariable Long id){
        return repo.findById(id)
                .map(user-> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return repo.save(user);
                }).orElseThrow();
    }

    @DeleteMapping("/user/{id}")
    String deleteId(@PathVariable Long id){
        repo.deleteById(id);
        return "successfully deleted";
    }
}
