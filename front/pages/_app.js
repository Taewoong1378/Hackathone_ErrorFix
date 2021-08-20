// pages/_app.js

import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

const Nodebird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Nodebird</title>
            </Head> 
            <Component />
        </>
    );
};

Nodebird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}
// elementType은 HTML 요소를 표현하며 이를 통해 태그 이름이나 자식, 
// 속성 같은 정보에 접근이 가능하다.

export default Nodebird;