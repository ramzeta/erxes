import { IAction } from 'modules/automations/types';
import React from 'react';
import { ModalFooter } from 'modules/common/styles/main';
import { PerformMathForm } from './PerformMath';
import IfForm from 'modules/automations/containers/forms/actions/IfForm';
import Button from 'modules/common/components/Button';
import { __ } from 'modules/common/utils';
import BoardItemForm from 'modules/automations/containers/forms/actions/BoardItemForm';

type Props = {
  onSave: (contentId: string) => void;
  activeAction: IAction;
  addAction: (action: IAction, contentId?: string, actionId?: string) => void;
};

class DefaultForm extends React.Component<Props> {
  render() {
    const { activeAction, onSave } = this.props;

    return (
      <>
        <div>contents {activeAction.type}</div>
        <ModalFooter>
          <Button btnStyle="simple" type="button" icon="times-circle">
            {__('Cancel')}
          </Button>

          <Button
            btnStyle="success"
            icon="checked-1"
            onClick={onSave.bind(this, '')}
          >
            Saves
          </Button>
        </ModalFooter>
      </>
    );
  }
}

export const ActionForms = {
  default: DefaultForm,
  performMath: PerformMathForm,
  if: IfForm,
  boardItem: BoardItemForm
};
