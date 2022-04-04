package cz.uhk.fim.owe.todo.service;

import cz.uhk.fim.owe.todo.entity.ToDoListItem;

import java.util.List;

public interface ToDoListItemService {

    List<ToDoListItem> findToDoListItems();

    ToDoListItem saveToDoListItem(ToDoListItem toDoListItem);

    void deleteToDoListItem(String id);

    ToDoListItem updateToDoListItem(String id);
}
