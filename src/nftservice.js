export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://api.nft.storage/upload", {
    method: "POST",
    headers: {
      Authorization: "Bearer b2617d6b.1483315d6d45455c89c687df02bb39e6",  // 실제 키로 바꿔주세요!
    },
    body: formData,
  });

  const result = await response.json();

  if (result.ok) {
    const cid = result.value.cid;
    return `https://ipfs.io/ipfs/${cid}`;
  } else {
    throw new Error("IPFS 업로드 실패");
  }
}
