import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";


function Chatbot(){
  const location = useLocation();
  const fromHomeStatus = location.state.status;
  const fromHomeAddress = location.state.address;

  const systemMessage = { 
    "role": "system", "content": `Give all details from ${fromHomeAddress}`
  }

   const [messages, setMessages] = useState([
    { message: `Welcome to ThinkBot! How can I help you regarding ${fromHomeAddress} ? `,
      sender: "ChatGPT" }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const handleSend = async (message) => {
    const newMessage = {message:message, sender:"user", direction:"outgoing"}
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    if(fromHomeStatus == "Success"){
      await processMessagesToBot(newMessages);
    }
    else{
      await processMessagesToChatGPT(newMessages);
    }
    
  };
  
  //  Explain everything related to the website that we were UNABLE to scrape.
  async function processMessagesToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  //  Explain everything related to the website that we were ABLE to scrape.
  async function processMessagesToBot(chatMessages) {
    //need to send fetch request to backend with body {query: chatMessages}

    let apiMessages = chatMessages.map((messageObj) => {
      let role = "";
      if(messageObj.sender === 'ChatGPT'){
        role = 'assistant'
      }
      else{
        role = 'user'
      }
      return {content: messageObj.message}
    })
    const lastObject = apiMessages[apiMessages.length - 1];
    const lastValue = lastObject.content;
    let apiRequestBody = {"query": lastValue}

    const response = await fetch('http://ec2-54-183-94-29.us-west-1.compute.amazonaws.com:8000/chatter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', //allow CORS
      },
      body: JSON.stringify(apiRequestBody)
    })
    .then(response => {
      return response.text();
    })
    .then(resp => {
      let jresp = JSON.parse(resp)
      let data = jresp.data;
      let strippedData = data.replace(/[\[\]"]+/g, '')

      setMessages([...chatMessages, {message: strippedData, sender: "ChatGPT"}]);
      setIsTyping(false);
    })
    .catch(error => {
      setMessages([...chatMessages, {message: strippedData, sender: "ChatGPT"}]);
      setIsTyping(false);
    });
    }
    
  return (
    <div className="App">
      <div className="w-screen h-screen flex items-center justify-center">
        <MainContainer>
          <ChatContainer className="h-full">       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ThinkBot is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Chatbot;