import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfirmDialog from './ConfirmDialog';

jest.useFakeTimers();

describe('ConfirmDialog', () => {
  it('displays message', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { container, getByText } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    getByText('Confirm message');
    expect(container).toMatchSnapshot();
  });

  it('has default text for YES button', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(getByTestId('yes-button').innerHTML).toEqual('Да');
  });

  it('has default text for NO button', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(getByTestId('no-button').innerHTML).toEqual('Нет');
  });

  it('can customize YES button', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        yesButton="Yes!"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(getByTestId('yes-button').innerHTML).toEqual('Yes!');
  });

  it('has default text for NO button', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(getByTestId('no-button').innerHTML).toEqual('Нет');
  });

  it('can customize NO button', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        noButton="No!"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(getByTestId('no-button').innerHTML).toEqual('No!');
  });

  it('calls onConfirm when YES button is clicked', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(getByTestId('yes-button'));
    expect(onConfirm).toBeCalledTimes(0);

    jest.runAllTimers();

    expect(onConfirm).toBeCalledTimes(1);
    expect(onCancel).toBeCalledTimes(0);
  });

  it('calls onCancel when NO button is clicked', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(getByTestId('no-button'));
    expect(onCancel).toBeCalledTimes(0);

    jest.runAllTimers();

    expect(onConfirm).toBeCalledTimes(0);
    expect(onCancel).toBeCalledTimes(1);
  });

  it('calls onConfirm after timeout', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const { getByTestId } = render(
      <ConfirmDialog
        message="Confirm message"
        onCancel={onCancel}
        onConfirm={onConfirm}
        animationDuration={2000}
      />
    );

    fireEvent.click(getByTestId('no-button'));

    jest.runTimersToTime(1900);
    expect(onCancel).toBeCalledTimes(0);

    jest.runTimersToTime(100);
    expect(onCancel).toBeCalledTimes(1);
  });
});
