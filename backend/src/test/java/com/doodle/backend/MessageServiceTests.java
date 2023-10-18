package com.doodle.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.doodle.backend.messages.MessageService;
import com.doodle.backend.messages.model.Message;
import com.doodle.backend.messages.model.MessageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;

import java.util.Arrays;
import java.util.List;
import java.time.Instant;

@SpringBootTest
public class MessageServiceTests {

    @InjectMocks
    private MessageService messageService;

    @Mock
    private MessageRepository messageRepository;

    @BeforeEach
    void setUp() {
        // Initialize Mockito annotated components
        org.mockito.MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetMessages() {
        Message message1 = new Message("Lekan was here", "Lekan");
        message1.setCreatedAt(Instant.now().minusSeconds(5));

        Message message2 = new Message("Hi Lekan", "John Doe");
        message2.setCreatedAt(Instant.now());

        List<Message> mockMessages = Arrays.asList(message1, message2);


        when(messageRepository.findAll(Sort.by(Sort.Direction.ASC, "createdAt"))).thenReturn(mockMessages);

        List<Message> retrievedMessages = messageService.getMessages();

        assertEquals(2, retrievedMessages.size());
        assertEquals("Lekan was here", retrievedMessages.get(0).getContent());
        assertEquals("Lekan", retrievedMessages.get(0).getCreatedBy());
        assertEquals("Hi Lekan", retrievedMessages.get(1).getContent());
        assertEquals("John Doe", retrievedMessages.get(1).getCreatedBy());
    }

    @Test
    void testCreateMessage() {
        Message message = new Message("Testing..1.2.3", "Lekan");

        when(messageRepository.save(any(Message.class))).thenReturn(message);

        Message savedMessage = messageService.createMessage(message);

        assertEquals("Testing..1.2.3", savedMessage.getContent());
        assertEquals("Lekan", savedMessage.getCreatedBy());
    }
}
