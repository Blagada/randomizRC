import { backgroundColor } from './colors'

export default () => (
    <div>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Knewave');

        body {
            background: ${backgroundColor};
            color: #fff;
            font-family: verdana, arial, sans-serif;
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