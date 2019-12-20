/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Link from 'next/link';
import logo from '../assets/img/Logo.svg';
import dribbble from '../assets/img/dribbble.svg';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import medium from '../assets/img/medium.svg';
import { queries } from '../assets/styles/theme';

const navbarStyle = css`
    margin: 0 auto;
    padding-top: 48px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
        height: 48px;
    }

    .social-icons {
        @media screen and (max-width: ${queries.small}px) {
            display: none;
        }
    }
`;

export function Navbar() {
    return (
        <div css={navbarStyle}>
            <img className='logo' src={logo} />
            <div className='social-icons'><SocialRow /></div>
        </div>
    )
}

const socialRowStyle = css`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;

    a, img {
        height: 24px;
    }
`;

export function SocialRow() {
    return (
        <div css={socialRowStyle}>
            <a href='https://dribbble.com/awdesigns' target='_blank'><img src={dribbble} /></a>
            <a href='https://github.com/akhilwaghmare' target='_blank'><img src={github} /></a>
            <a href='https://www.linkedin.com/in/akhilwaghmare' target='_blank'><img src={linkedin} /></a>
            <a href='https://medium.com/@akhilwaghmare' target='_blank'><img src={medium} /></a>
        </div>
    );
}