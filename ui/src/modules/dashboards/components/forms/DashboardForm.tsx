import { __ } from 'modules/common/utils';
import RTG from 'react-transition-group';
import Wrapper from 'modules/layout/components/Wrapper';
import React from 'react';
import { FormControl } from 'modules/common/components/form';
import { BarItems, HeightedWrapper } from 'modules/layout/styles';
import Button from 'modules/common/components/Button';
import Icon from 'modules/common/components/Icon';
import PageContent from 'modules/layout/components/PageContent';
import { Link } from 'react-router-dom';
import {
  CenterFlexRow,
  BackButton,
  AutomationFormContainer,
  RightDrawerContainer,
  ActionBarButtonsWrapper
} from 'modules/automations/styles';
import ChartForm from 'modules/dashboards/components/forms/ChartForm';
import { Title } from 'modules/dashboards/styles';
// import { IAutomation } from '../../types';

// const plumb: any = jsPlumb;
// let instance;

// type Props = {
//   dashboard: IAutomation;
// automationNotes?: IAutomationNote[];
// save: (params: any) => void;
// saveLoading: boolean;
// id: string;
// history: any;
// queryParams: any;
// };

type State = {
  // name: string;
  currentTab: string;
  activeId: string;
  showDrawer: boolean;
  // showTrigger: boolean;
  // triggers: ITrigger[];
  // activeTrigger: ITrigger;
};

class DashboardForm extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    // const { dashboard = [] } = this.props;

    this.state = {
      // name: dashboard.name,
      activeId: '',
      currentTab: 'triggers',
      showDrawer: false
    };
  }

  toggleDrawer = (type: string) => {
    this.setState({ showDrawer: !this.state.showDrawer, currentTab: type });
  };

  // handleSubmit = () => {
  //   const { name, triggers, actions } = this.state;
  //   const { automation, save } = this.props;

  //   const generateValues = () => {
  //     const finalValues = {
  //       _id: automation._id,
  //       name,
  //       // status: isActive ? 'active' : 'draft',
  //       triggers: triggers.map(t => ({
  //         id: t.id,
  //         type: t.type,
  //         config: t.config,
  //         icon: t.icon,
  //         label: t.label,
  //         description: t.description,
  //         actionId: t.actionId,
  //         // style: jquery(`#trigger-${t.id}`).attr('style')
  //       })),
  //       actions: actions.map(a => ({
  //         id: a.id,
  //         type: a.type,
  //         nextActionId: a.nextActionId,
  //         config: a.config,
  //         icon: a.icon,
  //         label: a.label,
  //         description: a.description,
  //         // style: jquery(`#action-${a.id}`).attr('style')
  //       }))
  //     };

  //     return finalValues;
  //   };

  //   return save(generateValues());
  // };

  renderLeftActionBar() {
    // const { name } = this.state;

    return (
      <CenterFlexRow>
        <Link to={`/dashboards`}>
          <BackButton>
            <Icon icon="angle-left" size={20} />
          </BackButton>
        </Link>
        <Title>
          <FormControl
            name="name"
            // value={name}
            required={true}
            autoFocus={true}
          />
          <Icon icon="edit-alt" size={16} />
        </Title>
      </CenterFlexRow>
    );
  }

  renderRightActionBar() {
    // const { isActive } = this.state;

    return (
      <BarItems>
        <ActionBarButtonsWrapper>
          {
            <Button
              btnStyle="primary"
              size="small"
              icon={'check-circle'}
              onClick={this.toggleDrawer.bind(this, 'triggers')}
            >
              Create a chart
            </Button>
          }
          <Button
            btnStyle="success"
            size="small"
            icon={'check-circle'}
            // onClick={this.handleSubmit}
          >
            {__('Save')}
          </Button>
        </ActionBarButtonsWrapper>
      </BarItems>
    );
  }
  renderTabContent() {
    return <ChartForm />;
  }

  render() {
    return (
      <>
        <HeightedWrapper>
          <AutomationFormContainer>
            <Wrapper.Header
              title={'Reports'}
              breadcrumb={[{ title: __('Reports'), link: '/reports' }]}
            />
            <PageContent
              actionBar={
                <Wrapper.ActionBar
                  left={this.renderLeftActionBar()}
                  right={this.renderRightActionBar()}
                />
              }
              transparent={false}
            ></PageContent>
          </AutomationFormContainer>

          <RTG.CSSTransition
            in={this.state.showDrawer}
            timeout={300}
            classNames="slide-in-right"
            unmountOnExit={true}
          >
            <RightDrawerContainer>
              {this.renderTabContent()}
            </RightDrawerContainer>
          </RTG.CSSTransition>
        </HeightedWrapper>
      </>
    );
  }
}

export default DashboardForm;
