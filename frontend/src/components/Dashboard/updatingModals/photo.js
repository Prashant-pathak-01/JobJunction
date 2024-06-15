import React, { useState } from "react";
import { app } from "../../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { uploadPhotoMongoDB } from "../../../APIs/user";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ModalComponent = ({ email, onClose }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const uploadPhotoFileFirebase = () => {
    if (!file) {
      console.error("No file selected.");
      return;
    }

    setUploading(true);

    const storage = getStorage(app);
    const storageRef = ref(storage, "Photo/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Error uploading file:", error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async (downloadURL) => {
            setUrl(downloadURL);
            try {
              const res = await uploadPhotoMongoDB({
                Email: email,
                url: downloadURL,
              });
              if (res && res.data && res.data.status === 1) {
                setConfirmation(true);
                setOpen(true);
                setTimeout(() => {
                  onClose();
                }, 2500);
              } else {
                console.error("Error uploading file to MongoDB:", res);
              }
            } catch (error) {
              console.error("Error uploading file to MongoDB:", error);
            } finally {
              setUploading(false);
            }
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            setUploading(false);
          });
      }
    );
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Photo Update</h2>
        <div className="mb-4">
          <input type="file" onChange={handleFileChange} />
        </div>
        <p className="text-red-500 text-sm ml-4 ">
          * File type should be png/jpg/jpeg and size should be less than 1 MB.
        </p>
        <div className="flex justify-end mt-4">
          {file &&
          file.size <= 1 * 1024 * 1024 &&
          file.type.includes("image/") ? (
            <button
              onClick={uploadPhotoFileFirebase}
              className={`bg-blue-500 text-white p-2 pl-4 pr-4 rounded-md mr-2 hover:bg-blue-600 ${
                uploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-white p-2 pl-4 pr-4 rounded-md mr-2 cursor-not-allowed"
            >
              Upload
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 pl-4 pr-4 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Photo updated successfully !
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ModalComponent;
