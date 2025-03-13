import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckList.css";
import Navbar from "../Navbar/Navbar"

const Checklist = () => {
  const checklists = [
    {
      checkpoint: "Main Entrance",
      tasks: ["Check Fire Extinguisher", "Ensure Door is Locked", "Monitor Visitor Log"],
    },
    {
      checkpoint: "CCTV Room",
      tasks: ["Check CCTV Functionality", "Ensure No Unauthorized Access", "Record Observations"],
    },
    {
      checkpoint: "Emergency Exit",
      tasks: ["Inspect Emergency Exit", "Verify Security Lights", "Check for Obstructions"],
    },
    // {
    //   checkpoint: "Parking Area",
    //   tasks: ["Check for Unauthorized Vehicles", "Ensure Proper Lighting", "Inspect Security Barriers"],
    // },
    // {
    //   checkpoint: "Office Floor",
    //   tasks: ["Check Windows & Doors", "Ensure Fire Alarm is Working", "Monitor Suspicious Activity"],
    // },
    // {
    //   checkpoint: "Server Room",
    //   tasks: ["Verify Access Control", "Check Cooling System", "Ensure No Unauthorized Personnel"],
    // },
  ];

  // State to track checkbox status (resets on refresh)
  const [checkedTasks, setCheckedTasks] = useState({});

  // Handle checkbox toggle
  const handleCheckboxChange = (checkpoint, task) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [checkpoint]: {
        ...prev[checkpoint],
        [task]: !prev[checkpoint]?.[task],
      },
    }));
  };

  return (
    <>
    <Navbar />
    <div className="container mt-4 mb-5" style={{ paddingBottom: "100px" }}>
      <h1 className="text-center mb-4 checklist-title">Guard Patrol Checklists</h1>
      <div className="row">
        {checklists.map((checkpoint, i) => (
          <div key={i} className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="card checklist-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center">{checkpoint.checkpoint}</h5>
                <ul className="list-group list-group-flush">
                  {checkpoint.tasks.map((task, index) => (
                    <li key={index} className="list-group-item checklist-item">
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={checkedTasks[checkpoint.checkpoint]?.[task] || false}
                        onChange={() => handleCheckboxChange(checkpoint.checkpoint, task)}
                      />
                      <span className={checkedTasks[checkpoint.checkpoint]?.[task] ? "task-completed" : ""}>
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Checklist;
