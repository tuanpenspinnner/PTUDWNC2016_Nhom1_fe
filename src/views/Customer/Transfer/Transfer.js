/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Button,
  Card,
  Label,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Col,
  Tooltip,
  Form,
  Input,
  InputGroupAddon,
  Row,
  FormGroup,
  CardHeader,
  InputGroup,
  Collapse,
  CardFooter,
} from 'reactstrap';

import CDataTable from '../../components/table/CDataTable';
import usersData from '../../components/table/UsersData';

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchBankCode: false, //state chọn gửi liên ngân hàng hoặc nội bộ
      collapse: false, //state collapse open khi tồn tại số tài khoản người nhận
      modal: false, //state modal open khi nhấn chuyển tiền, yêu cầu người dùng nhập code từ email
      tooltipOpen: [false, false],
      nameReceiver: '',
      accountNumberReceiver: '',
    };
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  // chọn chuyển khoản nội bộ hay liên ngân hàng
  handleSwitchChange = async (ischecked) => {
    await this.setState({ switchBankCode: ischecked });
  };
  // get infor người nhận khi nhập stk thanh toán
  handleCommitAccountNumber = (e) => {
    this.setState({ collapse: !this.state.collapse });
    e.preventDefault();
  };

  // show tooltip input thêm người nhận
  // eslint-disable-next-line react/sort-comp
  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      tooltipOpen: newArray,
    });
  }
  
  // đóng modal
  toggleSmall = async (e) => {
    await this.setState({
      modal: !this.state.modal,
    });
  };
  // hàm khi click button Chuyển tiền
  transfering = (e) => {
    this.toggleSmall();
  };
  // hàm xác nhận chuyển khoản trên modal
  comfirmTransfer = (e) => {
    this.toggleSmall();
  };

  render() {
    const { nameReceiver, accountNumberReceiver } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="5">
            <Card>
              <CardHeader>
                <i className="fa fa-location-arrow" />
                <strong>Chuyển khoản</strong>
              </CardHeader>
              <CardBody>
                <Form>
                  {/* xác nhận gửi liên ngân hàng hoặc nội bộ */}
                  <FormGroup className="">
                    <Row>
                      <Col xs="6" md="6">
                        <Input
                          type="select"
                          name="selectLg"
                          id="selectLg"
                          style={{ textJustify: 'right' }}
                          disabled={this.state.switchBankCode === false}
                        >
                          <option value="0">Chọn ngân hàng liên kết</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </Input>
                      </Col>
                      <Col style={{ alignSelf: 'center' }}>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customSwitchesChecked"
                            onChange={(e) =>
                              this.handleSwitchChange(e.target.checked)
                            }
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customSwitchesChecked"
                          >
                            Liên ngân hàng
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                  {/* số tài khoản thanh toán của bạn */}
                  <FormGroup row>
                    <Col md="4" style={{ alignSelf: 'center' }}>
                      <Label htmlFor="checkingAccountNumber">STK của bạn</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="text"
                        id="accountNumber"
                        name="checkingAccountNumber"
                        value="adfwetfwegggggggwagr"
                        disabled
                      />
                    </Col>
                  </FormGroup>
                  {/* số tài khoản thanh toán của người nhận */}
                  <FormGroup row>
                    <Col md="4" style={{ alignSelf: 'center' }}>
                      <Label htmlFor="accountNumberReceiver">
                        STK người nhận
                      </Label>
                    </Col>
                    <Col xs="12" md="8">
                      <InputGroup>
                        <Input placeholder="Số tài khoản của người nhận..." />
                        <InputGroupAddon addonType="append">
                          <Button
                            onClick={this.handleCommitAccountNumber}
                            color="primary"
                          >
                            <i
                              className="fa fa-refresh"
                              style={{ color: 'white' }}
                            />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  {/* kết quả trả về khi nhập stk người nhận */}
                  <Collapse isOpen={this.state.collapse}>
                    <FormGroup row>
                      <Col md="4" />
                      <Col xs="12" md="8">
                        <label style={{ color: 'red' }}>err nè he...</label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4" style={{ alignSelf: 'center' }}>
                        <Label htmlFor="nameReceiver">Tên người nhận</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input
                          type="text"
                          id="nameReceiver"
                          name="nameReceiver"
                          value="nguyễn văn a"
                          disabled
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4" style={{ alignSelf: 'center' }}>
                        <Label htmlFor="emailReceiver">Email người nhận</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input
                          type="text"
                          id="emailReceiver"
                          name="emailReceiver"
                          value="nva@gmail.com"
                          disabled
                        />
                      </Col>
                    </FormGroup>
                  </Collapse>
                  {/* số tiền cần chuyển */}
                  <FormGroup row>
                    <Col md="4" style={{ alignSelf: 'center' }}>
                      <Label htmlFor="amount">Số tiền gửi</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        id="amount"
                        name="amount"
                        value="1000000"
                      />
                    </Col>
                  </FormGroup>
                  {/* nội dung chuyển tiền */}
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="contentTransfer">
                        Nội dung chuyển tiền
                      </Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="textarea"
                        name="contentTransfer"
                        id="textarea-input"
                        rows="3"
                        style={{ minHeight: '40px', maxHeight: '100px' }}
                        placeholder="Nội dung..."
                      />
                    </Col>
                  </FormGroup>
                  {/* hình thức trả phí */}
                  <FormGroup row>
                    <Col md="4" style={{ alignSelf: 'center' }}>
                      <Label htmlFor="typePay">Hình thức trả phí</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input type="select" name="typePay" id="typePay">
                        <option value="0">Chọn hình thức trả phí</option>
                        <option value="1">Người gửi</option>
                        <option value="2">Người nhận</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  color="primary"
                  style={{ marginRight: '15px' }}
                  type="submit"
                  onClick={this.toggleSmall}
                >
                  Chuyển tiền
                </Button>
                <Button color="warning">Reset</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleSmall}
                  className="modal-sm"
                >
                  <ModalHeader toggle={this.toggleSmall}>Xác nhận</ModalHeader>
                  <ModalBody>
                    <Label>
                      Vui lòng kiểm tra email và nhập mã code được gủi tại đây
                      để hoàn tất chuyển khoản.
                    </Label>
                    <Input type="text" placeholder="Nhập mã code..." />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.comfirmTransfer}>
                      Xác nhận
                    </Button>{' '}
                    <Button color="secondary" onClick={this.toggleSmall}>
                      Hủy
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" xl="7">
            <Card>
              <CardHeader>
                <i className="fa fa-address-card-o" />
                <strong>Danh sách người nhận</strong>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Col md="3" style={{ alignSelf: 'center' }}>
                      <Label htmlFor="nameReceiverOfList">Tên người nhận</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <span>
                        <Input
                          type="text"
                          id="nameReceiverOfList"
                          name="nameReceiverOfList"
                          value={nameReceiver}
                          placeholder="Nhập tên thay thế..."
                          onChange={(e) => {}}
                        />
                        <Tooltip
                          placement="top"
                          isOpen={this.state.tooltipOpen[0]}
                          target="nameReceiverOfList"
                          toggle={() => {
                            this.toggle(0);
                          }}
                        >
                          Đặt tên thay thế hoặc để trống (mặc định là tên chủ tài khoản)!
                        </Tooltip>
                      </span>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" style={{ alignSelf: 'center' }}>
                      <Label htmlFor="numberReceiverOfList">Số tài khoản</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input
                        type="text"
                        id="numberReceiverOfList"
                        name="numberReceiverOfList"
                        value={accountNumberReceiver}
                        placeholder="Nhập số tài khoản..."
                        onChange={(e) => {}}
                      />
                    </Col>
                  </FormGroup>
                  <Button
                    color="primary"
                    key="btnAdd"
                    style={{ marginRight: '15px', width: ' 90px' }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <i className="fa fa-plus" /> Thêm
                  </Button>
                  <Button
                    color="primary"
                    key="btnSave"
                    style={{ marginRight: '15px', width: ' 90px' }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <i className="fa fa-save" /> Lưu
                  </Button>
                </Form>
                <hr
                  style={{
                    color: 'grey',
                    height: 2,
                  }}
                />
                <CDataTable
                  items={usersData}
                  tableFilter
                  itemsPerPage={8}
                  hover
                  sorter
                  pagination
                  fields={[
                    { key: 'id', _style: { width: '3%' } },
                    {
                      key: 'name',
                      _style: { width: '35%' },
                      label: 'Họ và tên',
                    },
                    {
                      key: 'accountNumber',
                      _style: { width: '35%' },
                      label: 'Số tài khoản',
                    },
                    {
                      key: 'action',
                      label: '',
                      sorter: false,
                      filter: false,
                    },
                  ]}
                  scopedSlots={{
                    action: (item, index) => {
                      return (
                        <td>
                          <Row
                            className="text-center"
                            style={{ width: '100px' }}
                          >
                            <Button
                              size="sm"
                              color="danger"
                              className="btn-pill"
                              style={{ marginRight: '5px' }}
                            >
                              <i className="fa fa-trash-o" />
                            </Button>
                            <Button
                              size="sm"
                              color="success"
                              className="btn-pill"
                              style={{ marginRight: '5px' }}
                              onClick={(e) => {
                                this.setState({ nameReceiver: item.name });
                                this.setState({
                                  accountNumberReceiver: item.accountNumber,
                                });
                              }}
                            >
                              <i className="fa fa-pencil" />
                            </Button>
                            <Button
                              size="sm"
                              color="primary"
                              className="btn-pill"
                            >
                              <i className="fa fa-ticket" />
                            </Button>
                          </Row>
                        </td>
                      );
                    },
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transfer;
