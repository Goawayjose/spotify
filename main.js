var app = new Vue({
  el: '#app',
  data: {
    songs: {
      song1: {
        id: 1,
        title: 'Famous',
        artist: 'Kanye West',
        trackMp3: 'tunes/Famous.mp3'
      },
      song2: {
        id: 2,
        title: 'Let it Happen',
        artist: 'Tame Impala',
        trackMp3: 'tunes/Let_It_Happen.mp3'
      }
    },
    song: {

    }
  }
});




console.log(app.$data.songs);

console.log(app.$data.song);
