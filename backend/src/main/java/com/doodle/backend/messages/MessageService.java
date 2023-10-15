package com.doodle.backend.messages;

import com.doodle.backend.messages.model.Message;
import com.doodle.backend.messages.model.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;


    /**
     * Returns all messages in chronological order for the client
     *
     * @return - Welcome messages
     */
    public List<Message> getMessages(){
        return messageRepository.findAll(Sort.by(Sort.Direction.ASC, "createdAt"));
    }

    /**
     * Receives messages from client and persists it
     *
     * @param message - message from cleint
     * @return persisted message
     */
    public Message createMessage(Message message){
        return messageRepository.save(message);
    }
}
