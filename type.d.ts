type PersonData = {
  fullName: string;
  wingImage: any;
  profilePic: any;
  accuiredImage: any;
  percantage: number;
  activeStorkeColor: any;
  diamondShap: any;
};

type PersonState = {
  persons: PersonData[];
};

type AuthObject = {
  authObjectEmail: string;
  authObjectid: string;
  authObjectToken: string;
  loginPrompt: any;
};

type AuthState = {
  authUserObject: AuthObject;
};

type AuthAction = {
  type: string;
  authUserObject: AuthObject;
};

type UserObject = {
  name: string;
  userName: string;
  proifleAvatar: any;
};

type UserState = {
  authUser: UserObject;
};

type UserAction = {
  type: string;
  authUser: UserObject;
};

type DispatchType = (args: UserAction) => UserAction;
type Users = Array<UserObject>;

// type PersonAciton = {
//   type: string;
//   person: PersonData;
// };

// type DispatchType = (args: PersonAction) => PersonAction;
// type Persons = Array<PersonData>;
