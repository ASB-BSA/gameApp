import Pusher from 'pusher-js';

const pusher = new Pusher('fcbd0fe292a544abd4dd', {
  cluster: 'ap3'
});

export default pusher