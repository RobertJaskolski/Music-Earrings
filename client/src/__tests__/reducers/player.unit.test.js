import playerNotAuthReducer, {
  playerNotAuthTypes,
} from '../../reducers/playerNotAuth';

const INIT_STATE = { track: {}, type: '' };

describe('Player reducer', () => {
  test('should return default state', () => {
    const newState = playerNotAuthReducer(undefined, {});
    expect(newState).toEqual(INIT_STATE);
  });

  test('should return new track', () => {
    const newTrack = { type: 'Track', track: { name: 'new track' } };
    const newState = playerNotAuthReducer(undefined, {
      type: playerNotAuthTypes.PLAYER_NOT_AUTH_ADD_TRACK,
      payload: newTrack,
    });
    expect(newState).toEqual({ ...newTrack.type, ...newTrack.track });
  });
});
