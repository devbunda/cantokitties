import { createGlobalStyle } from 'styled-components'
import RenoMono from './fonts/RenoMono.otf'
import Upheaval from './fonts/upheavtt.ttf';
import Baloo from './fonts/Baloo.ttf';
import OpenSans from './fonts/OpenSans.ttf'
import Lato from './fonts/Lato.ttf'

// import Gumball from './Gumball.ttf';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Upheaval';
        src: url(${Upheaval}) format('truetype');
    }

    @font-face {
        font-family: 'Baloo';
        src: url(${Baloo}) format('truetype');
    }

    @font-face {
        font-family: 'Lato';
        src: url(${Lato}) format('truetype');
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSans}}) format('truetype');
    }

    @font-face {
        font-family: 'Renomono';
        src: url(${RenoMono}) format('opentype');
    }
`;

// export const Renomono = createGlobalStyle`
//     @font-face {
//         font-family: 'Renomono';
//         src: url(${RenoMono}) format('opentype');
//     }
// `;

export default GlobalStyle;