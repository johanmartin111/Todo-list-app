package com.tod.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tod.model.TodoItem;

public interface TodoRepo extends JpaRepository <TodoItem, Long> {

}
