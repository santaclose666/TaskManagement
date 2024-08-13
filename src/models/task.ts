import {getCurrDate} from '../util/datetime';

export type task = {
  id: string;
  taskName: string;
  isCompleted: boolean;
};

export type state = {
  complete: number;
  notComplete: number;
};

export class Project {
  userId: string;
  id: string;
  projectName: string;
  tasks: task[];
  taskState: state;
  dateCreated: string;

  constructor(userId: string, id: string, projectName: string, tasks: task[]) {
    this.userId = userId;
    this.id = id;
    this.projectName = projectName;
    this.tasks = tasks;
    this.taskState = this.tasksUpdate(tasks);
    this.dateCreated = getCurrDate();
  }

  tasksUpdate(tasks: task[]): state {
    let notYetCompleted = 0;

    tasks.forEach(item => {
      if (!item.isCompleted) {
        notYetCompleted++;
      }
    });

    return {
      complete: tasks.length - notYetCompleted,
      notComplete: notYetCompleted,
    };
  }
}
