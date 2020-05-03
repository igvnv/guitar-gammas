import { put, call, delay } from 'redux-saga/effects';
import { fetchGammas } from './sagas';
import * as action from './actions';
import { LoadingState } from 'types/LoadingState';
import Gamma from 'types/Gamma';

describe('Sagas', () => {
  describe('fetchGammas (success)', () => {
    const generator = fetchGammas();
    const gammasList: Gamma[] = [
      { id: 1, name: 'First gamma', frets: [] },
      { id: 2, name: 'Second gamma', frets: [] },
    ];

    it('changes loading state to LOADING', () => {
      expect(generator.next().value).toEqual(
        put(action.setGammasLoadingState(LoadingState.LOADING))
      );
    });

    it('waits for 1 second (temporary functional, must be removed)', () => {
      expect(generator.next().value).toEqual(delay(1000));
    });

    it('requests gammas from local storage', () => {
      expect(generator.next().value).toEqual(
        call([localStorage, 'getItem'], 'gammasList')
      );
    });

    it('fetches received gammas', () => {
      expect(generator.next(JSON.stringify(gammasList)).value).toEqual(
        put(action.receiveGammas(gammasList))
      );
    });

    it('changes loading state to DONE', () => {
      expect(generator.next().value).toEqual(
        put(action.setGammasLoadingState(LoadingState.DONE))
      );
    });
  });

  describe('fetchGammas (error)', () => {
    const generator = fetchGammas();
    const error = new Error('SOmething went wrong');

    it('changes loading state to LOADING', () => {
      expect(generator.next().value).toEqual(
        put(action.setGammasLoadingState(LoadingState.LOADING))
      );
    });

    it('waits for 1 second (temporary functional, must be removed)', () => {
      expect(generator.next().value).toEqual(delay(1000));
    });

    it('requests gammas from local storage', () => {
      expect(generator.next().value).toEqual(
        call([localStorage, 'getItem'], 'gammasList')
      );
    });

    it('changes loading state to FAILED', () => {
      expect(generator.throw(error).value).toEqual(
        put(action.setGammasLoadingState(LoadingState.FAILED))
      );
    });

    it('prints error in console', () => {
      expect(generator.next().value).toEqual(call(console.error, error));
    });
  });
});
