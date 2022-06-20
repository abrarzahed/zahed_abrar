export const state = () => ({
  authUser: false,
});

export const mutations = {
  REMOVE_AUTH_USER(state) {
    state.authUser = null;
  },
};
export const actions = {
  async loginUser({ state }, input) {
    try {
      let apolloClient = this.app.apolloProvider.defaultClient;
      const response = await apolloClient.mutate({
        mutation: LoginUserQuery,
        variables: { input },
      });

      const data = response.data.loginUser;
      return data;
    } catch (err) {
      //console.log("get loginUser error", err.getMessage);
    }
  },
};
export const getters = {
  authUser(state) {
    return state.authUser;
  },
};
