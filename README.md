Cybits Wallet
===============

Your portal into your decentralized digital life
----------------------------

The Cybits Wallet is the one-stop-app that users can manage their coins.
It is a full features wallet app that will soon support multiple cryptocurrencies.

Running the Cybits Wallet allows you to participate in staking of your coins, and help support the Cybits network. 

![Cybits Wallet screenshot (2021-11-01)](doc/images/cybits-wallet.png "Cybits Wallet (2021-11-01)")

## 💿 Installation

You'll find the latest releases on the [releases](https://github.com/CybitsBlockchain/cybits-wallet/releases) tab. Make sure you pick the latest release.

### Auto Updates

Cybits Wallet has built in support for updates. They are not installed automatically, but you as
a user are in control. On each startup, Cybits Wallet will check for a new version. Additionally if
you have been running Cybits Wallet for a long time, you can perform a manual update check in the menu.

When an update is available, there will appear an icon on the menu. Click this icon, to see
update information and perform a download and installation.

### Tooling Versions
Node: 16.13.0
[node](https://nodejs.org/en/blog/release/v16.13.0/)

npm: v7.5.6 

```npm install -g npm@7.5.6```

Angular: v11.0.9

### Windows

For Windows, we decided to support both 32-bit and 64-bit installations of Windows.  

Simply download the latest win-x86.exe or win-x64.exe file from the [releases](https://github.com/CybitsBlockchain/cybits-wallet/releases) page and run
the installer. You might need to approve installation of unsigned installer. This will only
be required until we have a signed release available.

### Linux

Install .net core
```
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-3.1
```
Install git
```
sudo apt-get install git
```
Install curl
```
sudo apt-get install curl
```
#Install nodejs (reference: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04 )
```
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
sudo npm install npm@latest -g
sudo npm install -g npm@8.1.4
```

Install Dependencies
```
sudo npm install -g @angular/cli
sudo npm install -g typescript
sudo npm install -g npm-run-all
sudo npm install -g wait-on
sudo npm install -g electron 
sudo apt-get install libatk1.0-0
sudo apt-get install libatk-bridge2.0-0
sudo apt-get install librust-gdk-pixbuf-sys-dev
sudo apt-get install libgtk-3-0
sudo apt-get install libgbm1
```

Install the Cybits BlockCore Node
```
git clone --depth 1 --branch v1.0.7 https://github.com/CybitsBlockchain/cybits-wallet.git
wget https://github.com/CybitsBlockchain/blockcore/releases/download/v1.0.24/Cybits.Node-1.0.24-linux-x64.tar.gz
mkdir cybits-wallet/daemon
tar -zxf Cybits.Node-1.0.24-linux-x64.tar.gz --directory cybits-wallet/daemon/
```

Install Angular
```
cd ~/cybits-wallet
npm install --save-dev @angular-devkit/build-angular --legacy-peer-deps
```

Build
```
npm run-script build:linux
```
The Binary will be located at ~/cybits-wallet/build/Cybits-1.0.7-linux-x86_64.AppImage

Make the Binary Executable
```
chmod u+x Cybits-1.0.7-linux-x86_64.AppImage
```

Execute/Run
```
./Cybits-1.0.7-linux-x86_64.AppImage
```

### Mac

The MacOS Binary can be downloaded in the [releases](https://github.com/CybitsBlockchain/cybits-wallet/releases) page:

Special Note to Mac Users:
You'll get a warning when trying to open the app warning about untrusted signatures. We are working on a signing solution soon.  

In the meantime:
```
Open Finder.
Locate the app.
Control+Click the app.
Select Open.
Click Open.
```

The app should be saved as an exception in your security settings, allowing you to open it in the future.

## Contribution

If you're interested in being a contributor and want to get involved in development of Cybits and the Cybits Wallet, get started by reading these:

* [Block Core: Documentation](https://docs.blockcore.net)
Join out Discord server at [Cybits Discord Server](https://discord.gg/aDSRZ5DApw)

# License

MIT @ Cybits   
MIT @ Blockcore   
MIT @ City Chain Foundation   
MIT @ Stratisplatform   
