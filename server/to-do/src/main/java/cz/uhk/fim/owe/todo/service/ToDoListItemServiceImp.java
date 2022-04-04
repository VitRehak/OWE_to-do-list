package cz.uhk.fim.owe.todo.service;

import cz.uhk.fim.owe.todo.entity.ToDoListItem;
import cz.uhk.fim.owe.todo.repository.ToDoListItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoListItemServiceImp implements ToDoListItemService {

    @Autowired
    ToDoListItemRepository toDoListItemRepository;

    @Override
    public List<ToDoListItem> findToDoListItems() {
        return toDoListItemRepository.findAll();
    }

    @Override
    public ToDoListItem saveToDoListItem(ToDoListItem toDoListItem) {
        toDoListItem.setDone(false);
        return toDoListItemRepository.save(toDoListItem);
    }

    @Override
    public void deleteToDoListItem(String id) {
        toDoListItemRepository.deleteById(id);
    }

    @Override
    public ToDoListItem updateToDoListItem(String id) {
        ToDoListItem toDoListItem;
        if (toDoListItemRepository.findById(id).isPresent()) {
            toDoListItem = toDoListItemRepository.findById(id).get();
            toDoListItem.setDone(!toDoListItem.isDone());
            return toDoListItemRepository.save(toDoListItem);
        }
        return null;
    }
}
