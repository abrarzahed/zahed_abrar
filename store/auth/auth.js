export const state = () => ({
  deleteDialog: false,
  editDialog: false,
  snackbar: false,
});

export const mutations = {
  UPDATE_DELETE_DIALOG(state, value) {
    state.deleteDialog = value;
  },
  UPDATE_EDIT_DIALOG(state, value) {
    state.editDialog = value;
  },

  UPDATE_SNACKBAR(state, value) {
    state.snackbar = value;
  },
};
export const actions = {
  updateDeleteDialog(context, value) {
    context.commit("UPDATE_DELETE_DIALOG", value);
  },
  updateEditDialog(context, value) {
    context.commit("UPDATE_EDIT_DIALOG", value);
  },

  updateSnackbar(context, value) {
    context.commit("UPDATE_SNACKBAR", value);
  },
};
export const getters = {
  deleteDialog(state) {
    return state.deleteDialog;
  },
  editDialog(state) {
    return state.editDialog;
  },
  getSnackbar(state) {
    return state.snackbar;
  },
};
