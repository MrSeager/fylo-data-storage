import React, { FC } from 'react';
//Bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Components
import './FyloDataStorageStyle.css';
import ColOne from './ColOne.tsx';
import ColTwo from './ColTwo.tsx';
//Images
import LogoImg from '../images/logo.svg';
import DocImg from '../images/icon-document.svg';
import FolImg from '../images/icon-folder.svg';
import UplImg from '../images/icon-upload.svg';

const FyloDataStorage: FC = () => {
    const percNum = 81.5;
    const spaceLeft = 185;

    return (
        <Container fluid className='min-vh-100 overflow-hidden cs-bg-image d-flex flex-column align-items-center justify-content-center'>
            <Container fluid className='cs-w'>
                <Row className='gap-lg-0 gap-3'>
                    <Col lg={3} xs={12}>
                        <ColOne 
                            LogoImg={LogoImg}
                            DocImg={DocImg}
                            FolImg={FolImg}
                            UplImg={UplImg}
                        />
                    </Col>
                    <Col lg={9} xs={12} className='d-flex flex-column justify-content-end'>
                        <ColTwo 
                            percNum={percNum}
                            spaceLeft={spaceLeft}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default FyloDataStorage;