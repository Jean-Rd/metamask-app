import swal from 'sweetalert';

export const connectMetamask = async() => {

    const Web3 = require("web3");
    let form;
    let web3;

    if (window.ethereum) {
          web3 = new Web3(window.ethereum);
          
          try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
                    .then(val => swal("Successful connection!", "Make your transactions.", "success"))
                    .catch(err => swal("Need a provider!", "You will not be able to make transactions.", "info"));

            const accounts = await web3.eth.getAccounts();
    
            form = accounts;
    
          } catch (err) {
            form = ["MetaMask no se encontro."];
          }
    } else {
            form = ["Necesita un Wallet"]
    }

    return form

}



