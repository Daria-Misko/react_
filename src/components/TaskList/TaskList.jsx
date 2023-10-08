import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import "./TaskList.css";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

const tasksState = [
	{ id: "id-1", task: "Task1" },
	{ id: "id-2", task: "Task2" },
	{ id: "id-3", task: "Task3" },
	{ id: "id-4", task: "Task4" },
];

const TaskList = ({ theme }) => {
	const [tasks, setTasks] = useState(
		() => JSON.parse(localStorage.getItem("tasks")) ?? tasksState
	);
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	useLayoutEffect(() => {
		document.title = `You have ${tasks.length} tasks`;
	}, [tasks]);

	const addTask = (name) => {
		const newTask = {
			task: name,
			id: nanoid(),
		};
		setTasks((prevState) => [...prevState, newTask]);
		toast("Good Job!", {
			icon: "👏",
		});
	};

	const handleDeleteTask = useCallback((taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
		toast.success("You deleted a task!");
	}, []);

	const renderedTasks = useMemo(() => {
		return tasks.map((task) => (
			<li
				key={task.id}
				className={`list-group-item list-group-item-action list-item ${
					theme === "light"
						? "list-group-item-primary"
						: "list-group-item-light"
				}`}
			>
				{task.task}
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => handleDeleteTask(task.id)}
				>
					Delete
				</button>
			</li>
		));
	}, [tasks, handleDeleteTask, theme]);

	return (
		<div className="task-list-wrapper">
			<p className="title">TO DO LIST</p>
			<TaskInput placeholder={"New task"} addTask={addTask} />
			<ul className="list-group list-group-flush list-wrapper">
				{renderedTasks}
			</ul>
		</div>
	);
};

export { TaskList };
