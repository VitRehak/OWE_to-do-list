package cz.uhk.fim.owe.todo.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "toDoListItem")
public class ToDoListItem {

    private String id;
    private String name;
    private int priority;
    private String text;
    private boolean done;
}
