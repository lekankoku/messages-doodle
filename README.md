# Doodle Full-stack Challenge

## Task

```
1. Receive new messages from the client
2. List all messages in chronological order for the client
```

I viewed the task holistically and broke it into two separate parts: frontend and backend.

### Backend

The backend tasks were clear and straightforward, and I designed the message model based on the content in the wireframe.
A message has the following properties:

```
    Message {
        id: uuid [primary key]
        content: string [actual message]
        createdby: string [author of message]
        createdat: timestamp [timestamp of creation date]
    }
```

I was tempted to explore adding some authentication for the user messages but shied away from it because it was not defined in the product spec and was too time-consuming, but it would have increased security and would have given the user the ability to use the app on different clients.

The performance on mobile was a primary concern for the feature, so from my experience in solving such tasks, I was tempted to use Cursor Pagination to load the messages on demand.

I shied away from it due to time constraints, it being out of the specifications, and I didn't know how to design UX on the front for such a feature, and it would have been too time-consuming and out of scope. It's a feature I would have loved to add as it dramatically improves performance as the app scales.

### frontend

The front end was slightly more complicated.
As for design, The wireframe was bare bones and showed me what I was supposed to implement, but the messages' positioning could have been clearer. Also, there was no desktop design, so I took inspiration from WhatsApp web and the WhatsApp mobile app and used doodles colors for the branding. This was quicker for me and provided a reference point to follow.

On the technical side, my first question was how to collect and store the username. I narrowed my solution to a modal that collects this when the name when the app is opened and is stored in the state. I was tempted to persist this username in local storage and provide the user with some sign-in and out based on local storage feature. Still, there were too many edge cases, lots to implement, and not a lot of time, so I shied away from it, but it would vastly improve the UX of the users.

i added a local messages refresh button(the fetches new messages from the server) during development but took it out during the final product due to it not being in the product spec. It helped me with testing and debugging and would allow the UX and improve the app's functionality, but it wasn't a priority, so I took it out.

## Tech Stack

The contraints for this task was a JVM language and a vanilla javascipt framework, so therfore i userd the following tech stack

**Client:** React, SASS

**Server:** Java, Spring

**Database:** Postgres

I had previous experience with the tech stack and that's what motivated my decision to use them.

## Installation

Start my project with

```bash
    docker-compose up -d
```
