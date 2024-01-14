export const handleUploadProgress = (snapshot, setIsUpload) => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  setIsUpload(progress);
};
