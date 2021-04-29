import authReducer, { authTypes } from '../../reducers/auth';

const INIT_STATE = {
  isAuthorized: false,
  checking: true,
};

describe('Auth reducer', () => {
  test('should return default state', () => {
    const newState = authReducer(undefined, {});
    expect(INIT_STATE).toEqual(newState);
  });

  test('should return login state', () => {
    const newState = authReducer(undefined, { type: authTypes.LOGIN_AUTH });
    expect(newState).toEqual({ isAuthorized: true, checking: false });
  });

  test('should return logout state', () => {
    const newState = authReducer(undefined, { type: authTypes.LOGOUT_AUTH });
    expect(newState).toEqual({ isAuthorized: false, checking: false });
  });

  test('should return checking state', () => {
    const newState = authReducer(undefined, { type: authTypes.CHECKING });
    expect(newState).toEqual({ ...newState, checking: true });
  });
});
