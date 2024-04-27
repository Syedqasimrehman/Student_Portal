import {useDropzone}from "react-dropzone"
import React ,{useState } from "react";

   

const Dropzoneimage = () => {
  
    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    const onDrop = (acceptedFiles) => {
      // Do something with the files
      setUploadedFiles(acceptedFiles);
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
    });
  
    return (
      <div>
        <div {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some Images here, or click to select Images</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              style={{
                margin: "10px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded file ${index}`}
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
              <div style={textOverlayStyle}>
                {/* <p style={{ fontSize: '14px' }}>{file.name}</p> */}
                <p style={{ fontSize: "18px" }}>{formatBytes(file.size)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const dropzoneStyle = {
    border: "2px dashed #ccc",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    justifyContent: "center",
  };
  
  const textOverlayStyle = {
    position: "absolute",
    width: "125px",
    height: "35px",
    bottom: "25px",
    left: "11px",
    top : "11px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "5px",
  };
  
  function formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  
 
export default Dropzoneimage;