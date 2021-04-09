import {
  auth,
  db,
} from './config';

export const getListRegister = (setRegisterList) => {
  return db.collection('user')
    .onSnapshot((querySnapshot) => {
      const groupList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const{id} = doc
        groupList.push({...data,id});
      });
      setRegisterList(groupList);
    });
};
export const updateValid = async (valid, id) => {
  console.log('hola mundo',valid, id)
  const doc = await db.collection('user').doc(id);
  await doc.update({
    valid: valid,
  });
};
