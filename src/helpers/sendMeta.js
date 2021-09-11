import swal from 'sweetalert';

export const sendMeta = async(amount, recipient, from) => {

    const Web3 = require("web3");

    const web3 = new Web3(window.ethereum);

    if (!web3.utils.isAddress(recipient)) {
      return [ 'Dirección inválida' ];
    }
  
    if (Number(amount) <= 0) {
      return [ 'Cantidad inválida' ];
    }
    
    web3.eth.sendTransaction({
        from,
        to: recipient,
        value: amount,
        }).then((result) => {
            swal("Transaction sent!", "", "success");
        })
        .catch((error) => {
            swal("Transaction Denied!", "", "error");
        });
  }