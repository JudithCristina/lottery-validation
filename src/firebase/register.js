import {
  auth,
  db,
} from './config';

export const getListRegister = (setRegisterList) => {
  return db.collection('user')
    .onSnapshot((querySnapshot) => {
      const groupList = [];
      querySnapshot.forEach((doc) => {
        groupList.push(doc.data());
      });
      setRegisterList(groupList);
    });
};
