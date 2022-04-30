const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  sq = [];
  constructor(type = true) {
    this.type = type;
  }
  generateSquare() {
    for (let i = 0; i < this.alpha.length; i++) {
      let row = [];
      for (let r = i; r < this.alpha.length; r++) {
        row.push(this.alpha[r]);
      }
      let j = 0;
      while (row.length < this.alpha.length) {
        row.push(this.alpha[j]);
        j += 1;
      }
      this.sq.push(row);
    }
    return this.sq;
  }

  encrypt(msg, key) {
    if (msg == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.generateSquare();
    let res = [];
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let k = 0;
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        if (k >= key.length) {
          k = 0;
        }
        res.push(
          this.sq[this.alpha.indexOf(msg[i])][this.alpha.indexOf(key[k])]
        );
        k += 1;
      } else {
        res.push(msg[i]);
      }
    }
    if (this.type) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
  decrypt(msg, key) {
    if (msg == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.generateSquare();
    let res = [];
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let k = 0;
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        if (k >= key.length) {
          k = 0;
        }
        res.push(
          this.alpha[this.sq[this.alpha.indexOf(key[k])].indexOf(msg[i])]
        );
        k += 1;
      } else {
        res.push(msg[i]);
      }
    }
    if (this.type) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
