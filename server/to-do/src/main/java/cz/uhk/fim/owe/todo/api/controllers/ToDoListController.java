package cz.uhk.fim.owe.todo.api.controllers;


import cz.uhk.fim.owe.todo.api.URLs.URLs;
import cz.uhk.fim.owe.todo.entity.ToDoListItem;
import cz.uhk.fim.owe.todo.service.ToDoListItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(URLs.TODO)
//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin
public class ToDoListController {

    @Autowired
    private ToDoListItemService toDoListItemService;

    @GetMapping
    public List<ToDoListItem> getToDoListItems(){
        return toDoListItemService.findToDoListItems();
    }

    @PostMapping ToDoListItem postToDoListItem(@RequestBody ToDoListItem toDoListItem){
        return toDoListItemService.saveToDoListItem(toDoListItem);
    }
    @DeleteMapping("/{id}")
    public void deleteToDoListItem(@PathVariable String id){
        toDoListItemService.deleteToDoListItem(id);
    }
    @PutMapping("/{id}")
    public ToDoListItem updateToDoListItem(@PathVariable String id){
        return  toDoListItemService.updateToDoListItem(id);
    }
}
