const a = {
  _toto: 'titi',
  get toto() {
    console.log('coucou je suis un hacker');
    return this._toto;
  },

  set toto(val) {
    console.log('hello je hacke encore');
    this._toto = val;
  },
  tata: 23,
};

console.log('a.toto: ', a.toto);
a.toto = 'tutu';
