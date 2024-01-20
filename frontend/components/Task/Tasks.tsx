import React, { useState } from "react";
import { TaskArray } from "../../types/types"

interface TasksProps { 
	tasks: TaskArray
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
	const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      {tasks && tasks.length > 0 ? (
        tasks.map((item) => (
          <div
            key={item.pk}
            id={item.pk}
            className="bg-white shadow-md p-4 border rounded-lg transition-transform transform hover:scale-105"
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <h2 className="text-xl font-bold mb-2">{item.fields.name}</h2>
            <p
              className={`text-gray-600 mb-4 ${showFullDescription ? "whitespace-normal" : "whitespace-nowrap overflow-hidden"}`}
            >
              {item.fields.description}
            </p>
            <span className="text-blue-500">{item.fields.state}</span>
          </div>
        ))
      ) : (
        <p> Not empty Task avalible </p>
      )}
    </div>
  );
};

export default Tasks;
