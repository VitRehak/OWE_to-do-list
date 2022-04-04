package cz.uhk.fim.owe.todo.repository;

import cz.uhk.fim.owe.todo.entity.ToDoListItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoListItemRepository extends MongoRepository<ToDoListItem,String> {
}
