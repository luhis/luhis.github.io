---
title: Debugging SignalR Long Polling
author: Matt McCorry
date: 2020-11-21
tags: SignalR,JavaScript
---

# SignalR

SignalR is a Microsoft technology that allows push messages from the server to the client. Under the hood, it uses a variety of technologies to allow delivery to the client.

## Debugging

In debug, we normally use the WebSockets connection method, however in production some users are not. For instance, some corporate firewalls block WbeSockets and Server Sent Events. We need to be able to simulate this to debug issues.

## WebSockets

WebSockets are a persistent connection from the client to the server. The server can push events to the client, and the client can send commands to the server over the same connection.

## Forcing Transport in Code

We can force the client to use Long Polling like this:

```TypeScript
const connection = new HubConnectionBuilder()
        .withUrl("/resultsHub", HttpTransportType.LongPolling)
        .build();
```

This is helpful in debug, but when we need to test in a UAT environment, it's not great as it involves modifying the code.

## Blocking WebSockets

Using [this extension](https://github.com/arthepsy/chrome-disable-websockets) we can disable WebSockets. Once it's running, we can see in the Chrome tools that there are no WebSocket connections. Events are now sent to the client over a Server Sent Events connection, when the client wants to send a command to the server, a new Post request it made. This is because the Server Sent Events connection is a one way connection

## Blocking Server Sent Events

I could not find a plugin or setting to disable server sent events in Chrome, but we can use Chrome request blocking to block creation of the SSE connection.

`*serverSentEvents*`

Unfortunately this only works in the legacy old SignalR, the new Core SignalR uses a different negotiation protocol which is not so easily blocked.
