import modalReducer, { showModal, closeModal } from './modalSlice';
import { ModalState } from './modalSlice';

describe('modalSlice', () => {
  const initialState: ModalState = {
    modalId: "",
    visible: false,
  };

  it('should return the initial state', () => {
    expect(modalReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle showModal', () => {
    const modalId = 'testModal';
    const expectedState: ModalState = {
      modalId,
      visible: true,
    };
    expect(modalReducer(initialState, showModal(modalId))).toEqual(expectedState);
  });

  it('should handle closeModal', () => {
    const modifiedState: ModalState = {
      modalId: 'testModal',
      visible: true,
    };
    expect(modalReducer(modifiedState, closeModal())).toEqual(initialState);
  });
});