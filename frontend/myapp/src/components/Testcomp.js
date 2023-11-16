import React, { useState } from 'react';
import axios from 'axios';

const Testcomp = () => {
  const [imageFile, setImageFile] = useState(null);
  const [questId, setQuestId] = useState(''); // 여기에 적절한 초기값을 설정하세요
  const [username, setUsername] = useState(''); // 여기에 적절한 초기값을 설정하세요

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleQuestIdChange = (event) => {
    setQuestId(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('image', imageFile);
      formData.append('QuestId', questId);

      const response = await axios.post('http://localhost:8000/api/imagemission/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // 서버에서 온 응답 확인

      // 여기에서 응답을 상태에 따라 처리할 수 있습니다.
    } catch (error) {
      console.error('Error:', error);
      console.log('Server Response:', error.response.data); // 서버 응답 데이터 출력
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          QuestId:
          <input type="text" value={questId} onChange={handleQuestIdChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Testcomp;
