/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { SocialRow } from "../components/Navbar";
import Base from '../layouts/Base';
import { colors, queries } from '../assets/styles/theme';

const indexStyle = css`
    margin-top: 72px;

    .text-content {
        a {
            color: ${colors.white};
            text-decoration: none;
        }
    
        a:hover {
            color: ${colors.primary};
            border-bottom: 2px solid currentColor;
        }
    }

    .social-icons {
        width: 156px;
        margin-bottom: 24px;
        display: none;
        
        @media screen and (max-width: ${queries.small}px) {
            display: block;
        }
    }
`;

function Index() {

    let content = (
        <div css={indexStyle}>
            <div className='text-content'>
                <h1>Hi, I'm Akhil.</h1>
                <h2>Product designer + iOS developer</h2>
                <h3>Former Design Chair @ <a href='https://www.thecrimson.com' target='_blank'>The Harvard Crimson</a></h3>
                <h3>Former iOS intern @ <a href='https://squareup.com/us/en' target='_blank'>Square</a>, <a href='https://www.washingtonpost.com/' target='_blank'>The Washington Post</a>, and <a href='https://www.glooko.com' target='_blank'>Glooko</a></h3>
            </div>
            <div className='social-icons'><SocialRow /></div>
        </div>
    );

    return (<Base>{content}</Base>)
}

export default Index;