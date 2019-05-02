import { backgroundColor } from './colors'
import { textFontFamily } from './fonts'

export default () => (
    <div>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Knewave');

        @font-face {
          font-family: 'lazer84regular';
          src: url('/static/fonts/lazer84-webfont.woff2') format('woff2'),
               url('/static/fonts/Lazer84.ttf') format('ttf'),
               url('/static/fonts/lazer84-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }

        body {
            background: ${backgroundColor};
            color: #fff;
            font-family: ${textFontFamily};
            font-size: 14px;
            line-height: 1.5;
            padding: 0;
            margin: 0;
            width: 100%;
        }
      `}
      </style>
    </div>
  )