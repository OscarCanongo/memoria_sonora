import React, { Fragment } from 'react';
import Introduction from './components/Introduction/Introduction';
import Description from './components/Description/Description';
import Exhibitions from './components/Exhibition/Exhibition';
import Footer from './components/Footer/Footer';
import Audio from './components/Audio/MultiPlayer';

function App() {

  return (
    <Fragment>
      <Introduction/>
      <Description/>
      <Audio
        urls={[
          'https://secure24.syncusercontent.com/mfs-60:0e1c8f89a788f638441e177d87f35ee7=============================/p/Celso%20Pina%2C%20Control%20Machete-%20Cumbia%20Sobre%20El%20Rio.mp3?allowdd=0&datakey=cP1ebbFoSbxnsi7e8Txf8+iTiFxL6aUNaLlsMrqg1zlgOcJgKIQd0/N0+kJvY4O+y804Fh8/RPbDPShzYFP/uDbRuG7BIg1W0ANvs0K2WGURQ3hWJRxaIMjSTfQhUb/UqaK8ekbXI7IHB5mZGY7JJpYbVq5Pkc0XsWfSayO1wKEjVrP+Tqtg0WPy0dkfn47wMhydJBQpzb5/9nOkg4/RN3XxFYPM40KhIN8Q2pmi9ZGClkM0Yjmi0oxwO/4+o8a0pianUfyfGldzLAaLOspj1zLv5G64YoF7jaLG/2+hrd9pELVPckVB96o5d8FgZpfO61Vq8NnhypSRM/3V2+wELg&engine=ln-3.1.46&errurl=dhW4yn/X4PcJz2OUxTBrsD7rYu+zvuJQqzCGB4gDRgXIeWCijrC8Ttv8/caQs+g0DdvJ05vLOdd/67LR2Kec8gT29kfp8hea34U7/bMLgX3q+LyMltuwzNwQfMxE3Uyi/P3AYsTdQLItWuxmmhfkr9kU9BHN5rpMyhKG5zknMDnDKMGE01XVpMnEjjzWaI+AScdKAgwmqF4RNdzBpe3nzmXiDXRHp8I6r+NG45TBO5oAa216M1iIBHVHXxGRgARUdpnUY3aNS8AyTZuMtvmvXrjqm805ckay/TXAbNTxCyNyp9cnxwxRuzs/1AApU4daboVBbg/vCWaTXeSjcGW7Yw==&header1=Q29udGVudC1UeXBlOiBhdWRpby9tcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQ2Vsc28lMjBQaW5hJTJDJTIwQ29udHJvbCUyME1hY2hldGUtJTIwQ3VtYmlhJTIwU29icmUlMjBFbCUyMFJpby5tcDMiO2ZpbGVuYW1lKj1VVEYtOCcnQ2Vsc28lMjBQaW5hJTJDJTIwQ29udHJvbCUyME1hY2hldGUtJTIwQ3VtYmlhJTIwU29icmUlMjBFbCUyMFJpby5tcDM7&ipaddress=b37d879e507bd2337bc5c45cb8a6be8f7bc56efa&linkcachekey=2db593960&linkoid=1003400004&mode=100&sharelink_id=9561893090004&timestamp=1598503627391&uagent=9fd0d067b7b6c0dd335e64c2ff3fdf38e45ce621&signature=725e531a9b4dce8fea4f9f984f320b1cd30b47f5&cachekey=60:0e1c8f89a788f638441e177d87f35ee7============================='
        ]}
      />
      <div className = "container mt-5">
        <Exhibitions/>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default App;
