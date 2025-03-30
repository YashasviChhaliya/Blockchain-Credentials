# Blockchain-Credentials
This Aptos-based system issues tamper-proof degrees, stored in Metamask Wallets, with QR-based instant verification for employers. It ensures fraud prevention, decentralization, and global access. 

# Blockchain-Based Credential Verification System

## Overview
This project is a **Blockchain-Based Credential Verification System** that ensures secure, tamper-proof verification of credentials using **Polygon, Solana, or Layer-2 solutions** for cost-effective transactions. It includes **AI-powered fraud detection, self-sovereign identity (SSI), and mobile-first QR code-based verification** for seamless authentication.

## Features
- **Decentralized & Secure**: Uses blockchain technology to ensure credentials are immutable.
- **AI-Powered Fraud Detection**: Identifies fraudulent credentials using machine learning.
- **Self-Sovereign Identity (SSI)**: Users have complete control over their credentials.
- **Mobile-First QR Code Verification**: Simplifies verification using QR codes.
- **Cost-Effective Transactions**: Built on **Polygon, Solana, or Layer-2** blockchains for lower gas fees.
- **Indian Market Focus**: Potential partnerships with **UGC, AICTE, and NSDC**.

## Tech Stack
### **Frontend**
- React.js (for UI development)
- Tailwind CSS (for styling)
- Web3.js (for blockchain integration)

### **Backend**
- Flask / FastAPI (for API handling)
- Firebase (for storing non-blockchain data)
- Hardhat (for deploying smart contracts)

### **Blockchain**
- Solidity (for writing smart contracts)
- Polygon / Solana / Layer-2 solutions (for deployment)
- IPFS (for decentralized storage)

## Setup Instructions
### **Prerequisites**
- Node.js & npm
- Hardhat
- Metamask Wallet
- Python (if using Flask or FastAPI)

### **Installation**
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/credential-verification.git
   cd credential-verification
   ```

2. **Install Dependencies**
   ```sh
   npm install  # For frontend
   pip install -r requirements.txt  # For backend (if using Flask/FastAPI)
   ```

3. **Run the Smart Contracts**
   ```sh
   npx hardhat compile
   npx hardhat node
   npx hardhat run scripts/deploy.js --network localhost
   ```

4. **Start the Frontend**
   ```sh
   npm start
   ```

5. **Start the Backend**
   ```sh
   python app.py  # Flask
   uvicorn app:app --reload  # FastAPI
   ```

## Usage
- **Users**: Register and upload credentials.
- **Organizations**: Verify credentials using QR code scanning.
- **Verifiers**: Authenticate credentials on the blockchain.

## Future Enhancements
- Integration with government education boards.
- Multi-chain support (Ethereum, BSC, etc.).
- AI-based document verification.

## Contributors

## License
This project is licensed under the **MIT License**.



