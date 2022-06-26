export const state = () => ({
  authUser: null,
  deleteDialog: false,
  editDialog: false,
});

export const mutations = {
  UPDATE_DELETE_DIALOG(state, value) {
    state.deleteDialog = value;
  },
  UPDATE_EDIT_DIALOG(state, value) {
    state.editDialog = value;
  },
  UPDATE_AUTH_USER(state, obj) {
    const copyObj = JSON.parse(JSON.stringify(obj));
    state.authUser = copyObj;
  },
};
export const actions = {
  updateDeleteDialog(context, value) {
    context.commit("UPDATE_DELETE_DIALOG", value);
  },
  updateEditDialog(context, value) {
    context.commit("UPDATE_EDIT_DIALOG", value);
  },
  updateAuthUser(context, obj) {
    context.commit("UPDATE_AUTH_USER", obj);
  },
};
export const getters = {
  authUser(state) {
    return state.authUser;
  },
  deleteDialog(state) {
    return state.deleteDialog;
  },
  editDialog(state) {
    return state.editDialog;
  },
};
