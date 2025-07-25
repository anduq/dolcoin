export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://api.nft.storage/upload", {
    method: "POST",
    headers: {
      Authorization: "Bearer 여기에_API_키_입력",  // NFT.Storage에서 발급
    },
    body: formData,
  });

  const result = await response.json();
  return `https://ipfs.io/ipfs/${result.value.cid}`;
}
