import React from 'react';
import { connect } from 'react-redux';

import Gamma from 'types/Gamma';
import Loading from 'components/Loading';
import { AppState } from 'store/reducer';
import { LoadingState } from 'types/LoadingState';
import * as action from 'store/actions';

type StateProps = {
  gammas: Gamma[];
  loadingState: LoadingState;
};

type DispatchProps = {
  fetchGammas: () => void;
};

type GammasListProps = StateProps & DispatchProps;

/**
 * Displays user's gammas list.
 */
const GammasList: React.FC<GammasListProps> = ({
  gammas = [],
  loadingState,
  fetchGammas,
}) => {
  if (loadingState === LoadingState.PRISTINE) {
    fetchGammas();
  }

  return (
    <>
      <div className="page-container page-container_centred">
        <div className="gammas-page">
          <div className="gammas-page__add-new">
            <button className="gammas-page__add-button">
              <span className="gammas-page__add-button-icon"></span>
              Добавить гамму
            </button>
          </div>

          {loadingState === LoadingState.LOADING && (
            <Loading message="Загружаю гаммы..." />
          )}

          {loadingState === LoadingState.FAILED && (
            <p>Не удалось загрузить сохранённые ранее гаммы...</p>
          )}

          {loadingState === LoadingState.DONE && (
            <div className="gammas-page__gammas-list">
              {!gammas.length && (
                <div className="gammas-list__empty-list-message">
                  У вас нет сохранённых гамм
                </div>
              )}

              {gammas.length > 0 && (
                <ul className="gammas-list">
                  {gammas.map((gamma) => (
                    <li className="gammas-list__item" key={gamma.id}>
                      <div className="gammas-list-item">
                        <span className="gammas-list-item__label">
                          {gamma.name}
                        </span>
                        <div className="gammas-list-item__actions">
                          <span className="gammas-list-item__action-button gammas-list-item__action-button_edit" />
                          <span className="gammas-list-item__action-button gammas-list-item__action-button_delete" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  return { gammas: state.gammas, loadingState: state.loadingState };
};

const mapDispatchToProps: DispatchProps = {
  fetchGammas: action.fetchGammas,
};

export default connect(mapStateToProps, mapDispatchToProps)(GammasList);
