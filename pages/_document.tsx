/* eslint-disable react/no-danger */
import {
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import React from "react";
import { Box } from 'design-system'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <Box as='body'>
                <Main />
                <NextScript />
            </Box>
        </Html>
    );
}