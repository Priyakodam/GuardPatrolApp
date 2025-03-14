import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    setImage(imageData);
  };

  const handleStartCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error("Error accessing camera: ", err));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Profile</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile No</label>
          <input
            type="tel"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="mb-3 text-center">
          {!image && (
            <>
              <video ref={videoRef} className="mb-2" style={{ width: "100%" }} />
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={handleStartCamera}
              >
                Start Camera
              </button>
              <button
                type="button"
                className="btn btn-success ms-2 mb-2"
                onClick={handleCapture}
              >
                Capture Image
              </button>
            </>
          )}
          {image && (
            <div>
              <img src={image} alt="Captured" className="img-fluid mb-2" />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setImage(null)}
              >
                Retake
              </button>
            </div>
          )}
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
