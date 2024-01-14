import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { dateFormatter } from "../helpers/dateFormatter.js";

// Функція для завантаження та збереження файлу користувача в Firestore та Storage
export const fileUploadDB = (fileUpload, uid, setUploadStatus, type) => {
  const fileId = doc().id;
  const date = dateFormatter(new Date());
  // Перевірка чи є переданий файл для завантаження
  if (fileUpload) {
    // Створення посилання на об'єкт зберігання для файлу користувача
    const fileRef = ref(storage, `videos/${doc().id}/${fileUpload.name}`);
    // Завантаження файлу до зберігання та отримання знімку (snapshot)
    uploadBytes(fileRef, fileUpload).then((result) => {
      // Отримання URL завантаженого файлу з Storage
      getDownloadURL(result.ref).then((fileUrl) => {
        // Створення посилання на документ файла в Firestore
        const userRef = doc(db, "videos", fileId);
        // Збереження URL файлу до документу користувача в Firestore
        setDoc(
          userRef,
          { file: fileUrl, author: uid, uploadDate: date, title: "New Video" },
          { merge: true },
        ).then(() => {
          // Виведення повідомлення про успішне завантаження в консоль
          console.log("Success upload file");
        });
      });
    });
  }
};
