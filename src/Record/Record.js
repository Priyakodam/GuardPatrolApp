import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { Button, Card, Nav, Form } from "react-bootstrap";
import { Video, Mic, StopCircle, Play, FolderOpen } from "lucide-react";
import Navbar from "../Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";

const Record = () => {
  const [recordType, setRecordType] = useState("audio");
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [selectedFileAudio, setSelectedFileAudio] = useState(null);
  const [selectedFileVideo, setSelectedFileVideo] = useState(null);

  // Handle file selection
  const handleFileChange = (event, type) => {
    const fileURL = URL.createObjectURL(event.target.files[0]);
    if (type === "audio") {
      setSelectedFileAudio(fileURL);
      setRecordedAudio(null);
    } else {
      setSelectedFileVideo(fileURL);
      setRecordedVideo(null);
    }
  };

  return (
    <>
    <Navbar />
    <div className="home-page d-flex flex-column align-items-center justify-content-center min-vh-100 p-4">
      <Card className="w-100 max-w-600 p-4 shadow border-0 rounded bg-white">
        <Card.Body>
          <h2 className="text-center mb-4 fw-bold text-primary">Recorder</h2>

          {/* Tab Navigation */}
          <Nav variant="tabs" className="mb-3">
            <Nav.Item className="w-50">
              <Nav.Link
                className={`fw-bold text-center ${recordType === "audio" ? "active bg-primary text-white" : "text-dark"}`}
                onClick={() => setRecordType("audio")}
              >
                <Mic className="me-2" /> Audio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-50">
              <Nav.Link
                className={`fw-bold text-center ${recordType === "video" ? "active bg-primary text-white" : "text-dark"}`}
                onClick={() => setRecordType("video")}
              >
                <Video className="me-2" /> Video
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Audio Recording Section */}
          {recordType === "audio" && (
            <ReactMediaRecorder
              audio
              onStop={(blobUrl) => setRecordedAudio(blobUrl)}
              render={({ startRecording, stopRecording, status }) => (
                <div className="text-center">
                  <p className="mb-3 fw-semibold text-info">Status: {status}</p>

                  {!isRecording ? (
                    <Button
                      className="btn-primary mb-3"
                      onClick={() => {
                        startRecording();
                        setIsRecording(true);
                        setRecordedAudio(null);
                        setSelectedFileAudio(null);
                      }}
                    >
                      <Play className="me-2" /> Start Audio Recording
                    </Button>
                  ) : (
                    <Button
                      className="btn-danger mb-3"
                      onClick={() => {
                        stopRecording();
                        setIsRecording(false);
                      }}
                    >
                      <StopCircle className="me-2" /> Stop Recording
                    </Button>
                  )}

                  {/* Upload Audio File */}
                  <Form.Group className="mb-3">
                    <Form.Label className="btn btn-outline-secondary">
                      <FolderOpen className="me-2" /> Upload Audio
                      <Form.Control type="file" accept="audio/*" hidden onChange={(e) => handleFileChange(e, "audio")} />
                    </Form.Label>
                  </Form.Group>

                  {/* Preview Recorded & Uploaded Audio */}
                  {recordedAudio && (
                    <div className="mt-3">
                      <h6 className="fw-semibold">Recorded Audio:</h6>
                      <audio src={recordedAudio} controls className="w-100 mb-2" />
                    </div>
                  )}
                  {selectedFileAudio && (
                    <div className="mt-3">
                      <h6 className="fw-semibold">Uploaded Audio:</h6>
                      <audio src={selectedFileAudio} controls className="w-100 mb-2" />
                    </div>
                  )}
                </div>
              )}
            />
          )}

          {/* Video Recording Section */}
          {recordType === "video" && (
            <ReactMediaRecorder
              video
              audio
              onStop={(blobUrl) => setRecordedVideo(blobUrl)}
              render={({ startRecording, stopRecording, status }) => (
                <div className="text-center">
                  <p className="mb-3 fw-semibold text-info">Status: {status}</p>

                  {!isRecording ? (
                    <Button
                      className="btn-primary mb-3"
                      onClick={() => {
                        startRecording();
                        setIsRecording(true);
                        setRecordedVideo(null);
                        setSelectedFileVideo(null);
                      }}
                    >
                      <Play className="me-2" /> Start Video Recording
                    </Button>
                  ) : (
                    <Button
                      className="btn-danger mb-3"
                      onClick={() => {
                        stopRecording();
                        setIsRecording(false);
                      }}
                    >
                      <StopCircle className="me-2" /> Stop Recording
                    </Button>
                  )}

                  {/* Upload Video File */}
                  <Form.Group className="mb-3">
                    <Form.Label className="btn btn-outline-secondary">
                      <FolderOpen className="me-2" /> Upload Video
                      <Form.Control type="file" accept="video/*" hidden onChange={(e) => handleFileChange(e, "video")} />
                    </Form.Label>
                  </Form.Group>

                  {/* Preview Recorded & Uploaded Video */}
                  {recordedVideo && (
                    <div className="mt-3">
                      <h6 className="fw-semibold">Recorded Video:</h6>
                      <video src={recordedVideo} controls className="w-100 rounded mb-2" />
                    </div>
                  )}
                  {selectedFileVideo && (
                    <div className="mt-3">
                      <h6 className="fw-semibold">Uploaded Video:</h6>
                      <video src={selectedFileVideo} controls className="w-100 rounded mb-2" />
                    </div>
                  )}
                </div>
              )}
            />
          )}
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Record;
