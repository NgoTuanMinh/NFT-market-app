import * as React from 'react';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { dialogActions, selectContentDialog, selectOnSubmitDialog, selectVisibleDialog } from '../../../store/reducers/dialogReducer';

const DialogCommon = () => {

  const dispatch = useDispatch();

  const hideDialog = () => {
    dispatch(dialogActions.hideDialog());
  }

  const visible = useSelector(selectVisibleDialog);
  const onSubmit = useSelector(selectOnSubmitDialog);
  const content = useSelector(selectContentDialog);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{content?.title && content?.title}</Dialog.Title>

        <Dialog.Content>
          <Paragraph>{content?.content && content?.content}</Paragraph>
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          {onSubmit && <Button onPress={onSubmit}>{content?.titleSubmit || 'Ok'}</Button>}
        </Dialog.Actions>

      </Dialog>
    </Portal>
  );
};

export default DialogCommon;