export enum ScreenNames {
  signIn = 'SignIn',
  dashboard = 'Dashboard',
  accountDetail = 'AccountDetail',
  projectCreated = 'ProjectCreated',
  projectDetail = 'ProjectDetail',
  userMangager = 'UserManager',
}

export type RootStackList = {
  [ScreenNames.dashboard]: string;
  [ScreenNames.signIn]: string;
  [ScreenNames.accountDetail]: string;
  [ScreenNames.projectCreated]: string;
  [ScreenNames.projectDetail]: string;
  [ScreenNames.userMangager]: string;
};
