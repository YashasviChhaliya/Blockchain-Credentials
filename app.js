document.querySelector('.login-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.querySelector('.signup').addEventListener('click', function() {
    alert('Signup Clicked!');
});

document.querySelector('.wallet-btn').addEventListener('click', function() {
    alert('Connecting Wallet...');
});

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected account:", accounts[0]);
            return accounts[0];
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const walletButton = document.querySelector(".wallet-btn");
    const walletAddressDisplay = document.getElementById("wallet-address");

    walletButton.addEventListener("click", async function () {
        if (window.ethereum) {
            try {
                // Request wallet connection
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);

                // Display the connected wallet address
                walletAddressDisplay.textContent = `Connected: ${accounts[0]}`;
                walletButton.textContent = "Wallet Connected ✅";

                console.log("Wallet Connected:", accounts[0]);
            } catch (error) {
                console.error("Wallet Connection Error:", error);
            }
        } else {
            alert("No Web3 Wallet Detected. Please install MetaMask.");
        }
    });
});


const contractAddress = "0xEe57f820DB46443725E9f294Fc76Db58202814d9";
const contractABI = [[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "credentialHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "degree",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "university",
				"type": "string"
			}
		],
		"name": "CredentialIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "credentialHash",
				"type": "bytes32"
			}
		],
		"name": "CredentialRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_studentName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_degree",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_university",
				"type": "string"
			}
		],
		"name": "issueCredential",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_credentialHash",
				"type": "bytes32"
			}
		],
		"name": "revokeCredential",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "credentials",
		"outputs": [
			{
				"internalType": "string",
				"name": "studentName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "degree",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "university",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "issueDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isValid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_credentialHash",
				"type": "bytes32"
			}
		],
		"name": "verifyCredential",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]];

// Load Web3 Provider
async function loadContract() {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        return new ethers.Contract(contractAddress, contractABI, signer);
    } else {
        alert("Web3 wallet not detected!");
    }
}

// Issue Credential Function
async function issueCredential(studentName, degree, university) {
    const contract = await loadContract();
    try {
        const tx = await contract.issueCredential(studentName, degree, university);
        await tx.wait();
        alert("Credential Issued Successfully!");
    } catch (error) {
        console.error(error);
    }
}

// Verify Credential Function
async function verifyCredential(credentialHash) {
    const contract = await loadContract();
    try {
        const credential = await contract.verifyCredential(credentialHash);
        console.log("Credential Details:", credential);
        alert(`Student: ${credential[0]}, Degree: ${credential[1]}, University: ${credential[2]}`);
    } catch (error) {
        alert("Credential Not Found or Revoked.");
    }
}

// Revoke Credentials Function
async function revokeCredential(credentialHash) {
    const contract = await loadContract();
    try {
        const tx = await contract.revokeCredential(credentialHash);
        await tx.wait();
        alert("Credential Revoked Successfully!");
    } catch (error) {
        console.error(error);
        alert('Error revoking credential:', error);
    }
}








