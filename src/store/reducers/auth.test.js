import reducer from "./auth";
import * as actionTypes from "../actions/actionsTypes";

describe("auth reducer", () => {
  // beforeEach()

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        { type: actionTypes.AUTH_SUCCESS, idToken: "some", userId: "id" }
      )
    ).toEqual({
      token: "some",
      userId: "id",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
