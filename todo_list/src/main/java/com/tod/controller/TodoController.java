package com.tod.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tod.model.TodoItem;

import com.tod.repo.TodoRepo;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
@RequestMapping(value = "/todo")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
	
	@Autowired
	private TodoRepo todoRepo;
	
	@GetMapping
	public List<TodoItem> findAll() {
		return todoRepo.findAll();
	}
	
	@GetMapping(value = "/{id}")
	public Optional<TodoItem> getone (@PathVariable Long id) {
		return todoRepo.findById(id);
	}
	
	@PostMapping
	public TodoItem save (@Valid @NotNull @RequestBody TodoItem todoItem) {
		
		return todoRepo.save(todoItem);
	}
	
	@PutMapping
	public TodoItem update (@Valid @NotNull @RequestBody TodoItem todoItem) {
		return todoRepo.save(todoItem);
	}
	
	@DeleteMapping (value = "/{id}")
	public void delete (@PathVariable Long id) {
		todoRepo.deleteById(id);
	}
}
