import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from '';
import './Modal.css'

class ModalBootstrap extends Component {

    constructor() {
        super();

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            isOpen: false
          };
    }
 
    openModal = () => {
      this.setState({
        isOpen: true
      });
    };
     
    hideModal = () => {
      this.setState({
        isOpen: false
      });
    };

    render() {
        return (
            <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
                <ModalHeader>
                    <ModalClose onClick={this.hideModal} />
                    <ModalTitle>Modal title</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
                      explicabo hic incidunt placeat quasi repellendus soluta,
                      vero. Autem delectus est laborum minus modi molestias
      natus provident, quidem rerum sint, voluptas!</p>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-default' onClick={this.hideModal}>
                        Close
    </button>
                    <button className='btn btn-primary'>
                        Save changes
    </button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalBootstrap;