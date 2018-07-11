import React, { Component } from 'react';
import {TextInput, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
// import { Container, Header, Content, Form, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import {Field, reduxForm} from 'redux-form';
import { canNavToNext } from '../../utils';
import Swipeout from 'react-native-swipeout';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import {Ionicons} from '@expo/vector-icons';

class RenderField extends Component {
  render() {
    const { meta: { touched, error, active, visited } } = this.props;
      return (
        <View style={!visited ? null : (visited && error) || (error && active) ? styles.hasDanger : styles.success}>
          <Item floatingLabel>
            <Label>{error && touched && !active ? error : this.props.label}</Label>
            <Input
              onFocus={this.props.input.onFocus}
              onBlur={this.props.input.onBlur}
              onChange={this.props.input.onChange}
              keyboardType={this.props.input.name === 'email' ? 'email-address' : 'default' }
              secureTextEntry={this.props.input.name === 'confirmPass' || this.props.input.name === 'password' ? true : false }
            />
          </Item>
        </View>
      );
  }
}

export default class LoginView extends Component {
  submit() {
    const { validate, navigation:{navigate} } = this.props;
    // console.log(validate);
    this.props.authenticateUser(validate);
    // navigate('camera');
  }


  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Login</Title>
          </Body>
          <Right>
          </Right>
          </Header>
        <Content style={styles.content}>
          <Form>
              <Field name="username" label="Username" component={RenderField} />
              <Field name="password" label="Password" component={RenderField} />
          </Form>
          <Button style={styles.submitBtn} onPress={() => this.submit()}>
            <Text style={styles.btnFont}>Login</Text>
          </Button>
        </Content>
      </View>
    );
  }
}
