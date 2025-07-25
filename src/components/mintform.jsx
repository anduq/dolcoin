import React, { useState } from 'react';

export default function MintForm() {
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    alert(`이름: ${name}\n설명: ${description}\n파일: ${file?.name}`);
  };

  return (
    <div style={{ padding: '2rem', background: '#f7f7f7' }}>
      <h2>🎨 NFT 민팅하기</h2>
      <input type="text" placeholder="NFT 이름" onChange={(e) => setName(e.target.value)} />
      <br />
      <textarea placeholder="설명" onChange={(e) => setDesc(e.target.value)} />
      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <button onClick={handleSubmit}>민팅 시뮬레이션</button>
    </div>
  );
}
