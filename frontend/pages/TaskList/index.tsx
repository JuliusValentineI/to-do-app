import { fetchData } from "./data";
import Tasks from '../../components/Task/Tasks'
import '../../styles/globals.css'
import {TaskArray} from '../../types/types'

interface TaskListProps { 
	tasks: TaskArray
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  let itemsp = JSON.parse(tasks); // ignore error

  return (
    <>
			<Tasks tasks={itemsp} />
		</>
	)
};

export async function getStaticProps() {
  const tasks = await fetchData();

  return {
    props: {
      tasks,
    },
  };
}

export default TaskList;
