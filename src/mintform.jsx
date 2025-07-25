import React, { useState } from 'react';
import { uploadToIPFS } from './nftService';

const MintForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!file) {
      alert("파일을 선택해주세요");
      return;
    }

    try {
      const ipfsUrl = await uploadToIPFS(file);
      alert(`IPFS 업로드 완료: ${ipfsUrl}`);
    } catch (err) {
      console.error(err);
      alert("업로드 오류 발생!");
    }
  };

  return (
    <div>
      <h2>NFT 이미지 업로드</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>민팅 시뮬레이션</button>
    </div>
  );
};

export default MintForm;
