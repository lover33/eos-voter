// @flow
import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Button } from 'semantic-ui-react';

export default class WalletPanelButtonLogout extends Component<Props> {
  render() {
    return (
      <I18n ns="wallet">
        {
          (t) => (
            <Button
              color="red"
              content={t('wallet_panel_wallet_remove')}
              fluid
              icon="trash"
              onClick={this.props.removeWallet}
            />
          )
        }
      </I18n>
    );
  }
}
