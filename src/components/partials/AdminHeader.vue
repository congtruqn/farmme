<template>
    <section class="header-area">
        <div class="navbar-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="#">
                                <img src="@/assets/images/logo.png" alt="Logo">
                            </a>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarEight" aria-controls="navbarEight" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarEight">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="page-scroll" href="#home">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#about">ABOUT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#portfolio">PORTFOLIO</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#pricing">PRICING</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#testimonial">CLIENTS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#contact">CONTACT</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="navbar-btn d-none mt-15 d-lg-inline-block">
                                <a class="menu-bar" href="#side-menu-right"><i class="lni-menu"></i></a>
                            </div>
                        </nav> <!-- navbar -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- navbar area -->
        
        <div id="home" class="slider-area">
            <div class="bd-example">
                <div id="carouselOne" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselOne" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselOne" data-slide-to="1"></li>
                        <li data-target="#carouselOne" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item bg_cover active bg_cover1">
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-6 col-lg-7 col-sm-10">
                                            <h2 class="carousel-title">Refreshing Design & Easy to Customize</h2>
                                            <ul class="carousel-btn rounded-buttons">
                                                <li><a class="main-btn rounded-three" href="#">GET STARTED</a></li>
                                                <li><a class="main-btn rounded-one" href="#">DOWNLOAD</a></li>
                                            </ul>
                                        </div>
                                    </div> <!-- row -->
                                </div> <!-- container -->
                            </div> <!-- carousel caption -->
                        </div> <!-- carousel-item -->

                        <div class="carousel-item bg_cover" style="background-image: url(@/assets/images/slider-2.jpg)">
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-6 col-lg-7 col-sm-10">
                                            <h2 class="carousel-title">Based on Latest Bootstrap & HTML5</h2>
                                            <ul class="carousel-btn rounded-buttons">
                                                <li><a class="main-btn rounded-three" href="#">GET STARTED</a></li>
                                                <li><a class="main-btn rounded-one" href="#">DOWNLOAD</a></li>
                                            </ul>
                                        </div>
                                    </div> <!-- row -->
                                </div> <!-- container -->
                            </div> <!-- carousel caption -->
                        </div> <!-- carousel-item -->

                        <div class="carousel-item bg_cover" style="background-image: url(@/assets/images/slider-3.jpg)">
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-6 col-lg-7 col-sm-10">
                                            <h2 class="carousel-title">Multi-purpose Landing Page Template</h2>
                                            <ul class="carousel-btn rounded-buttons">
                                                <li><a class="main-btn rounded-three" href="#">GET STARTED</a></li>
                                                <li><a class="main-btn rounded-one" href="#">DOWNLOAD</a></li>
                                            </ul>
                                        </div>
                                    </div> <!-- row -->
                                </div> <!-- container -->
                            </div> <!-- carousel caption -->
                        </div> <!-- carousel-item -->
                    </div> <!-- carousel-inner -->

                    <a class="carousel-control-prev" href="#carouselOne" role="button" data-slide="prev">
                        <i class="lni-arrow-left-circle"></i>
                    </a>

                    <a class="carousel-control-next" href="#carouselOne" role="button" data-slide="next">
                        <i class="lni-arrow-right-circle"></i>
                    </a>
                </div> <!-- carousel -->
            </div> <!-- bd-example -->
        </div>
    </section>
</template>
<script>
  import Web3 from 'web3/dist/web3.min.js'
  import AppClient from '@/plugins/client.js';
  const appClient = new AppClient();
  export default {
    name: 'AdminHeader',
    data () {
      return {
        isShow:false,
        isShowLang:false,
        address:null
      }
    },
    created: async function() {
      try {
        await initWeb3();
        this.isLoginButtonDisabled = false;
        this.observe();
        this.address = await getAddress();
      }
      catch (e) {
        console.log(e)
      }
    },
    methods: {
      login: async function() {
        try {
          if (window.ethereum) {
            await ethereum.enable();
          }
          console.log(ethereum)
          let address = await getAddress();
          console.log(address)
          if (address === null) {
            //throw new AppError('Please unlock MetaMask account');
          }

          let networkId = await getNetworkId();
          if (networkId !== 3) {
            //throw new AppError('Please connect MetaMask to Ropsten Test Network');
          }

          let challengeResult = await appClient.challenge(address);
          let signature       = await signTypedData(address, challengeResult.challenge);
          let authorizeResult = await appClient.authorize(address, signature);

          appClient.setToken(authorizeResult.token);

          this.user                 = await appClient.getUser(address);
          this.isObservationEnabled = true;
        }
        catch (e) {
          console.log(e)
        }
      },
      observe: async function() {
        try {
          setTimeout(this.observe, 1000);

          if (!this.isObservationEnabled) {
            return;
          }

          let address = await getAddress();
          if (address === this.user.address) {
            return
          }
          else {
            this.$alert('Account has changed');
            this.logout();
          }
        }
        catch (e) {
          this.handleError(e);
        }
      },
    }
    
  }
  function initWeb3() {
    return new Promise((resolve, reject) => {
      console.log(window.web3)
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
      }
      else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
      }
      else {
        return reject(new AppError('Please install MetaMask'));
      }
      try {
        window.localStorage;
      }
      catch(e) {
        return reject(new AppError('Please allow 3rd party cookies for web3.js 1.0.0'));
      }
      window.web3.extend({
        property: 'app',
        methods: [{
          name: 'signTypedData',
          call: 'eth_signTypedData',
          params: 1,
        }],
      });
      resolve();
  });
}
function getAddress() {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts().then((accounts) => {
      if (accounts.length <= 0) {
        return resolve(null);
      }
      resolve(accounts[0]);
    })
  });
}
function getNetworkId() {
  return web3.eth.net.getId();
}
function signTypedData(address, value) {
  return web3.app.signTypedData([{
    type: 'string',
    name: 'challenge',
    value: value,
  }], address);
}
</script>