// @flow
import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Accordion, Button, Header, Menu, Segment } from 'semantic-ui-react';

import WalletPanelFormNode from './Form/Node';
import WalletPanelButtonLock from './Button/Lock';
import WalletPanelButtonRemove from './Button/Remove';
import WalletPanelButtonStake from './Button/Stake';

export default class WalletPanelUnlocked extends Component<Props> {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const {
      actions,
      accounts,
      balances,
      keys,
      validate,
      settings,
      system
    } = this.props;
    return (
      <I18n ns="wallet">
        {
          (t) => (
            <div>
              {(keys.temporary)
                ? (
                  <WalletPanelButtonRemove
                    removeWallet={actions.removeWallet}
                  />
                )
                : (
                  <Segment vertical>
                    <WalletPanelButtonLock
                      lockWallet={actions.lockWallet}
                    />
                    <Accordion
                      as={Menu}
                      fluid
                      vertical
                    >
                      <Menu.Item>
                        <Accordion.Title
                          active={activeIndex === 0}
                          content={t('wallet_actions')}
                          index={0}
                          onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 0}>
                          <Segment basic>
                            <WalletPanelButtonStake
                              actions={actions}
                              accounts={accounts}
                              balances={balances}
                              validate={validate}
                              settings={settings}
                              system={system}
                            />
                          </Segment>
                        </Accordion.Content>
                      </Menu.Item>

                      <Menu.Item>
                        <Accordion.Title
                          active={activeIndex === 1}
                          content={t('wallet_actions_dangerous')}
                          index={1}
                          onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 1}>
                          <Segment basic>
                            <WalletPanelButtonRemove
                              removeWallet={actions.removeWallet}
                            />
                          </Segment>
                        </Accordion.Content>
                      </Menu.Item>
                    </Accordion>
                  </Segment>
                )
              }
            </div>
          )
        }
      </I18n>
    );
  }
}
