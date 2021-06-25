export default {
  register: value => {
    console.log('register', value);

    return 'id';
  },
  remove: id => {
    console.log('remove', id);
  },
};
