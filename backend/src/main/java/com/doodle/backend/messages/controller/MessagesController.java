package com.doodle.backend.messages.controller;

import com.doodle.backend.messages.MessageService;
import com.doodle.backend.messages.model.Message;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Messages")
@RestController
public class MessagesController {
    @Autowired
    MessageService messageService;

    @Operation(summary = "Get a element")
    @GetMapping("/messages")
    public ResponseEntity<List<Message>> getMessages() {
        return ResponseEntity.ok(messageService.getMessages());
    }

}
