import Head from 'next/head';
import { Navbar } from "../components/Navbar";
import { colors, fonts } from '../assets/styles/theme';

function Base(props) {
    return (
        <div>
            <Head>
                <link href='../assets/styles/fonts.css' rel='stylesheet' />
            </Head>
            <style jsx global>{`
                body {
                    background-color: ${colors.black};
                    color: ${colors.white};
                    width: 1024px;
                    max-width: 90%;
                    margin: 0 auto;
                }

                h1 {
                    font: ${fonts.h1};
                }

                h2 {
                    font: ${fonts.h2};
                }

                h3 {
                    font: ${fonts.h3};
                }
            `}</style>

            <Navbar />
            {props.children}
        </div>
    );
}

export default Base;