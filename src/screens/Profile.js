import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {initLogout} from '../store/actions/logoutAction';
import styles from '../styles/ProfileStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PastOrder from '../components/ProfileComponent/PastOrder';

const Icon = MaterialCommunityIcons;

class Profile extends Component {
  state = {
    showHeader: false,
    showMyAccount: false,
    showPayments: false,
  };
  render() {
    const {user} = this.props;
    const {
      name = 'sumit saraff',
      mobile = '9734324568',
      email = 'sgwrgfdd@gmail.com',
    } = this.props;
    const {showHeader, showMyAccount, showPayments} = this.state;
    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={e => {
            if (e.nativeEvent.contentOffset.y <= 75) {
              if (showHeader === true) this.setState({showHeader: false});
            } else {
              if (showHeader === false) this.setState({showHeader: true});
            }
          }}
          style={[styles.main]}>
          <View style={[styles.headerBox]}>
            <View style={[styles.nameBox]}>
              <Text style={[styles.name]}>{`${name}`.toUpperCase()}</Text>
              <TouchableOpacity>
                <Text style={[styles.edit]}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.detailBox]}>
              <Text style={[styles.mobileNo]}>{mobile}</Text>
              <Text style={[styles.dot]} />
              <Text style={[styles.emailID]}>{email}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.eachComponentBox]}
            onPress={() => this.setState({showMyAccount: !showMyAccount})}>
            <View>
              <Text style={[styles.boxTitle]}>My Account</Text>
              <Text style={[styles.boxDetails]}>
                {`Addresses, Favourites & Offers`}
              </Text>
            </View>
            <Icon
              name={showMyAccount ? 'chevron-up' : 'chevron-down'}
              style={[styles.icons]}
            />
          </TouchableOpacity>
          {showMyAccount && (
            <>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Addresses')}
                style={[styles.eachAccordionBox, {borderTopWidth: 0.5}]}>
                <View style={[styles.accordionDetails]}>
                  <Icon
                    name="home-outline"
                    style={[styles.accordionDetailIcon]}
                  />
                  <Text style={[styles.accordionDetailText]}>
                    Manage Addresses
                  </Text>
                </View>
                <Icon name="chevron-right" style={[styles.icons]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Favourites')}
                style={[styles.eachAccordionBox]}>
                <View style={[styles.accordionDetails]}>
                  <Icon
                    name="heart-outline"
                    style={[styles.accordionDetailIcon]}
                  />
                  <Text style={[styles.accordionDetailText]}>Favourites</Text>
                </View>
                <Icon name="chevron-right" style={[styles.icons]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Offers')}
                style={[styles.eachAccordionBox]}>
                <View style={[styles.accordionDetails]}>
                  <Icon
                    name="file-percent-outline"
                    style={[styles.accordionDetailIcon]}
                  />
                  <Text style={[styles.accordionDetailText]}>Offers</Text>
                </View>
                <Icon name="chevron-right" style={[styles.icons]} />
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity
            onPress={() => this.setState({showPayments: !showPayments})}
            style={[styles.eachComponentBox]}>
            <View>
              <Text style={[styles.boxTitle]}>{`Payments & Refunds`}</Text>
              <Text style={[styles.boxDetails]}>
                {`Refund Status & Payment Modes`}
              </Text>
            </View>
            <Icon
              name={showPayments ? 'chevron-up' : 'chevron-down'}
              style={[styles.icons]}
            />
          </TouchableOpacity>
          {showPayments && (
            <>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('RefundStatus')}
                style={[styles.eachAccordionBox, {borderTopWidth: 0.5}]}>
                <View style={[styles.accordionDetails]}>
                  <Icon
                    name="credit-card-refund-outline"
                    style={[styles.accordionDetailIcon]}
                  />
                  <Text style={[styles.accordionDetailText]}>
                    Refund Status
                  </Text>
                </View>
                <Icon name="chevron-right" style={[styles.icons]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PaymentModes')}
                style={[styles.eachAccordionBox]}>
                <View style={[styles.accordionDetails]}>
                  <Icon
                    name="credit-card-outline"
                    style={[styles.accordionDetailIcon]}
                  />
                  <Text style={[styles.accordionDetailText]}>
                    Payment Modes
                  </Text>
                </View>
                <Icon name="chevron-right" style={[styles.icons]} />
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity
            style={[styles.eachComponentBox]}
            onPress={() => this.props.navigation.navigate('SwiggyMoney')}>
            <View>
              <Text style={[styles.boxTitle]}>Swiggy Money</Text>
              <Text style={[styles.boxDetails]}>
                {`View Account Balance & Transactions History`}
              </Text>
            </View>
            <Icon name="chevron-right" style={[styles.icons]} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Help')}
            style={[styles.eachComponentBox]}>
            <View>
              <Text style={[styles.boxTitle]}>Help</Text>
              <Text style={[styles.boxDetails]}>{`FAQs & Links`}</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icons]} />
          </TouchableOpacity>

          <View style={[styles.seperator]}>
            <Text style={[styles.seperatorTitle]}>PAST ORDERS</Text>
          </View>

          <View style={[styles.pastOrders]}>
            <PastOrder />
          </View>

          <View style={[styles.seperator, {height: 25}]}></View>

          <TouchableOpacity
            style={[styles.logoutButtonBox]}
            onPress={() => this.props.initLogout()}>
            <Text style={[styles.logoutText]}>LOGOUT</Text>
            <Icon name="power" style={[styles.logoutIcon]} />
          </TouchableOpacity>

          <View style={[styles.footer]}>
            <Text style={[styles.footerTitle]}>App version 3.49.2(926)</Text>
          </View>
        </ScrollView>
        {showHeader && (
          <View style={[styles.header]}>
            <Text style={[styles.headerTitle]}>MY ACCOUNT</Text>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {initLogout})(Profile);
