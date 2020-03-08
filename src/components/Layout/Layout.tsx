import React, { useState } from 'react';

const Layout: React.FC = () => {
  const [displayDeleteAlert, setDisplayDeleteAlert] = useState<boolean>(false);

  return (
    <>
      {displayDeleteAlert && (
        <div className="alert">
          <p className="alert__message">Удалить гамму?</p>

          <div className="alert__buttons-list">
            <button
              type="button"
              className="alert__button alert__button_main"
              onClick={() => setDisplayDeleteAlert(false)}
            >
              Не удалять
            </button>
            <button
              type="button"
              className="alert__button"
              onClick={() => setDisplayDeleteAlert(false)}
            >
              Удалить
            </button>
          </div>
        </div>
      )}

      <div className="page-container page-container_centred">
        <div className="gammas-page">
          <div className="gammas-page__add-new">
            <button className="gammas-page__add-button">
              <span className="gammas-page__add-button-icon"></span>
              Добавить гамму
            </button>
          </div>

          <div className="gammas-page__gammas-list">
            <div className="gammas-list__empty-list-message">
              У вас нет сохранённых гамм
            </div>

            <ul className="gammas-list">
              <li className="gammas-list__item">
                <div className="gammas-list-item">
                  <span className="gammas-list-item__label">
                    Ля минор, первая позиция
                  </span>
                  <div className="gammas-list-item__actions">
                    <span className="gammas-list-item__action-button gammas-list-item__action-button_edit" />
                    <span
                      className="gammas-list-item__action-button gammas-list-item__action-button_delete"
                      onClick={() => setDisplayDeleteAlert(true)}
                    />
                  </div>
                </div>
              </li>
              <li className="gammas-list__item">
                <div className="gammas-list-item">
                  <span className="gammas-list-item__label">
                    До мажор, гамма целиком
                  </span>
                  <div className="gammas-list-item__actions">
                    <span className="gammas-list-item__action-button gammas-list-item__action-button_edit" />
                    <span
                      className="gammas-list-item__action-button gammas-list-item__action-button_delete"
                      onClick={() => setDisplayDeleteAlert(true)}
                    />
                  </div>
                </div>
              </li>
              <li className="gammas-list__item">
                <div className="gammas-list-item">
                  <span className="gammas-list-item__label">
                    Аппликатура аккордов D
                  </span>
                  <div className="gammas-list-item__actions">
                    <span className="gammas-list-item__action-button gammas-list-item__action-button_edit" />
                    <span
                      className="gammas-list-item__action-button gammas-list-item__action-button_delete"
                      onClick={() => setDisplayDeleteAlert(true)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
