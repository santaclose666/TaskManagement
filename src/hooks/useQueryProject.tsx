import {useSelector} from 'react-redux';
import {Project} from '../models/task';

const useQueryProject = (id: string) => {
  const {projects} = useSelector((state: any) => state.projects);

  return projects.filter((item: Project) => item.userId === id).reverse();
};

export default useQueryProject;
