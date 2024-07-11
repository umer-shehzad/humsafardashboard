import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import {
  Container,
  Box,
  TextField,
  Button,
  Paper,
  IconButton,
  Typography,
  Avatar,
  InputAdornment,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SearchIcon from '@mui/icons-material/Search';

const ENDPOINT = "http://127.0.0.1:4000";

const testChats = [
  { id: 1, name: "Edward Evan", avatar: "/user-avatars/server-avatar-1.png", recentMessage: "Hey there!" },
  { id: 2, name: "Cody Forman", avatar: "/user-avatars/server-avatar-2.png", recentMessage: "How's it going?" },
  { id: 3, name: "Brendan Carroll", avatar: "/user-avatars/server-avatar-2.png", recentMessage: "Hey there!" },
  { id: 4, name: "Alan Carrington", avatar: "/user-avatars/server-avatar-2.png", recentMessage: "How's it going?" },
  { id: 1, name: "Edward Evan", avatar: "/user-avatars/server-avatar-1.png", recentMessage: "Hey there!" },
  { id: 2, name: "Cody Forman", avatar: "/user-avatars/server-avatar-2.png", recentMessage: "How's it going?" },
  { id: 3, name: "Brendan Carroll", avatar: "/user-avatars/server-avatar-2.png", recentMessage: "Hey there!" },
  { id: 4, name: "Alan Carrington", avatar: "/user-avatars/server-avatar-2.png", recentMessage: "How's it going?" },
];

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [room, setRoom] = useState("defaultRoom");
  const [socket, setSocket] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [sendButtonDisabled, setSendButtonDisabled] = useState(true);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    newSocket.emit('joinRoom', room);

    newSocket.on('message', (message) => {
      setChat((prevChat) => [...prevChat, { text: message, fromServer: true, time: getCurrentTime() }]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [room]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', { text: message, room });
      setChat((prevChat) => [...prevChat, { text: message, fromServer: false, time: getCurrentTime() }]);
      setMessage("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        socket.emit('message', { text: fileData, room, isFile: true, fileName: file.name });
        setChat((prevChat) => [...prevChat, { text: fileData, fromServer: false, isFile: true, fileName: file.name, time: getCurrentTime() }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${strMinutes} ${ampm}`;
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setSelectedChatId(chat.id);
    setRoom(chat.name);
    setChat([]);
    setSendButtonDisabled(false);
    socket.emit('joinRoom', chat.name);
  };

  return (
    <Box display={'flex'} gap={2}>
      
      {/* Chats List */}
      <Box height={'80vh'} sx={{ border: '1px solid #9A9A9A', borderRadius: '9px', backgroundColor: '#EDEDED', padding: '10px', paddingLeft: 0 }}>
        <Box display="flex" alignItems="center" mb={4} pl={2}>
          <Avatar src="/user-avatars/client-avatar.png" sx={{ height: 50, width: 50 }} />
          <Box display={'flex'} flexDirection={'column'}>
            <Typography fontSize={16} fontWeight={700} ml={1} sx={{ height: '20px' }}>Saleha Jamshed</Typography>
            <Typography variant='caption' fontWeight={200} ml={1} sx={{ color: '#000000B3' }}>@saleha_123</Typography>
          </Box>
        </Box>

        <Typography fontSize={18} fontWeight={700} mb={2} ml={2} pl={2}>Messages</Typography>

        <Box pl={2} pr={3}>
          <TextField
            variant="outlined"
            placeholder="Search chats"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#808080' }} />
                </InputAdornment>
              ),
              style: { borderRadius: 11 }
            }}
            sx={{
              marginBottom: '20px', backgroundColor: 'white', borderRadius: '11px', border: 'none', height: 50,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
              },
            }}
          />
        </Box>

        <Box sx={{
          height: '45vh',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#B3B3B3',
            borderRadius: '5px',
          },
        }}>
          {testChats.map((chat) => (
            <Box
              key={chat.id}
              display="flex"
              alignItems="center"
              padding="20px"
              mr={2}
              sx={{
                cursor: 'pointer',
                borderBottom: chat.id === selectedChatId ? 'none' : '1px solid rgba(0, 0, 0, 0.17)',
                borderLeft: chat.id === selectedChatId ? '3px solid #E58600' : 'none',
                backgroundColor: chat.id === selectedChatId ? 'white' : 'inherit',
              }}
              onClick={() => handleChatSelect(chat)}
            >
              <Avatar src={chat.avatar} sx={{ height: 55, width: 55 }} />
              <Box>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography fontSize={16} fontWeight={700} ml={1} sx={{ height: '20px' }}>{chat.name}</Typography>
                  <Typography variant='caption' fontWeight={200} ml={1} sx={{ color: '#000000B3' }}>{chat.recentMessage}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Chat Room */}
      <Box
        width={'60%'}
        position={'absolute'}
        right={-50}
      >
        <Container sx={{ border: '1px solid #9A9A9A', borderRadius: '9px', backgroundColor: '#EDEDED' }}>
          {selectedChat ? (
            <Box mb={1} display="flex" alignItems="center" padding="10px" height={'12vh'} >
              <Avatar src={selectedChat.avatar} sx={{ height: 55, width: 55 }} />
              <Typography fontSize={18} fontWeight={700} ml={2}>{selectedChat.name}</Typography>
            </Box>
          ) : <Box mb={1} display="flex" alignItems="center" padding="10px" height={'12vh'} />}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '50vh',
              overflowY: 'auto',
              marginBottom: '20px',
              visibility: selectedChat ? 'visible' : 'hidden',
            }}
          >
            {chat.map((msg, index) => (
              <Box
                key={index}
                mr={5}
                sx={{
                  display: 'flex',
                  alignSelf: msg.fromServer ? 'flex-start' : 'flex-end',
                }}
              >
                {selectedChat && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, ml: 0.5 }}>
                    {msg.fromServer === true && (
                      <Avatar src={selectedChat.avatar} sx={{ height: 45, width: 45 }} />
                    )}
                  </Box>
                )}
                <Box>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: '7px',
                      margin: '5px',
                      marginBottom: 0,
                      backgroundColor: msg.fromServer ? 'white' : '#E58600',
                      color: msg.fromServer ? 'black' : 'white',
                      position: 'relative',
                      '&::after': msg.fromServer
                        ? {
                          content: '""',
                          position: 'absolute',
                          bottom: -6,
                          left: 0,
                          width: 0,
                          height: 0,
                          borderLeft: '0px solid transparent',
                          borderTop: '9px solid white',
                          borderRight: '12px solid transparent',
                        }
                        : {
                          content: '""',
                          position: 'absolute',
                          bottom: -6,
                          right: 0,
                          width: 0,
                          height: 0,
                          borderLeft: '12px solid transparent',
                          borderTop: '9px solid #E58600',
                          borderRight: '0px solid transparent',

                        },
                    }}
                  >
                    {msg.isFile ? (
                      <a href={msg.text}>
                        <img src={msg.text} alt={msg.fileName} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                      </a>
                    ) : (
                      msg.text
                    )}
                  </Paper>
                  <Typography
                    variant="caption"
                    ml={2}
                    fontSize={9}
                    sx={{
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    {msg.time}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, ml: 0.5 }}>
                  {msg.fromServer === false && (
                    <Avatar src="/user-avatars/client-avatar.png" sx={{ height: 45, width: 45 }} />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
          <Box mb={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="file"
              accept="image/*,.pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <IconButton
                component="span"
                sx={{
                  transform: 'rotate(30deg)',
                  color: 'rgba(74, 74, 74, 0.5)',
                }}
              >
                <AttachFileOutlinedIcon />
              </IconButton>
            </label>
            <TextField
              variant="outlined"
              fullWidth
              value={message}
              placeholder='Type a message'
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
              sx={{
                marginLeft: '10px',
                // flexGrow: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '& input::placeholder': {
                    color: 'rgba(0, 0, 0, 1)',
                    fontSize: '18px',
                  },
                },
              }}
              disabled={sendButtonDisabled}
            />
            <Button onClick={sendMessage} sx={{ marginRight: '70px', backgroundColor: '#E58600', borderRadius: '100%', height: 50, minWidth: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              disabled={sendButtonDisabled}
            >
              <SendIcon sx={{ color: '#EDEDED' }} />
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Chat;
