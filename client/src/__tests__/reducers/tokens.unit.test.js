import { tokensTypes } from '../../reducers/tokens';
import tokenReducer from '../../reducers/tokens/';

const INIT_STATE = {
  accessToken: '',
  refreshToken: '',
};

describe('Token reducer', () => {
  test('should return default state', () => {
    const newState = tokenReducer(undefined, {});

    expect(newState).toEqual(INIT_STATE);
  });

  test('should return new tokens if we receiving type and payload', () => {
    const newTokens = { accessToken: 'new Token', refreshToken: 'new Token' };
    const newState = tokenReducer(undefined, {
      type: tokensTypes.REFRESH_TOKENS,
      payload: { ...newTokens },
    });

    expect(newState).toEqual(newTokens);
  });

  test('should return default state if we receiving type', () => {
    const oldTokens = { accessToken: 'old Token', refreshToken: 'old Token' };
    const newState = tokenReducer(
      { ...oldTokens },
      {
        type: tokensTypes.CLEAR_TOKENS,
      }
    );
    expect(newState).toEqual(INIT_STATE);
  });
});
