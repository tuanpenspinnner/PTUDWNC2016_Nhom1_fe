/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  ListGroup,
  Col,
  Row,
  Form,
  Input,
  CardHeader,
  ListGroupItem,
} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sierra Brooks',
      // eslint-disable-next-line global-require
      avatar: require('../../../assets/img/brand/user.png'),
    };
  }

  handleUpdate = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, avatar } = this.state;

    return (
      <div className="animated fadeIn">
        <Row style={{ justifyContent: 'center' }}>
          <Col xl="6">
            <Card>
              <CardHeader
                className="border-bottom text-center"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div>
                  <img
                    className="rounded-circle"
                    src={avatar}
                    alt={name}
                    width="100"
                  />
                </div>
                <div style={{}}>
                  <strong className="text-muted" style={{}}>
                    username
                  </strong>
                </div>
              </CardHeader>
              <CardBody>
                {/* thông tin cá nhân */}
                <Form onSubmit={this.handleUpdate}>
                  <ListGroup flush>
                    <ListGroupItem className="">
                      <strong className="text-muted d-block mb-2">
                        Họ và tên
                      </strong>
                      <Input
                        type="text"
                        placeholder="Họ và tên"
                        // autoComplete="username"
                        name="name"
                        autoFocus
                        onChange={(event) => {
                          // this.setState({ err: '' });
                          // this.setState({ username: event.target.value });
                        }}
                      />
                    </ListGroupItem>
                    <ListGroupItem className="">
                      <strong className="text-muted d-block mb-2">Email</strong>
                      <Input
                        type="text"
                        placeholder="Email"
                        // autoComplete="username"
                        name="email"
                        autoFocus
                        onChange={(event) => {
                          // this.setState({ err: '' });
                          // this.setState({ username: event.target.value });
                        }}
                      />
                    </ListGroupItem>
                    <ListGroupItem className="">
                      <strong className="text-muted d-block mb-2">
                        Số điện thoại
                      </strong>
                      <Input
                        type="text"
                        placeholder="Số điện thoại"
                        // autoComplete="username"
                        name="phone"
                        autoFocus
                        onChange={(event) => {
                          // this.setState({ err: '' });
                          // this.setState({ username: event.target.value });
                        }}
                      />
                    </ListGroupItem>
                    <Col xs="6" className="text-left">
                      <Button onClick={() => {}} color="link" className="px-1">
                        Reset mật khẩu
                      </Button>
                    </Col>
                    <Button
                      style={{ marginTop: '10px' }}
                      type="submit"
                      color="primary"
                    >
                      Update Account
                    </Button>
                  </ListGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
